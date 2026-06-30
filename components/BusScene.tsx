'use client'

import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface BusProps {
  scrollProgress: number
  isInspecting: boolean
}

const EMERALD = '#059669'
const EMERALD_DARK = '#064e3b'
const EMERALD_MID = '#047857'
const CHROME = '#c0c0c0'
const GLASS = '#93c5fd'
const RUBBER = '#1a1a1a'
const CHARCOAL = '#1f2937'

function Wheel({
  position,
  wheelRef,
}: {
  position: [number, number, number]
  wheelRef: React.RefObject<THREE.Group>
}) {
  return (
    <group ref={wheelRef} position={position}>
      {/* Tyre */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.32, 0.32, 0.28, 20]} />
        <meshStandardMaterial color={RUBBER} roughness={0.95} />
      </mesh>
      {/* Hub */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.3, 8]} />
        <meshStandardMaterial color={CHROME} metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Centre cap */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.35, 6]} />
        <meshStandardMaterial color="#374151" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  )
}

function BusMesh({ scrollProgress, isInspecting }: BusProps) {
  const outerRef = useRef<THREE.Group>(null)
  const w0 = useRef<THREE.Group>(null!)
  const w1 = useRef<THREE.Group>(null!)
  const w2 = useRef<THREE.Group>(null!)
  const w3 = useRef<THREE.Group>(null!)
  const floatT = useRef(0)

  useFrame((_state, delta) => {
    const outer = outerRef.current
    if (!outer) return

    if (isInspecting) {
      floatT.current += delta
      outer.position.y = THREE.MathUtils.lerp(outer.position.y, 0.4 + Math.sin(floatT.current * 1.4) * 0.18, 0.1)
      outer.position.x = THREE.MathUtils.lerp(outer.position.x, 0, 0.06)
    } else {
      floatT.current = 0
      outer.position.y = THREE.MathUtils.lerp(outer.position.y, 0, 0.08)
      const targetX = 8 - scrollProgress * 16
      outer.position.x = THREE.MathUtils.lerp(outer.position.x, targetX, 0.05)
    }

    const speed = delta * 4
    ;[w0, w1, w2, w3].forEach((r) => {
      if (r.current) r.current.rotation.x -= speed
    })
  })

  const sideWindows = [-1.35, -0.65, 0.05, 0.75, 1.45]

  return (
    <group ref={outerRef} position={[8, 0, 0]}>
      {/* ── UNDERCARRIAGE ── */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[3.9, 0.18, 1.7]} />
        <meshStandardMaterial color={CHARCOAL} roughness={0.9} />
      </mesh>

      {/* ── LOWER SKIRT ── */}
      <mesh position={[0, 0.42, 0]}>
        <boxGeometry args={[4.1, 0.44, 1.88]} />
        <meshStandardMaterial color={EMERALD_DARK} roughness={0.5} metalness={0.1} />
      </mesh>

      {/* ── MAIN BODY ── */}
      <mesh position={[0, 1.08, 0]} castShadow>
        <boxGeometry args={[4.0, 1.22, 1.82]} />
        <meshStandardMaterial color={EMERALD} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* ── WHITE ACCENT STRIPE (both sides) ── */}
      <mesh position={[0, 0.66, 0.922]}>
        <boxGeometry args={[4.02, 0.1, 0.01]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0.66, -0.922]}>
        <boxGeometry args={[4.02, 0.1, 0.01]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 1.28, 0.922]}>
        <boxGeometry args={[4.02, 0.06, 0.01]} />
        <meshStandardMaterial color="#d1fae5" />
      </mesh>
      <mesh position={[0, 1.28, -0.922]}>
        <boxGeometry args={[4.02, 0.06, 0.01]} />
        <meshStandardMaterial color="#d1fae5" />
      </mesh>

      {/* ── ROOF ── */}
      <mesh position={[0, 1.74, 0]} castShadow>
        <boxGeometry args={[3.85, 0.16, 1.76]} />
        <meshStandardMaterial color={EMERALD_MID} roughness={0.4} />
      </mesh>

      {/* ── AC UNIT ── */}
      <mesh position={[0.6, 1.9, -0.25]} castShadow>
        <boxGeometry args={[1.4, 0.22, 0.85]} />
        <meshStandardMaterial color="#374151" roughness={0.7} />
      </mesh>
      <mesh position={[0.6, 2.02, -0.25]}>
        <boxGeometry args={[1.3, 0.04, 0.75]} />
        <meshStandardMaterial color="#4b5563" roughness={0.5} />
      </mesh>

      {/* ── DESTINATION BOARD (front) ── */}
      <mesh position={[2.01, 1.61, 0]}>
        <boxGeometry args={[0.04, 0.22, 1.15]} />
        <meshStandardMaterial color="#ffffff" emissive="#ccffee" emissiveIntensity={0.4} />
      </mesh>

      {/* ── WINDSHIELD (front) ── */}
      <mesh position={[2.01, 1.02, 0]}>
        <boxGeometry args={[0.06, 0.88, 1.44]} />
        <meshStandardMaterial color={GLASS} transparent opacity={0.55} roughness={0} metalness={0.05} />
      </mesh>

      {/* ── REAR WINDOW ── */}
      <mesh position={[-2.01, 1.02, 0]}>
        <boxGeometry args={[0.06, 0.72, 1.38]} />
        <meshStandardMaterial color={GLASS} transparent opacity={0.48} roughness={0} metalness={0.05} />
      </mesh>

      {/* ── SIDE WINDOWS — right (z positive) ── */}
      {sideWindows.map((x, i) => (
        <mesh key={`wr-${i}`} position={[x, 1.1, 0.922]}>
          <boxGeometry args={[0.55, 0.5, 0.06]} />
          <meshStandardMaterial color={GLASS} transparent opacity={0.6} roughness={0} />
        </mesh>
      ))}

      {/* ── SIDE WINDOWS — left (z negative) ── */}
      {sideWindows.map((x, i) => (
        <mesh key={`wl-${i}`} position={[x, 1.1, -0.922]}>
          <boxGeometry args={[0.55, 0.5, 0.06]} />
          <meshStandardMaterial color={GLASS} transparent opacity={0.6} roughness={0} />
        </mesh>
      ))}

      {/* ── FRONT BUMPER ── */}
      <mesh position={[2.06, 0.26, 0]}>
        <boxGeometry args={[0.12, 0.28, 1.86]} />
        <meshStandardMaterial color={CHROME} metalness={0.85} roughness={0.15} />
      </mesh>

      {/* ── REAR BUMPER ── */}
      <mesh position={[-2.06, 0.26, 0]}>
        <boxGeometry args={[0.12, 0.28, 1.86]} />
        <meshStandardMaterial color={CHROME} metalness={0.85} roughness={0.15} />
      </mesh>

      {/* ── HEADLIGHTS (yellow emissive) ── */}
      <mesh position={[2.03, 0.75, 0.62]}>
        <boxGeometry args={[0.05, 0.22, 0.34]} />
        <meshStandardMaterial color="#fef9c3" emissive="#fbbf24" emissiveIntensity={3} />
      </mesh>
      <mesh position={[2.03, 0.75, -0.62]}>
        <boxGeometry args={[0.05, 0.22, 0.34]} />
        <meshStandardMaterial color="#fef9c3" emissive="#fbbf24" emissiveIntensity={3} />
      </mesh>

      {/* ── TAIL LIGHTS (red emissive) ── */}
      <mesh position={[-2.03, 0.75, 0.62]}>
        <boxGeometry args={[0.05, 0.22, 0.34]} />
        <meshStandardMaterial color="#fecaca" emissive="#ef4444" emissiveIntensity={2.5} />
      </mesh>
      <mesh position={[-2.03, 0.75, -0.62]}>
        <boxGeometry args={[0.05, 0.22, 0.34]} />
        <meshStandardMaterial color="#fecaca" emissive="#ef4444" emissiveIntensity={2.5} />
      </mesh>

      {/* ── DOOR (right side) ── */}
      <mesh position={[1.3, 0.78, 0.924]}>
        <boxGeometry args={[0.62, 1.08, 0.04]} />
        <meshStandardMaterial color={EMERALD_MID} roughness={0.35} />
      </mesh>
      {/* Door window */}
      <mesh position={[1.3, 1.18, 0.928]}>
        <boxGeometry args={[0.5, 0.38, 0.04]} />
        <meshStandardMaterial color={GLASS} transparent opacity={0.58} roughness={0} />
      </mesh>
      {/* Door handle */}
      <mesh position={[1.55, 0.82, 0.96]}>
        <boxGeometry args={[0.04, 0.14, 0.05]} />
        <meshStandardMaterial color={CHROME} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* ── EXHAUST PIPE ── */}
      <mesh position={[-1.9, 0.22, -0.8]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* ── WHEELS ── */}
      <Wheel position={[1.42, 0.32, 1.0]} wheelRef={w0} />
      <Wheel position={[1.42, 0.32, -1.0]} wheelRef={w1} />
      <Wheel position={[-1.42, 0.32, 1.0]} wheelRef={w2} />
      <Wheel position={[-1.42, 0.32, -1.0]} wheelRef={w3} />
    </group>
  )
}

function Road() {
  return (
    <>
      {/* Reflective dark tarmac */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[50, 10]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={512}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0d1117"
          metalness={0.6}
          mirror={0}
        />
      </mesh>

      {/* Centre dashes */}
      {Array.from({ length: 14 }, (_, i) => (
        <mesh key={`dash-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[-13 + i * 2, 0.001, 0]}>
          <planeGeometry args={[1.1, 0.14]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.75} />
        </mesh>
      ))}

      {/* Shoulder lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 3.6]}>
        <planeGeometry args={[50, 0.1]} />
        <meshStandardMaterial color="#f0d060" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, -3.6]}>
        <planeGeometry args={[50, 0.1]} />
        <meshStandardMaterial color="#f0d060" transparent opacity={0.5} />
      </mesh>
    </>
  )
}

function FogSetup() {
  const { scene } = useThree()
  scene.fog = new THREE.FogExp2('#d1fae5', 0.032)
  return null
}

interface BusSceneProps {
  scrollProgress: number
}

export default function BusScene({ scrollProgress }: BusSceneProps) {
  const [isInspecting, setIsInspecting] = useState(false)

  return (
    <div className="relative w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 3.5, 9], fov: 42 }}
        onClick={() => setIsInspecting((v) => !v)}
        style={{ cursor: 'pointer', background: 'linear-gradient(to bottom, #022c22, #064e3b)' }}
      >
        <FogSetup />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[6, 10, 5]}
          intensity={1.8}
          castShadow
          shadow-mapSize={[1024, 1024]}
          color="#fff8e7"
        />
        <pointLight position={[0, 6, 2]} intensity={0.8} color="#059669" />
        <pointLight position={[4, 3, -3]} intensity={0.5} color="#fbbf24" />

        <Suspense fallback={null}>
          <BusMesh scrollProgress={scrollProgress} isInspecting={isInspecting} />
          <Road />
          <Environment preset="city" />
        </Suspense>

        {isInspecting && <OrbitControls enablePan={false} maxDistance={14} minDistance={4} />}
      </Canvas>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-xs font-medium text-emerald-800 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow">
          {isInspecting ? '↺ Drag to explore · Click to exit' : '👆 Click to inspect the bus'}
        </span>
      </div>
    </div>
  )
}

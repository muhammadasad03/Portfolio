"use client"

import { useEffect, useRef, useState } from 'react'

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!isReady || !containerRef.current) return

    let animationFrameId: number

    const initThree = async () => {
      try {
        const THREE = await import('three')

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        )
        camera.position.z = 30

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0x000000, 0.1)
        
        if (containerRef.current && containerRef.current.children.length === 0) {
          containerRef.current.appendChild(renderer.domElement)
        }

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particleCount = 1500
        const positions = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 200
          positions[i + 1] = (Math.random() - 0.5) * 200
          positions[i + 2] = (Math.random() - 0.5) * 200
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        const particlesMaterial = new THREE.PointsMaterial({
          color: 0xa855f7,
          size: 0.5,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.6,
        })

        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)

        // Create floating spheres
        const spheres: THREE.Mesh[] = []
        const sphereCount = 5

        for (let i = 0; i < sphereCount; i++) {
          const geometry = new THREE.SphereGeometry(Math.random() * 2 + 1, 32, 32)
          const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color().setHSL(0.7 + Math.random() * 0.2, 0.7, 0.6),
            wireframe: true,
            emissive: new THREE.Color().setHSL(0.7 + Math.random() * 0.2, 0.7, 0.4),
          })
          const sphere = new THREE.Mesh(geometry, material)
          sphere.position.set(
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100
          )
          sphere.userData.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5
          )
          scene.add(sphere)
          spheres.push(sphere)
        }

        // Lighting
        const light = new THREE.PointLight(0xa855f7, 1)
        light.position.set(50, 50, 50)
        scene.add(light)

        const light2 = new THREE.PointLight(0x3b82f6, 0.8)
        light2.position.set(-50, -50, 50)
        scene.add(light2)

        // Handle resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        // Animation loop
        const animate = () => {
          animationFrameId = requestAnimationFrame(animate)

          particles.rotation.x += 0.0001
          particles.rotation.y += 0.0002

          spheres.forEach((sphere) => {
            sphere.rotation.x += 0.002
            sphere.rotation.y += 0.001
            sphere.position.add(sphere.userData.velocity)

            if (Math.abs(sphere.position.x) > 50) sphere.userData.velocity.x *= -1
            if (Math.abs(sphere.position.y) > 50) sphere.userData.velocity.y *= -1
            if (Math.abs(sphere.position.z) > 50) sphere.userData.velocity.z *= -1
          })

          renderer.render(scene, camera)
        }

        animate()

        return () => {
          window.removeEventListener('resize', handleResize)
          cancelAnimationFrame(animationFrameId)
          if (containerRef.current?.contains(renderer.domElement)) {
            containerRef.current.removeChild(renderer.domElement)
          }
          renderer.dispose()
          particlesGeometry.dispose()
          particlesMaterial.dispose()
          spheres.forEach((sphere) => {
            sphere.geometry.dispose()
            ;(sphere.material as THREE.Material).dispose()
          })
        }
      } catch (error) {
        console.error('Failed to initialize Three.js background:', error)
      }
    }

    const cleanup = initThree()

    return () => {
      cleanup?.then((fn) => fn?.())
    }
  }, [isReady])

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
}

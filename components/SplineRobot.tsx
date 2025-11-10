'use client'

import { useEffect, useRef } from 'react'

export default function SplineRobot() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let splineApp: any = null

    const loadSpline = async () => {
      try {
        // Dynamically import Spline Application
        const { Application } = await import('@splinetool/runtime')
        
        if (canvasRef.current) {
          splineApp = new Application(canvasRef.current)
          await splineApp.load('https://prod.spline.design/RTHSn4kjBimMBOpa/scene.splinecode')
        }
      } catch (error) {
        console.error('Error loading Spline:', error)
      }
    }

    loadSpline()

    return () => {
      if (splineApp) {
        splineApp.dispose?.()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

export default function SplineRobot() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let splineApp: any = null

    const loadSpline = async () => {
      try {
        setLoading(true)
        // Dynamically import Spline Application
        const { Application } = await import('@splinetool/runtime')
        
        if (canvasRef.current && containerRef.current) {
          splineApp = new Application(canvasRef.current)
          await splineApp.load('https://prod.spline.design/RTHSn4kjBimMBOpa/scene.splinecode')
          setLoading(false)
        }
      } catch (error) {
        console.error('Error loading Spline:', error)
        setError(error instanceof Error ? error.message : 'Failed to load 3D model')
        setLoading(false)
      }
    }

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadSpline()
    }, 100)

    return () => {
      clearTimeout(timer)
      if (splineApp) {
        try {
          splineApp.dispose?.()
        } catch (e) {
          console.error('Error disposing Spline:', e)
        }
      }
    }
  }, [])

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6C1FFF 0%, #A85CFF 100%)' }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ color: '#FFFFFF' }}>
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p style={{ color: '#B3A9C9' }}>3D Robot Model</p>
          <p className="text-xs" style={{ color: '#B3A9C9', opacity: 0.5 }}>Unable to load</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center animate-pulse" style={{ background: 'linear-gradient(135deg, #6C1FFF 0%, #A85CFF 100%)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ color: '#FFFFFF' }}>
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm" style={{ color: '#B3A9C9' }}>Loading...</p>
          </div>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        id="spline-canvas"
        style={{ 
          width: '100%', 
          height: '100%',
          display: 'block'
        }} 
      />
    </div>
  )
}

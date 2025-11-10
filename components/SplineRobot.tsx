'use client'

import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function SplineRobot() {
  return (
    <div className="w-full h-full relative">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center animate-pulse" style={{ background: 'linear-gradient(135deg, #6C1FFF 0%, #A85CFF 100%)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ color: '#FFFFFF' }}>
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm" style={{ color: '#B3A9C9' }}>Loading 3D Model...</p>
          </div>
        </div>
      }>
        <Spline scene="https://prod.spline.design/RTHSn4kjBimMBOpa/scene.splinecode" />
      </Suspense>
    </div>
  )
}

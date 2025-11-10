'use client'

export default function SplineRobot() {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl">
      <iframe 
        src="/robot.html"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ 
          border: 'none',
          display: 'block',
          width: '100%',
          height: '100%'
        }}
        title="3D Robot Model"
        allowFullScreen
      />
    </div>
  )
}

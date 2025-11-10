'use client'

import React, { useRef, useMemo } from 'react'

interface MenuItemProps {
  link: string
  text: string
  image: string
}

interface FlowingMenuProps {
  items?: MenuItemProps[]
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full flex flex-col spotlight-card rounded-2xl">
      <div className="p-4 sm:p-6 flex-shrink-0" style={{ borderBottom: '1px solid rgba(108, 31, 255, 0.2)' }}>
        <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#FFFFFF' }}>Experience</h3>
      </div>
      <nav className="flex flex-col flex-1 overflow-hidden">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  )
}

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const marqueeInnerRef = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2)
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2)
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom'
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const experienceSection = document.getElementById('experience')
    experienceSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current || !linkRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)

    // Change text color to dark when hovering (for contrast with white background)
    linkRef.current.style.color = '#0A0812'

    // Simple CSS transitions instead of GSAP
    marqueeRef.current.style.transform = `translateY(${edge === 'top' ? '-101%' : '101%'})`
    marqueeInnerRef.current.style.transform = `translateY(${edge === 'top' ? '101%' : '-101%'})`
    
    setTimeout(() => {
      if (marqueeRef.current && marqueeInnerRef.current) {
        marqueeRef.current.style.transform = 'translateY(0%)'
        marqueeInnerRef.current.style.transform = 'translateY(0%)'
      }
    }, 50)
  }

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current || !linkRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)

    // Reset text color
    linkRef.current.style.color = '#FFFFFF'

    marqueeRef.current.style.transform = `translateY(${edge === 'top' ? '-101%' : '101%'})`
    marqueeInnerRef.current.style.transform = `translateY(${edge === 'top' ? '101%' : '-101%'})`
  }

  const repeatedMarqueeContent = useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="uppercase font-normal text-xl sm:text-2xl md:text-[2rem] leading-[1.2] px-3 sm:px-4 py-2" style={{ color: '#0A0812' }}>{text}</span>
        <div
          className="w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] my-3 sm:my-4 mx-3 sm:mx-4 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ))
  }, [text, image])

  return (
    <div className="flex-1 relative overflow-hidden text-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px]" style={{ borderBottom: '1px solid rgba(108, 31, 255, 0.2)' }} ref={itemRef}>
      <a
        ref={linkRef}
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-lg sm:text-xl md:text-2xl lg:text-[2rem] transition-colors duration-300"
        style={{ color: '#FFFFFF' }}
        href={link}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] transition-transform duration-500 ease-out"
        style={{ background: '#FFFFFF' }}
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex transition-transform duration-500 ease-out" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowingMenu
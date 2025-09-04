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
      <div className="p-6 border-b border-white/10 flex-shrink-0">
        <h3 className="text-xl font-bold text-white">Experience</h3>
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

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2)
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2)
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom'
  }

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)

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
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)

    marqueeRef.current.style.transform = `translateY(${edge === 'top' ? '-101%' : '101%'})`
    marqueeInnerRef.current.style.transform = `translateY(${edge === 'top' ? '101%' : '-101%'})`
  }

  const repeatedMarqueeContent = useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-[#060010] uppercase font-normal text-[2rem] leading-[1.2] px-4 py-2">{text}</span>
        <div
          className="w-[120px] h-[60px] my-4 mx-4 rounded-[30px] bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ))
  }, [text, image])

  return (
    <div className="flex-1 relative overflow-hidden text-center border-b border-white/10" ref={itemRef}>
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[2rem] hover:text-[#060010] focus:text-white transition-colors duration-300"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%] transition-transform duration-500 ease-out"
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
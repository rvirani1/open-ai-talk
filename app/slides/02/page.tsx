'use client'

import { Animated } from '@/app/slides/_components/Animated'
export default function Page () {
  // useEffect(() => { animationProxy.currentPage = 2 }, [])
  return (
    <Animated>
      <div className="bg-teal-600 w-full h-screen">
        I am page 2
      </div>
    </Animated>
  )
}

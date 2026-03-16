import { useEffect, useState } from 'react'

type Threshold = number | `${number}%`

export function useScrollTrigger(threshold: Threshold = 0) {
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      let limit = 0

      if (typeof threshold === 'string') {
        const percent = parseFloat(threshold) / 100

        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

        limit = scrollHeight * percent
      } else {
        limit = threshold
      }

      setTriggered(scrollY > limit)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return triggered
}

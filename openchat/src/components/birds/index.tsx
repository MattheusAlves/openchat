import React, { useRef, useEffect, useState } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import styles from '@/styles/components/birds.module.scss'

const Birds = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          backgroundAlpha: 0.0,
          color1: 0x6a5de0,
          color2: 0xa75bf0,
          quantity: 3,
          separation: 40.0
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef} className={styles['birds-container']} />
}

export default Birds

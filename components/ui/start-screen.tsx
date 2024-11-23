'use client'

import { useState, useEffect } from 'react'

export function StartScreen() {
  const [text, setText] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  const finalText = 'ANDER507'

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      setText(finalText.slice(0, index))
      index++
      if (index > finalText.length) {
        clearInterval(intervalId)
        setTimeout(() => setIsVisible(false), 3000)
      }
    }, 300)

    return () => clearInterval(intervalId)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 glitch-chromatic" data-text={text}>
          {text}
        </h1>
      </div>
    </div>
  )
}


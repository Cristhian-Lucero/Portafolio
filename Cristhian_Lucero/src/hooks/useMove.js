import { useRef, useState } from "react"

export const useMove = ({datos}) => {
    const [position, setPosition] = useState(0)
      const touchX = useRef(0)
    
      const next = () => {
        setPosition((prev) => (prev === datos.length - 1 ? 0 : prev + 1))
      }
      const prev = () => {
        setPosition((prev) => (prev === 0 ? datos.length - 1 : prev - 1))
      }
    
      const handleTouchStart = (evento) => {
        touchX.current = evento.touches[0].clientX
      }
      const handleTouchEnd = (evento) => {
        const dif = evento.changedTouches[0].clientX - touchX.current
        if (dif > 50) prev()
        if (dif < -50) next()
      }
      const handleMouseDown = (evento) => {
        touchX.current = evento.clientX
      }
      const handleMouseUp = (evento) => {
        const dif = evento.clientX - touchX.current
        if (dif > 50) prev()
        if (dif < -50) next()
      }
    return {position,handleMouseDown,handleMouseUp, handleTouchEnd, handleTouchStart, setPosition}
}
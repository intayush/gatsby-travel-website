import { useState, useEffect } from "react"

const useInView = ref => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const { current = null } = ref
    let referenceToRef
    const intersectionConfig = {
      root: null,
      threshold: 0,
      rootMargin: "-5px",
    }
    const observer = new IntersectionObserver((entries, observer) => {
      if (!isVisible && entries[0].isIntersecting) {
        setIsVisible(true)
      }
    }, intersectionConfig)

    if (!referenceToRef) {
      observer.observe(current)
      referenceToRef = current
    }

    return () => {
      if (referenceToRef) {
        observer.unobserve(referenceToRef)
      }
    }
  })

  return isVisible
}

export default useInView

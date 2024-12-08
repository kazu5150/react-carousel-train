import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '../styles/embla.css'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img 
              src="https://picsum.photos/800/400?random=1" 
              alt="スライド1"
            />
          </div>
          <div className="embla__slide">
            <img 
              src="https://picsum.photos/800/400?random=2" 
              alt="スライド2"
            />
          </div>
          <div className="embla__slide">
            <img 
              src="https://picsum.photos/800/400?random=3" 
              alt="スライド3"
            />
          </div>
          <div className="embla__slide">
            <img 
              src="https://picsum.photos/800/400?random=4" 
              alt="スライド4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
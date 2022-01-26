import useEmblaCarousel from 'embla-carousel-react'
import Slide from './Slide'
import Slides from './Slides'
import { useCallback, useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'


const Carousel = () => {

  const options = { delay: 30000 } // Options
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
  const autoplay = Autoplay(options, autoplayRoot)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])
  const [isMobile, setIsMobile] = useState(false);
  const [btnDim, setBtnDim] = useState(10);

  useEffect(() => {
    setInterval(() => {
      let maxwidth = window.innerWidth;
      let maxheight = window.innerHeight;
      if (maxheight > maxwidth && maxwidth < 1285) {
        setIsMobile(true);
        setBtnDim(maxheight/20);
      }
      else {
        setBtnDim(maxheight/18);
      }
    }, 50);
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef} >
      <div className="embla__container mx-auto">
        {Slides.map(s => {
          return <Slide 
          title={s.title} 
          img={s.img} 
          desc={isMobile? s.mobiledesc : s.desc}
          link={s.link}
          buttontext={s.buttontext}
          key={s.index}
          />
        })}
      </div>
      <Image src="/img/utilities/left.png" layout="fixed" width={btnDim} height={btnDim} className="left-btn" onClick={scrollPrev}/>
      <Image src="/img/utilities/right.png" layout="fixed" width={btnDim} height={btnDim} className="right-btn" onClick={scrollNext}/>
    </div>
  )
}

export default Carousel
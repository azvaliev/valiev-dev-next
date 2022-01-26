import Image from "next/image"
import styled from "styled-components";
import Button from "../Button";

const Slide = props => {


    const SlideHolder = styled.div`
    height: 90vh;
    width: 100%:
    @media (max-width: 768px) {
        height: 80vh;
    }
    `;
    const TextHolder = styled.div`
    margin-top: 2rem;
    `;
    const Description = styled.p`
        margin-left: 15rem;
        margin-right: 15rem;
        font-size: 1.1rem;
        line-height: 1.65rem;
        @media (max-width: 768px) {
            margin-left: 5rem;
            margin-right: 5rem;
        }
    `;
    const Border = styled.div`
        width: 60%;
        border-bottom-width: 1.5px;
    `;
    const ImageHolder = styled.div`
    max-height: 29.25vw !important;
    max-width: 100% !important;
    min-height: 29.25vw !important;
    min-width: 100% !important;
    @media (max-width: 768px) {
          max-height: 39.375vw !important;
          max-width: 70vw !important;
          min-height: 39.375vw !important;
          min-width: 70vw !important;
          margin-top: 0vh !important;
    }
    `
    

    return (
        <SlideHolder className="embla__slide pt-10 -mt-10" key={props.key} id="Portfolio">
            <div className="embla__slide__inner">
            <TextHolder className="text-center z-10">
                <h1 className=" montserrat font-light text-4xl md:text-5xl mx-auto">{props.title}</h1>
                <Border className="mx-auto mt-2"></Border>
                <Description className=" font-light mt-4 open-sans">{props.desc}</Description>
                <Button text={props.buttontext} link={props.link} external={true}/>
            </TextHolder>
            <ImageHolder className="-z-10 relative top-12 md:top-2 mx-auto">
                <Image src={props.img} layout="fill" objectFit="contain" className="slideimg" quality={100}/>
            </ImageHolder>
            </div>
        </SlideHolder>
    )
}

export default Slide;
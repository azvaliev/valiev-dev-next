import { useEffect, useState } from "react";
import Image from "next/image";

const TestimonialCard = props => {

    const [imgDim, setImgDim] = useState(10);

    useEffect(() => {
        setInterval(() => {
            setImgDim(window.innerHeight/4);
        })
    }, [])

    return (
        <div className="w-11/12 mx-auto md:w-1/3 md:mx-4 border-t-1 montserrat mt-6 md:mt-0">
            <p className="text-lg font-light my-4 text-center">
                "{props.testimonial}"
            </p>
            <div className="mx-auto w-fit h-fit rounded-full">
                <Image src={props.img} layout="fixed" width={imgDim} height={imgDim} className="rounded-full"/>
            </div>
            <h5 className="text-2xl font-medium my-2 underline  text-center everett">
                {props.name}
            </h5>
            <h5 className="text-xl font-light italic my-2 text-center open-sans">
                {props.title}
            </h5>
            
        </div>
    )
}

export default TestimonialCard;
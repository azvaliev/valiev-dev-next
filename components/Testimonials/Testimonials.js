import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

    const items = [
        {
            name:'Jonathan Bomser',
            img: '/img/testimonials/Bomser.webp',
            title:'Former client & CEO of VocalChimp, Co-Founder of Mind Purity, and Executive Director at Spiceworks Ziff Davis',
            testimonial: `Azat was awesome. He's a USA based developer that was
            very communicative. He completed the job faster than expected.
            I am hiring him again for more work`
        },
        {
            name: 'Michael Akopov',
            img: '/img/testimonials/Akopov.webp',
            title:'Owner of M2 Labs, Senior Software Engineer at TrueCar',
            testimonial:`Azat has proven to be an invaluable asset that can take
            on anything that is asked of him. I can guarantee that anyone who chooses to employ Azat will
            see a committed and determined individual that will exceed your expectations`
        },
        {
            name: 'Rudy Velasquez',
            img: '/img/testimonials/Rudy.webp',
            title: 'Recent Client & CEO of Tri Cities Lawn & Irrigation',
            testimonial: `Azat has been very professional, easy to work with,
            flexible and communicative. Went far beyond my expectations. I would definitely
            work with him again and reccomend him to any business owner.`
        }
    ]


    return (
    <div className="flex flex-col max-w-[100%] md:flex-row mx-4 pb-12">
        {items.map((Testimonial, idx) => 
            <TestimonialCard
                key={idx}
                name={Testimonial.name}
                title={Testimonial.title}
                testimonial={Testimonial.testimonial}
                img={Testimonial.img}/>
        )}
    </div>
    )
}

export default Testimonials;
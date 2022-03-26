import styled from "styled-components";
import Image from "next/image";
import { TextLoop } from "react-text-loop-next";
import Button from "../components/Button";
import Testimonials from "../components/Testimonials/Testimonials";
import SimpleSection from "../components/SimpleSection";
import Timeline from "../components/Showcase/Timeline";


const MainBG = styled.div`
  width: 100%;
  height: 100vh;
`;
const IntroWrapper = styled.div`
  height: 90vh;
  width: 100%;
  margin-top: -90vh;
`;
const Intro = styled.div`
  margin-top: 30vh;
`;

const Home = () => {

  return (
    <div>
      <MainBG className="-z-50">
        <Image src='/img/seattle2.webp' layout="fill" objectFit='contain' placeholder='blur' className="-z-50 bg-main"/>
      </MainBG>
      <IntroWrapper className="flex flex-col w-full white ">
        <Intro className="flex flex-col mx-auto w-full pb-2">
        <h1 className="text-3xl text-black montserrat font-extralight text-center">
          Hi, my name is Azat
        </h1>
        
        <h2 className="text-2xl md:text-25xl text-black mx-8 lg:mx-auto text-center mt-2 font-medium">
          I'm a Seattle based Web Developer with experience in&nbsp;
          <TextLoop
          children={[
            "React JS",
            "Next JS",
            "Modern Web Design"
          ]}
          adjustingSpeed={300}
          interval={2000}
          >
          </TextLoop>
        </h2>
        <div className="border-t-1 rounded-sm pb-2 w-2/3 mx-auto border-gray-400 ">
        </div>
        <Button text="View My Work" link="#Portfolio" external={false}/>
        </Intro>
      </IntroWrapper>
      <Timeline />
      <div className="flex flex-col bg-gray-100 w-full">
        <h1 className="montserrat text-5xl pt-8 md:py-8 font-extralight mx-auto">
          Testimonials
        </h1>
        <Testimonials/>
      </div>
      <SimpleSection title="About Me" id="About"
      text={`I'm a self-taught web developer, beginning my education at 12, 
      with 4 years of professional experience. I strive to deliver modern,
       elegant, responsive websites for both individuals and businesses.`}
      textf={`Having started multiple businesses myself, I am able to bring a
      unique and valuable perspective along with my skills to the table.`}
      gray={false}
      />
      <SimpleSection title="Let's talk" id="Contact"
      text={`I currently am open to full time positions as well as individual websites.
      I'm also looking to bring people onto my team!`}
      contact={true} gray={true}/>
    </div>
  )
}

export default Home;

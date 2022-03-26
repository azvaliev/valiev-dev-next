import styled from "styled-components";
import NavItem from "./NavItem";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = styled.div`
    height: 10vh;
    position: fixed;
`;
const NavImage = styled.div`
    height: 8vh;
    width: 8vh;
`;
    const NavImageWrapper = styled.a`
    height: 8vh;
`;

const Navbar = () => {

    const [imgD, setImgD] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImgD(window.innerHeight * 0.08);
          },
          40 // every 40ms
        );
      }, []);

    return (
        <Nav className="w-full flex flex-row-reverse z-30 white montserrat font-extralight">
            <div className=" w-1/5 md:px-4 md:w-auto my-auto">
            <NavImage className="flex m-auto mx-auto">
                <NavImageWrapper href="https://www.linkedin.com/in/azatvaliev/" className="m-auto" target="_blank" rel="noopener">
                <Image src="/img/utilities/linkedin.png" layout="fixed" width={imgD} height={imgD} />
                </NavImageWrapper>
            </NavImage>
            </div>
            <NavItem name="Contact"/>
            <NavItem name="About"/>
            <NavItem name="Portfolio" className="ml-8 md:mx-4"/>

        </Nav>
    )
}

export default Navbar;
import styled from "styled-components";
import NavItem from "./NavItem";
import Image from "next/image";

const Nav = styled.div`
    height: 10vh;
    position: fixed;
`;
const NavImage = styled.div`
    height: 8vh;
    width: 8vh;
`;

const Navbar = () => {

    return (
        <Nav className="w-full flex flex-row-reverse z-30 white montserrat font-extralight min-h-[10vh]">
            <div className="relative right-3 md:right-4 w-[5vh] h-[5vh] md:w-[7vh] md:h-[7vh] my-auto">
                <a href="https://www.linkedin.com/in/azatvaliev/" className="m-auto" target="_blank" rel="noopener">
                    <Image src="/img/utilities/linkedin.png" layout="fill" objectFit="contain" priority/>
                </a>
            </div>
            <NavItem name="Contact" className="mr-6 md:mr-10"/>
            <NavItem name="About"/>
            <NavItem name="Portfolio" className="md:ml-auto"/>

        </Nav>
    )
}

export default Navbar;
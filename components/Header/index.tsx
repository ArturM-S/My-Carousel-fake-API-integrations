import { useState } from "react";
import { Container, Menu, MenuItem, MenuButton } from "./styles";
import { IoMenu, IoLogoGithub, IoLogoLinkedin, IoCodeSlash } from "react-icons/io5";
export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return(<>
        <Container>
            <MenuButton onClick ={() => setIsOpen(!isOpen)}>
            <IoMenu/>

            </MenuButton>
          
        </Container>
          <Menu isOpen={isOpen}>
          <MenuItem href="https://github.com/ArturM-S"><IoLogoGithub/>Github</MenuItem>
          <MenuItem href="https://www.linkedin.com/in/artur-marques-silva-5207a1203/"><IoLogoLinkedin/>LinkedIn</MenuItem>
          <MenuItem><IoCodeSlash/>Stacks</MenuItem>
      </Menu>
      </>
    )
}
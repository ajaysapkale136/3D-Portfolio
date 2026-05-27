import { GitHub, LinkedIn, MenuRounded } from "@mui/icons-material";
import { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";

const Nav = styled.div`
  background: rgba(7, 10, 19, 0.78);
  backdrop-filter: blur(18px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  color: inherit;
  letter-spacing: 0;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  opacity: 0.86;
  &:hover {
    color: ${({ theme }) => theme.white};
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  gap: 12px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 999px;
  cursor: pointer;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.25s ease-in-out;
  text-decoration: none;
  background: rgba(139, 92, 246, 0.08);
  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    border-color: transparent;
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-2px);
  }
`;

const LinkedInButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 999px;
  cursor: pointer;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.25s ease-in-out;
  text-decoration: none;
  background: rgba(139, 92, 246, 0.08);
  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    border-color: transparent;
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-2px);
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: rgba(15, 23, 42, 0.96);
  backdrop-filter: blur(16px);
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0 0 22px 22px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Ajay Sapkale</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Contact">
              Contact
            </NavLink>
            <GithubButton
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              <GitHub style={{ marginRight: '8px' }} /> Github
            </GithubButton>
            <LinkedInButton
              href={Bio.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              <LinkedIn style={{ marginRight: '8px' }} /> LinkedIn
            </LinkedInButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank" rel="noreferrer">
            <GitHub style={{ marginRight: '8px' }} /> Github
          </GithubButton>
          <LinkedInButton href={Bio.linkedin} target="_blank" rel="noreferrer">
            <LinkedIn style={{ marginRight: '8px' }} /> LinkedIn
          </LinkedInButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

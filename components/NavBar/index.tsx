import * as React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MobileMenu, ResumeButton } from "./styles";

const NavBar = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  return (
    <nav
      className={`${
        isOpen ? "xs:h-44 md:h-20" : "h-20"
      } w-full xs:pt-2 md:pt-0 flex xs:flex-col md:flex-row items-center`}
    >
      <div className="xs:contents md:hidden">
        <div className={"flex w-full justify-end"}>
          <button
            className={`mt-2 hamburger hamburger--spin ${
              isOpen ? "is-active" : ""
            }`}
            type="button"
            onClick={() => setOpen(!isOpen)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <MobileMenu
          className={"flex flex-col w-full absolute top-20"}
          active={isOpen}
        >
          <ul
            className={"flex justify-center flex-col gap-10 items-center pt-4"}
          >
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li
              className={"flex w-full items-center justify-center space-x-10"}
            >
              <a
                href={"https://www.linkedin.com/in/daniel-lee-00991085/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size={35} />
              </a>
              <a
                href="https://github.com/DMZnoo?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={35} />
              </a>
            </li>
            <li>
              <ResumeButton
                href={"/Jinwoo_Lee_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </ResumeButton>
            </li>
          </ul>
        </MobileMenu>
      </div>
      <div className="xs:hidden md:contents">
        <ul
          className={
            "flex-grow place-content-end justify-end flex items-center space-x-10 pr-10"
          }
        >
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a
              href={"https://www.linkedin.com/in/daniel-lee-00991085/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={35} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DMZnoo?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={35} />
            </a>
          </li>
          <li>
            <ResumeButton
              href={"/Jinwoo_Lee_Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </ResumeButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;

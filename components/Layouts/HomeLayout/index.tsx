import * as React from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Card from "../../common/Card";
import {
  OtherProjectGrid,
  HeroHeader,
  List,
  TimeLineContainer,
  TimeLine,
  ProjectGrid,
  EmailButton,
} from "./styles";
import Section from "../../common/Section";
import ProjectItem from "../../ProjectItem";
import { FiFolder } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const HomeLayout = () => {
  const [currentYear, setCurrentYear] = React.useState<boolean[]>([
    true,
    false,
    false,
  ]);
  return (
    <main className="h-max overflow-x-hidden">
      <Fade left ssrFadeout>
        <Section className={"min-h-screen xs:px-5 lg:px-40"}>
          <p className={"mb-2"}>Hello, my name is</p>
          <HeroHeader className={"text-5xl text-white mb-8"}>
            Jinwoo Lee
          </HeroHeader>
          <p className={"text-2xl"}>
            I&apos;m a software engineer living in{" "}
            <span className={"text-red-500"}>Auckland, NZ</span>.
          </p>
          <p className={"text-2xl mb-4"}>
            I am passionate about{" "}
            <span className={"font-bold"}>responsive & scalable</span> design
            practices and writing <span className={"font-bold"}>quality</span>{" "}
            code.
          </p>
          <p className={"text-2xl mb-4"}>
            Currently, I am working at{" "}
            <span className={"font-bold text-blue-500"}>Clearhead</span> as a
            full stack developer.
          </p>
        </Section>
      </Fade>
      <Fade right ssrFadeout>
        <Section className={"py-20 xs:px-5 lg:px-40"}>
          <h1
            id={"about-me"}
            className={"text-4xl text-white mb-8 xs:self-center md:self-start"}
          >
            About Me
          </h1>
          <div className={"flex md:space-x-20 xs:flex-col md:flex-row mt-4"}>
            <div
              className={
                "w-60 xs:mb-8 md:mb-auto flex items-center justify-center self-center"
              }
            >
              <Image
                className={"rounded-full flex self-center"}
                src={"/profile.png"}
                width={"150px"}
                alt={"profile"}
                height={"150px"}
              />
            </div>
            <div>
              <div className={"flex mb-8"}>
                <p className={"text-xl mb-2"}>
                  Hi, My name is Daniel Lee and I am a Full Stack Developer
                  living in New Zealand.
                  <br />
                  <br />
                  I became interested in software development during the time
                  when I had to go back to South Korea from the United States to
                  serve in the military. It was one of the biggest transition of
                  my life and it allowed me to evaluate what I really wanted to
                  do.
                  <br />
                  <br />
                  What really attracted me most about the software development
                  is that it forces you to learn new things on the go and solve
                  interesting, yet hard problems on a daily basis. At the end,
                  you are also creating a real world application that can make
                  feasible impact to the world.
                </p>
              </div>
              <h3>Front-end Technologies</h3>
              <List columnCount={2} className={"mb-4"}>
                <li>Next JS</li>
                <li className={"text-red-500"}>Svelte</li>
                <li className={"text-blue-500"}>Flutter</li>
                <li className={"text-pink-500"}>Ruby on Rails</li>
              </List>
              <h3 className={"mb-4"}>Back-end Technologies</h3>
              <List className={"mb-4"}>
                <li>Spring Boot</li>
                <li>Node JS</li>
              </List>
              <h3 className={"mb-4"}>Dev ops and CICD</h3>
              <List className={"mb-4"}>
                <li className={"text-blue-500"}>Terraform</li>
                <li>Jenkins</li>
              </List>
            </div>
          </div>
        </Section>
      </Fade>
      <Fade left ssrFadeout>
        <Section className={"py-20 md:pb-96 xs:px-5 lg:px-40"}>
          <h1
            id={"experience"}
            className={"text-4xl text-white xs:self-center md:self-start"}
          >
            Experience
          </h1>
          <TimeLineContainer
            className={"flex xs:flex-col md:flex-row md:space-x-10"}
          >
            <TimeLine className={"xs:mb-8 md:mb-auto xs:flex md:hidden"}>
              <li
                className={`${currentYear[0] ? "active" : ""}`}
                onClick={() => setCurrentYear([true, false, false])}
              />
              <li
                className={`${currentYear[1] ? "active" : ""}`}
                onClick={() => setCurrentYear([false, true, false])}
              />
              <li
                className={`${currentYear[2] ? "active" : ""}`}
                onClick={() => setCurrentYear([false, false, true])}
              />
            </TimeLine>
            <TimeLine className="xs:mb-8 md:mb-auto xs:hidden md:block">
              <li className="active" />
              <li className="" />
              <li className="" />
            </TimeLine>
            <div>
              <AnimatePresence initial={false}>
                <motion.div
                  className={`${
                    currentYear[0] ? "xs:block" : "xs:hidden"
                  } md:block`}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <h2
                    className={
                      "text-2xl text-white mb-4 xs:text-center md:text-left"
                    }
                  >
                    Software Engineer at Clearhead
                  </h2>
                  <h3 className={"mb-2"}>Tech Stack</h3>
                  <List className={"mb-2"} columnCount={2}>
                    <li>Next JS</li>
                    <li>TypeScript</li>
                    <li>React (Hooks + Context API)</li>
                    <li>React (Class + Redux)</li>
                    <li>Styled Components</li>
                    <li>React-testing-library & Jest</li>
                    <li>Tailwind</li>
                    <li>Spring Boot</li>
                    <li>Keycloak</li>
                    <li>Jenkins</li>
                    <li>Terraform</li>
                  </List>
                  <h3 className="mt-4 mb-2">Description</h3>
                  <List>
                    <li>
                      Built the booking form for therapists and v.2 release of{" "}
                      <a
                        className={"text-blue-500 font-bold pl-1"}
                        href="https://clearhead.org.nz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wellbeing Portal
                      </a>
                    </li>
                    <li>Built v.2 release of authentication screens</li>
                    <li>
                      Implemented the first successful suite of front-end unit
                      tests
                    </li>
                    <li>
                      Built first preview page for the Chatbot UI Components
                      Library
                    </li>
                    <li className="mb-4">
                      Reduced the load time by 90% on therapist search with map
                    </li>
                  </List>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence initial={false}>
                <motion.div
                  className={`${
                    currentYear[1] ? "xs:block" : "xs:hidden"
                  } md:block`}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <h2
                    className={
                      "text-2xl text-white mb-4 xs:text-center md:text-left"
                    }
                  >
                    Internship at Clearhead
                  </h2>
                  <h3 className={"mb-2"}>Tech Stack</h3>
                  <List className={"mb-2"} columnCount={2}>
                    <li>Next JS</li>
                    <li>TypeScript</li>
                    <li>React (Hooks + Context API)</li>
                    <li>React (Class + Redux)</li>
                    <li>Styled Components</li>
                    <li>Spring Boot</li>
                    <li>Keycloak</li>
                    <li>Jenkins</li>
                    <li>Terraform</li>
                  </List>
                  <h3 className="mt-4 mb-2">Description</h3>
                  <List className={"md:mb-4"}>
                    <li>
                      Helped develop Blue-Green Deployment script to reduce
                      downtime ({"<"}45 mins) of servers and crashes due to
                      build failures.
                    </li>
                    <li>
                      Improved REST-validation and reduced redundant REST
                      endpoints
                    </li>
                    <li>
                      Worked on the launch of the product{" "}
                      <a
                        className={"pl-1 text-red-500 font-bold"}
                        href="https://clearhead.org.nz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Small Steps
                      </a>
                    </li>
                  </List>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence initial={false}>
                <motion.div
                  className={`${
                    currentYear[2] ? "xs:block" : "xs:hidden"
                  } md:block`}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <h2
                    className={
                      "text-2xl text-white mb-4 xs:text-center md:text-left"
                    }
                  >
                    Internship at Orion Health
                  </h2>
                  <h3 className={"mb-2"}>Tech Stack</h3>
                  <List className={"mb-2"} columnCount={3}>
                    <li>JQuery/CSS</li>
                    <li>Gulp</li>
                    <li>Node JS</li>
                  </List>
                  <h3 className="mt-4 mb-2">Description</h3>
                  <List>
                    <li className={"xs:mb-4 md:mb-2"}>
                      Various improvements for the{" "}
                      <a
                        className={"pl-1 text-blue-500 font-bold"}
                        href="https://developer.orionhealth.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Developer portal
                      </a>
                    </li>
                    <ul className="list-disc ml-8">
                      <li>
                        Built site-wide filter functionality and styling of the
                        filter
                      </li>
                      <li>
                        Improved styling of the site with Flex CSS and global
                        CSS variables
                      </li>
                      <li>
                        Built sample curl command/response panel for the API
                        page
                      </li>
                      <li>
                        Improved API token validation/rehydration for the
                        front-end
                      </li>
                    </ul>
                  </List>
                </motion.div>
              </AnimatePresence>
            </div>
          </TimeLineContainer>
        </Section>
      </Fade>
      <Fade right ssrFadeout>
        <Section className={"py-20 xs:px-5 lg:px-40"}>
          <h1
            id={"projects"}
            className={"text-4xl text-white xs:self-center md:self-start mb-8"}
          >
            Projects
          </h1>
          <ProjectGrid>
            <ProjectItem
              image={"/workout-logs.png"}
              title={"Workout Logging App"}
              description={
                "Through this project, I had learned how to establish a database schema and fetch data from the database to display it on the front-end of the application."
              }
              techList={["MongoDB", "Express & NodeJS", "React"]}
              github={"https://github.com/DMZnoo/Logger_App"}
            />
            <ProjectItem
              image={"/star-wars.png"}
              title={"Starwars Wiki"}
              description={
                "I had used Starwars API (freely available) to build this app. I was able to learn how to paginate/categorize large amounts of data and how to use context to reduce calls to the API."
              }
              techList={["React", "Redux", "Express & NodeJS", "Starwars API"]}
              github={"https://github.com/DMZnoo/StarwarsAPI"}
              link={"https://starwars-api-dmznoo.vercel.app/"}
            />
            <ProjectItem
              image={"/blog.png"}
              title={"Blog template"}
              description={
                'This is an on-going project to learn about Svelte & Sapper and see its potential gain as a "javascript compiler" since Svelte does not use a Virtual DOM like other frameworks such as React, Vue etc.'
              }
              techList={["Svelte", "Sapper"]}
              github={"https://github.com/DMZnoo/Blog"}
            />
          </ProjectGrid>
        </Section>
      </Fade>
      <Fade left ssrFadeout>
        <Section className={"py-20 xs:px-5 lg:px-40"}>
          <h2
            className={"text-3xl text-white xs:self-center md:self-start mb-8"}
          >
            Other Projects
          </h2>
          <OtherProjectGrid className={"md:w-3/4 self-center"}>
            <Card
              title={"Helicopter Simulator"}
              description={"Building a helicopter simulator with OpenGL/C++ "}
              top={
                <div className={"flex justify-between items-center mb-4"}>
                  <FiFolder size={30} />
                </div>
              }
              link={"https://github.com/DMZnoo/Helicopter"}
              footerContent={["OpenGL", "C++"]}
            />
            <Card
              title={"Solar System Simulator"}
              description={
                "Building a simulation of our solar system with OpenGL/C++ "
              }
              top={
                <div className={"flex justify-between items-center mb-4"}>
                  <FiFolder size={30} />
                </div>
              }
              link={"https://github.com/DMZnoo/Solar_System"}
              footerContent={["OpenGL", "C++"]}
            />
            <Card
              title={"Flutter Chatapp"}
              description={
                "Building a mobile chatbot application with Flutter and Rasa."
              }
              top={
                <div className={"flex justify-between items-center mb-4"}>
                  <FiFolder size={30} />
                </div>
              }
              link={
                "https://github.com/aider-aut/organization-wellbeing-portal"
              }
              footerContent={["Flutter", "Rasa", "Python"]}
            />
          </OtherProjectGrid>
        </Section>
      </Fade>
      <Fade right ssrFadeout>
        <Section className={"py-20 xs:px-5 lg:px-40"}>
          <h2
            className={"text-4xl text-white xs:self-center md:self-start mb-8"}
          >
            Contact
          </h2>
          <div
            className={
              "flex flex-col xs:justify-center md:justify-start xs:items-center md:items-start"
            }
          >
            <p className={"xs:text-center md:text-left mb-8"}>
              Please feel free to drop an email as I am open for new
              opportunities!
            </p>
            <div className={"flex items-center space-x-10"}>
              <EmailButton href={"mailto:daniel.jnw.lee@gmail.com"}>
                Say Hi
              </EmailButton>
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
            </div>
          </div>
        </Section>
      </Fade>
    </main>
  );
};

export default HomeLayout;

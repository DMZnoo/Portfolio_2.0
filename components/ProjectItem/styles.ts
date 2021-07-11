import styled from "styled-components";

export const ProjectContent = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  align-items: center;
  > div:first-child {
    position: relative;
  }
  > div:first-child {
    @media screen and (max-width: 768px) {
      padding: 40px 40px 30px;
      text-align: left;
    }
    @media screen and (max-width: 480px) {
      padding: 25px 25px 20px;
    }
  }
`;

export const ProjectTitle = styled.h3`
  position: relative;
  @media screen and (min-width: 768px) {
    margin: 0px 0px 20px;
  }
  @media screen and (max-width: 767px) {
    color: #FFFF;
  }
  color: var(--lightest-slate);
  z-index: 2;
  font-size: clamp(24px, 5vw, 28px);
`;

export const ProjectDescription = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  font-size: var(--fz-lg);
  
  @media screen and (max-width: 768px) {
    padding: 20px 0px;
    background-color: transparent;
    box-shadow: none;
  }
  
`;

export const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: outside none none;
  > li:before {
    content: "▹ ";
    color: rgb(16, 185, 129);
    font-size: var(--fz-sm);
    line-height: 12px;
  }
  gap: 10px;
  
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    margin: 10px 0px 10px;
  }
`;

export const ProjectImage = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: 3;
    transition: var(--transition);
    background-color: var(--navy);
    mix-blend-mode: screen;
  }
  
  > img {
    vertical-align: middle;
    position: absolute;
    border-radius: var(--border-radius);
    width: 60%;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  
  @media screen and (max-width: 767px) {
    height: 100%;
    opacity: 0.25;
  }
`;

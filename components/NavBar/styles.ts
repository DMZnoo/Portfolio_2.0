import styled from "styled-components";

interface IMobileMenu {
    active: boolean;
}

export const MobileMenu = styled.aside<IMobileMenu>`
  background-color: var(--light-navy);
  margin: 0;
  grid-row-gap: 25px;
  padding: 0;
  list-style: none;
  clear: both;
  text-align: center;
  height: ${props => props.active ? '350px' : '0px'};
  overflow: hidden;
  transition: height .4s ease;
  z-index: 120;
  -webkit-transition: all 0.3s ease;
  }
`;

export const ResumeButton = styled.a`
  color: var(--green);
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: 5px;
  padding: 1rem 1.75rem;
  text-decoration: none;
  line-height: 1rem;
  cursor: pointer;
  transition: var(--transition);
`;

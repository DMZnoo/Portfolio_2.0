import styled from "styled-components";

export const BaseCard = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: 10px;
  background-color: var(--light-navy);
`;

export const ProjectTitle = styled.h3`
  color: var(--lightest-slate);
`;

export const ProjectDescription = styled.div`
  color: var(--light-slate);
`;

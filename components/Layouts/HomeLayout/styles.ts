import styled from "styled-components";
import {HTMLAttributes} from "react";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10vw;
`;

export const HeroHeader = styled.h1`
  font-size: clamp(40px, 8vw, 80px);
`;

interface IList extends HTMLAttributes<HTMLUListElement> {
    columnCount?: number;
}

export const List = styled.ul<IList>`
  position: relative;
  display: grid;
  grid-template-columns: ${props => props.columnCount !== undefined ? `repeat(${props.columnCount}, 1fr)` : '1fr'};
  padding: 0px;
  list-style: outside none none;
  > li:before {
    content: "▹";
    position: absolute;
    left: 0px;
    top: 5px;
    color: rgb(16, 185, 129);
    font-size: var(--fz-sm);
    line-height: 12px;
  }
  > li {
    position: relative;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: bold;
  }
`;

export const TimeLineContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 50px auto;
`;

export const TimeLine = styled.ul`
  position: relative;
  max-height: inherit;
  > li {
    list-style-type: none;
    width: 45%;
    text-align: right;
    font-size: 12px;
    position: relative;
    color: #7d7d7d;
  }
  > li:first-child {
    height: 179px;
  }
  > li:nth-child(2) {
    height: 343px;
  }
  > li:first-child:before {
    content: '2019';
  }
  > li:nth-child(2):before {
    content: '2020';
  }
  > li:last-child:before {
    content: '2021';
  }
  > li:before {
    width: 35px;
    content: '';
    line-height: 30px;
    border: 2px solid #7d7d7d;
    display: block;
    text-align: center;
    margin: 0px auto 0px auto;
    border-radius: 50%;
    background-color: white;
  }
  > li:after {
    width: 2px;
    height: 100%;
    left: 16px;
    content: '';
    position: absolute;
    background-color: #7d7d7d;
  }
  @media screen and (max-width: 767px) {
    list-style-type: none;
    display: flex;
    justify-content: center;
    > li {
      width: 25%;
      float: left;
      height: auto !important;
    }
    > li:after {
      width: 100%;
      height: auto;
    }
  }
  > li:last-child:after {
    content: none;
  }
  > li.active {
    color: green;
  }
  > li.active:before {
    border-color: #55b776;
  }
  > li.active + li:after {
    background-color: #55b776;
  }
`;

export const EmailButton = styled.a`
  color: var(--green);
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: 5px;
  padding: 1rem 1.75rem;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
`;

export const OtherProjectGrid = styled.ul`
  list-style: outside none none;
  padding: 0px;
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
`;

export const ProjectGrid = styled.ul`
    width: 100%;
    > div {
      margin-bottom: 30%;
    }
  @media screen and (min-width: 768px) {
    > div:nth-of-type(odd)  img{
      margin-right: 10%;
    }
    > div:nth-of-type(even) img {
      right:0;
      margin-left: 10%;
    }
    > div:nth-of-type(odd) > li {
      text-align: right;
      margin-left: 50%;
    }
    > div:nth-of-type(odd) svg {
      position: absolute;
      right: 0;
    }
    > div:nth-of-type(even) > li {
      text-align: left;
      margin-right: 50%;
    }
    > div:nth-of-type(odd) ul {
      justify-content: flex-end;
    }
    > div:nth-of-type(even) ul {
      justify-content: flex-start;
    }
  }
`;



import * as React from 'react';
import {
    BaseCard,
    ProjectTitle,
    ProjectDescription
} from "./styles";

import {List} from '../../Layouts/HomeLayout/styles'

interface ICard {
    top?: React.ReactNode;
    title: string;
    link?: string;
    footerContent?: string[];
    description: string;
}

const Card:React.FC<ICard> = ({top,title,description, link, footerContent}) => {
    return (
        <BaseCard>
                {top}
            <ProjectTitle className={'text-2xl mb-4'}>{
                link ? (
                    <a href={`${link}`} target="_blank" rel="noopener noreferrer">{title}</a>
                ) : (
                    title
                )
            }</ProjectTitle>
            <ProjectDescription className={'mb-4'}>
                <p>{description}</p>
            </ProjectDescription>
            {footerContent && (
                <footer className={'w-full'}>
                    <List columnCount={footerContent.length}>
                        {footerContent.map((content) => {
                            return <li key={content}>{content}</li>
                        })}
                    </List>
                </footer>
            )}
        </BaseCard>
    )
};
export default Card;

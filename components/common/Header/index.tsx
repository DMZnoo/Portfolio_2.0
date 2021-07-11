import {ModifierKeys} from "styled-components-modifiers";
import {Component} from "react";
import {BaseHeader} from "./styles";

interface IHeader {
    as: 'h1' | 'h2' | 'h3' | 'h4';
    className?: any;
    modifiers?: ModifierKeys;
}

const Header: React.FC<IHeader> = ({
    children,
    modifiers,
    className,
    as,
    ...rest
}) => {

    return (
        <BaseHeader className={className} as={as} modifiers={modifiers} {...rest}>
            {children}
        </BaseHeader>
    )
}

export default Header;

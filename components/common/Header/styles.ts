import {applyStyleModifiers, ModifierKeys} from "styled-components-modifiers";
import styled from "styled-components";

interface IBaseHeader {
    as: 'h1' | 'h2' | 'h3' | 'h4';
    modifiers?: ModifierKeys;
}

const BASE_HEADER_MODIFIERS = {
    h1: () => `
        --header-font: var(--font-h1-size);
    `,
    h2: () => `
        --header-font: var(--font-h2-size);
    `,
    h3: () => `
        --header-font: var(--font-h3-size);
    `,
    h4: () => `
        --header-font: var(--font-h4-size);
    `,
    bold: () => `
        --header-font-weight: bold;
    `,
    regular: () => `
      --header-font-weight: regular;  
    `
};

export const BaseHeader = styled.h1<IBaseHeader>`
  font-size: var(--header-font-size) !important;
  font-weight: var(--header-font-weight) !important;
  
  ${applyStyleModifiers(BASE_HEADER_MODIFIERS)};
`;

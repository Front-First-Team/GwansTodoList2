
import React from "react";
import styled, { css } from "styled-components";


const MButton = function ({ variant, size, shape, children, ...rest }) {
    return <MyButton variant={variant} size={size} shape={shape}>
        {children}
    </MyButton>
}
export default MButton

const MyButton = styled.button`
    ${(props) => variantcss[props.variant]}
    ${(props) => sizecss[props.size]}
    ${(props) => shapecss[props.shape]}
`

const variantcss = {
    primary: css`
       background-color: #204ef9;
       border-color: #204ef9;
         color: white;
        `,
    secondary: css`
           background-color: #03e4cd;
           color : white;
        `,
    "primary- text": css`
         color: #0bc760;
        `
}
const sizecss = {
    small: css`
       padding: 14px 90px;
        `,
    medium: css`
       padding: 16px 32px;
        `,
    full: css`
        width: 100%;
        aspect-ratio: 8/1;
        `
}
const shapecss = {
    shape: css`
        border-radius: 8px;
        `,
    round: css`
        border-radius: 50%;
        `,
}






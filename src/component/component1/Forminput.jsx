import React from "react"
import styled, { css } from "styled-components"

const Forminput = ({ lable, size, containerStyle, ...props }) => {
    return <S.InputBox style={containerStyle}>
        <S.InputLabel></S.InputLabel>
        <S.Input size={size}{...props} />
    </S.InputBox>
}

export default Forminput

const InputBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-bottom: 16px;
width: 100%;
`

const Input = styled.input`
border: 0.1px solid #151628;
border-radius: 4px;
padding-left: 16px;
background-color: #151628;
width: 100%; height: 48px;
&::placeholder{
    text-align: center;  
    color: #204ef9;
}
`

const InputLabel = styled.label`
    position: absolute;
    left: 16px;
    top: -6px;
    font-size: 12px;
    background-color: aliceblue;
    z-index: 100;
    padding: 0 4px;
`

const S = {
    Input,
    InputBox,
    InputLabel
}
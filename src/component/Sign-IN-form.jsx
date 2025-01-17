
import React from "react"
import styled from 'styled-components'
import Forminput from "./component1/Forminput"
import MButton from "./component1/MButton"
import TDButton from "./component1/TButton"
import { useNavigate } from 'react-router-dom'

const SignInForm = function () {

    const navigate = useNavigate()

    const handlePressSignIn = (event) => {
        event.preventDefault()

        const { email, password } = event.target
        if (!email.value.trim() || !password.value.trim()) return
        alert("아이디와 비밀번호를 확인해주세요")
    }

    return <S.Form onSubmit={handlePressSignIn}>
        <Forminput lable={"이메일"} placeholder={"e-mail"} size={3} containerStyle={{
            width: 300
        }} name='email'></Forminput>
        <Forminput lable={"비밀번호"} placeholder={"pass-word"} size={3} containerStyle={{
            width: 300
        }} name='password'></Forminput>
        <MButton variant={"primary"} size={"small"} shape={"shape"}>Create an account</MButton>
    </S.Form>
}
export default SignInForm

const Form = styled.form`
background-color: '#fff';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px;
`
const InputBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-bottom: 16px;
width: 100%;
`
const Input = styled.input`
border: 1px solid #999;
border-radius: 4px;
padding-left: 16px;
width: 100%;
height: 48px;
&::placeholder{
    text-align: center;
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
    Form,
    InputBox,
    InputLabel,
    Input,
}

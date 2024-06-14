
import React from "react"
import Forminput from "./component1/Forminput"
import MButton from "./component1/MButton"
import TDButton from "./component1/TButton"
import styled from "styled-components"

const SIGNFORM_ARRAY = [{

    size: 3,
    name: "email",
    option: {
        placeholder: "e-mail"
    }
},
{
    size: 3,
    name: "password",
    option: {
        placeholder: "password"
    }
},
{

    size: 3,
    name: "password-confirm",
    option: {
        placeholder: "password-confirm"
    }
},
]

const SignUpForm = function ({ formState }) {

    const onSUbmitSignUp = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        alert(`${email}님 환영합니다`)
        formState = 'SIGN-IN'
    }
    return <Form onSubmit={onSUbmitSignUp}>
        {SIGNFORM_ARRAY.map((form, index) =>
            <Forminput key={index} size={form.size} name={form.name}
                placeholder={form.option?.placeholder}></Forminput>
        )}

        <MButton size={'full'} variant={'primary'}>회원가입</MButton>
    </Form>


}
export default SignUpForm

const Form = styled.form`
background-color: '#fff';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px;
`
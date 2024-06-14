
import styled from 'styled-components'
import SignUpForm from '../component/Sign-UP-form'
import SignInForm from '../component/Sign-IN-form'


const Main = () => {
    let formState = "SIGN-IN"
    const handlePressSignTab = (tabname) => {
        formState = tabname
    }

    const TAB_ARRAY = [
        {
            id: 1,
            name: "SIGN-IN",
            p: formState === "SIGN-IN"
        },
        {
            id: 2,
            name: "SIGN-UP",
            p: formState === "SIGN-UP"
        },
    ]

    return <S.Wrapper>
        <S.Container>
            <S.Header>
                {TAB_ARRAY.map((tab) => <S.Tab
                    $p={tab.p} key={tab.id}
                    onClick={() => handlePressSignTab}>
                    {tab.name}
                </S.Tab>)}
            </S.Header >
            <Line></Line>
            {
                formState === 'SIGN-IN' ? <SignInForm /> : <SignUpForm formState={formState} />
            }
        </S.Container>
    </S.Wrapper>

}
export default Main


const Wrapper = styled.div`
height: calc(100vh);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
`

const Line = styled.div`
height: 2px;
width: 100%;
background-color: #146d93;
`

const Container = styled.div`
    width: 360px;
    border : 2px solid #146d93;
    border-radius: 10px;
    background-color: #040405;
`

const Header = styled.header`
    background-color: #040405;
    display: flex;
    border-radius: 10px;
`
const Tab = styled.div`
    font-size: 32px;
    color: white;
    padding: 16px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #204ef9;
    }   
    background-color: "#e0e0e0;
`
const S = {
    Wrapper,
    Container,
    Header,
    Tab,
    Line
}

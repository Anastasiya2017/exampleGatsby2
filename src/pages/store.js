import React, {useState} from "react"
import styled from "styled-components"
import {SEO} from "../components/SEO"
import Container from "../styles/Container"

const Form = styled.form`
    display: grid;
    gap: 0.5rem;
    margin-top: 1rem;
`

const Input = styled.input`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    display: block;
    border: 2px solid ${({theme}) => theme.colors.black};
    font-size: 1.1rem;
    line-height: 1.5;
`

const Button = styled.button`
    font-family: "Patua One";
    justify-self: end;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.red};
    border: 2px solid ${({theme}) => theme.colors.red};
    cursor: pointer;
    width: 100%;
    line-height: 1.5;
`

const StorePage = () => {
    const [email, setEmail] = useState("")

    const onChange = event => setEmail(event.target.value)

    const onSubmit = async event => {
        event.preventDefault()

        const data = {email}

        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
        }

        const response = await fetch("/api/subscribe", options)
        const json = await response.json()
        console.log("json", json)
    }

    return (
        <Container>
            <SEO title="Store" />

            <h1>Store</h1>
            <p>
                We don&apos;t have anything for you yet, but expect some awesome
                stuff soon!
            </p>

            <Form onSubmit={onSubmit}>
                <Input type="email" value={email} onChange={onChange} />
                <Button>NOTIFY ME</Button>
            </Form>
        </Container>
    )
}

export default StorePage

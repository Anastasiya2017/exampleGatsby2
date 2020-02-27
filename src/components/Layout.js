import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import "../../node_modules/modern-normalize/modern-normalize.css"
import Sidebar from "./Sidebar/Sidebar"
import MobileHeader from "./Header/MobileHeader"
import MobileFooter from "./Footer/MobileFooter"
import {AppProvider} from "../context/app"
import theme from "../styles/theme"
import GlobalStyles from "../styles/GlobalStyles"

const StyledLayout = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

const Content = styled.div`
    color: ${({theme}) => theme.colors.black};
    background: ${({theme}) => theme.colors.white};
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />

            <AppProvider>
                <StyledLayout>
                    <Sidebar />

                    <Content>
                        <MobileHeader />
                        <main>{children}</main>
                        <MobileFooter />
                    </Content>
                </StyledLayout>
            </AppProvider>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout

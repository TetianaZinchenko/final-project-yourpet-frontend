import { Header } from "components/Header/Header"
import {Notices} from "components/Notices/Notices"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return (
        <Container>
            <Header/>
            <Notices/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
        </Container>
    )
}
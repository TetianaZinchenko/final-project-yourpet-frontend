import { Container } from "./ContainerWithBg.styled"

export const ContainerWithBg = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
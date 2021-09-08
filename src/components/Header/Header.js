import { HeaderContainer, InfoSection, Title, About, Link } from "./Styles"

export function Header() {
    return(
        <HeaderContainer>
            <InfoSection>
                <Title>Proper green and<br/>smart solution</Title>
                <About>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Proin suscipit vehicula
                    ipsum eget pellentesque. In ligula tellus,
                    dictum a lacus in, consequat tristique nisi.
                </About>
                <Link>Get started</Link>
            </InfoSection>
        </HeaderContainer>
    )
}
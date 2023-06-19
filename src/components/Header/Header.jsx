import { StyledHeader, Title, Wrapper, StyledContainer } from './Header.styled';
import { NavLink } from 'react-router-dom';
import Logotype from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation';

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
export default function HeaderSection() {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Navigation />
          <Title>
            Explore, follow and be inspired!
          </Title>
          <NavLink to="/">
            <Logotype />
          </NavLink>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}
import { Wrapper,StyledSection } from './pages.styled';
import Home from 'components/Home/Home';
import { StyledContainer } from 'components/Header/Header.styled';

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

 function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export default function Footer() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Home />
        </Container>
      </Section>
    </Wrapper>
  );
}
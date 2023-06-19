import { Wrapper, StyledSection } from './pages.styled';
import { StyledContainer } from 'components/Header/Header.styled';
import TweetList from 'components/TweetList/TweetList';
function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

 function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}
export default function Tweets() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <TweetList />
        </Container>
      </Section>
    </Wrapper>
  );
}
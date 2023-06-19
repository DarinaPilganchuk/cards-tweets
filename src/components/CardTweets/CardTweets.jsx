import logo from 'images/goit-logo.png';
import Logotype from 'components/Logo/Logo'
import {
  Wrapper,
  Border,
  CircleBorder,
  InsideCircleBorder,
  LogoGoit,
  ContentWrapper,
  UserName,
  TweetsQuantity,
  FollowersQuantity,
  FollowBtn,
  StyledAvatar,
} from './TweeterCard.styled';

export default function UserCard({
  id,
  user,
  tweets,
  followers,
  avatar,
  setFollowing,
  isFollowing,
}) {
  const numberOfNextFollowers = (isFollowing ? 1 : 0) + followers;
  const tweetsQuantity = tweets.toLocaleString('en-EN');
  const numberOfFollowers = numberOfNextFollowers.toLocaleString('en-EN');

  return (
    <Wrapper>
      <Border />
      <CircleBorder>
        <InsideCircleBorder>
          <StyledAvatar src={avatar} width="62" height="62" alt="user" />
        </InsideCircleBorder>
      </CircleBorder>
      <LogoGoit>
        <img src={logo} width="76" height="22" alt="logo" />
      </LogoGoit>
      <Logotype />
      <ContentWrapper>
        <UserName>
          <strong>{user}</strong>
        </UserName>
        <TweetsQuantity>{tweetsQuantity} Tweets</TweetsQuantity>
        <FollowersQuantity>{numberOfFollowers} Followers</FollowersQuantity>
        <FollowBtn
          type="button"
          onClick={() => setFollowing(id)}
          data-following={isFollowing}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </FollowBtn>
      </ContentWrapper>
    </Wrapper>
  );
}
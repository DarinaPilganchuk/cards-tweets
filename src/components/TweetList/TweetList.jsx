import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getUsers } from 'services/api';

import {
  CardWrapper,
  CardList,
  Wrapper,
  ButtonsWrapper,
  Buttons,
  
} from './TweetersList.styled';

import UserCard from 'components/CardTweets/CardTweets';

export default function TweetsList() {
  const [noFilterResult, setNoFilterResult] = useState(false);
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({ page: 1, limit: 3 });
  const [searchParams, setSearchParams] = useSearchParams();
  const loadMoreButtonRef = useRef(null);
  const [filter] = useState('show all');
  const [following, setFollowing] = useState(() => {
    const localStorFollowing = JSON.parse(localStorage.getItem(`following`));
    return localStorFollowing ? localStorFollowing : {};
  });

  useEffect(() => {
    setSearchParams({ page: 1, limit: params.limit });
    (async () => {
      try {
        const response = await getUsers(params);
        setUsers([...response.data]);
      } catch (error) {
    alert('Sorry, something goes wrong');
      }
    })();
  }, [searchParams, setSearchParams, params]);

  useEffect(() => {
    loadMoreButtonRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [users]);

  useEffect(() => {
    if (!noFilterResult) {
      setTimeout(() => setNoFilterResult(true), 3000);
    }
  }, [noFilterResult]);

  const loadMoreHandler = () => {
    setParams(prevState =>
      prevState.limit < 10
        ? { ...prevState, limit: prevState.limit + 3 }
        : prevState
    );
  };



  const followingHandler = id => {
    setFollowing(prevState => ({
      ...prevState,
      [id]: prevState[id] ? !prevState[id] : true,
    }));
  };

  const getFilteredTweeterUser = () => {
    switch (filter) {
      case 'follow':
        return users.filter(user => following[user.id] !== true);
      case 'followings':
        return users.filter(user => following[user.id] === true);
      default:
        return users;
    }
  };
  const filteredTweeterUser = getFilteredTweeterUser();

  localStorage.setItem(`following`, JSON.stringify(following));
  

  return (
    <Wrapper> 
        <CardWrapper>
          <CardList>
            {filteredTweeterUser.map(users => {
              const { id, user,avatar, tweets, followers } = users;
              const isFollowing = following[id] ? following[id] : false;
              return (
                <UserCard
                  key={id}
                  id={id}
                  user={user}
                  avatar={avatar}
                  tweets={tweets}
                  followers={followers}
                  setFollowing={followingHandler}
                  isFollowing={isFollowing}
                />
              );
            })}
          </CardList>
        </CardWrapper>
      <ButtonsWrapper>
        <Buttons to="/">
          Back
        </Buttons>
        <Buttons
          type="buttons"
          ref={loadMoreButtonRef}
          onClick={loadMoreHandler}
        >
          Load more
        </Buttons>
      </ButtonsWrapper>
    </Wrapper>
  );
}
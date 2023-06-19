import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Contents, Wrapper, Main } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Wrapper>
      <Contents>
        <Header />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
      </Contents>
    </Wrapper>
  );
}
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #5736a3;
  padding: 10px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  display: block;
  text-align: center;
  font-family: 'Montserrat', cursive;
  font-weight: 600;
  font-size: 46px;
  line-height: 1;

  color: #ebd8ff;
`;
export const UpperTitle = styled.span`
  text-transform: uppercase;
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 480px) {
    width: 480px;
    padding: 0 16px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 32px;
  }
`;
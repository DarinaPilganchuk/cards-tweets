import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Montserrat', Italic;
  font-size: 28px;
  padding: 8px;
  border-radius: 4px;
  text-align: left;
  text-decoration: none;
  color: #ebd8ff;
  font-weight: 600;

  &.active {
    color: #e5c059;
  }

  &:hover,
  &:focus {
    color: #e5c059;
  }
`;
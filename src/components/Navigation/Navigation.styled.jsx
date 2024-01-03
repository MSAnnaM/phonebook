import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #fcdce7;
  padding: 10px;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      margin: 0 10px;

      a,
      button {
        text-decoration: none;
        padding: 8px;
        border-radius: 5px;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        color: #7d5d5d;

        &:hover {
          background-color: #ff7f50;
          color: #ffffff;
        }
      }

      button {
        cursor: pointer;
        background-color: #efaaaa;
        border: 1px solid #d9b6b6;
      }

      p {
        font-weight: bold;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

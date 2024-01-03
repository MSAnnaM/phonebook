import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoadingSelect, userSelect } from '../../redux/user/selectors';
import { logoutUser } from '../../redux/user/userApi';
import { Header, Nav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const isLogin = useSelector(userLoadingSelect);
  const user = useSelector(userSelect);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUser());
  };
  return (
    <Header>
      <Nav>
        <ul>
          {isLogin ? (
            <>
              <li>
                <StyledNavLink to="contacts/">My contacts</StyledNavLink>
              </li>
              <li>
                <p>Welcome {user.email}!</p>
              </li>
              <li>
                <button onClick={handleClick}>LogOut</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="login/">Login</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="registration/">Register</StyledNavLink>
              </li>
            </>
          )}
        </ul>
      </Nav>
    </Header>
  );
};

export default Navigation;

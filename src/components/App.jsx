import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LayoutComponent from '../components/Layout/Layout';
import PageNotFound from '../components/NotFound/NotFound';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivatRoute';
import { refreshUser } from '../redux/user/userApi';
import Home from 'pages/Home/Home';
import RegistrationUser from 'pages/Registration/Registration';
import Login from 'pages/Login/Login';
import { ContactsPersonal } from 'pages/Contact/Contact';
import { userIsLoading, userRefreshingSelect } from '../redux/user/selectors';
import { Background } from './App.styled';
import Loader from './Loader/Loader';

export const App = () => {
  const isRefresh = useSelector(userRefreshingSelect);
  const dispatch = useDispatch();
  const isLoading = useSelector(userIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
 
  return (
    !isRefresh && (
      <Background>
        {isLoading && <Loader />}
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="registration/"
              element={
                <PublicRoute>
                  <RegistrationUser />
                </PublicRoute>
              }
            />
            <Route
              path="login/"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="contacts/"
              element={
                <PrivateRoute>
                  <ContactsPersonal />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Background>
    )
  );
};

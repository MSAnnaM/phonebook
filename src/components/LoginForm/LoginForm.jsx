import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/user/userApi';
import { LoginFormContainer, LoginStyledForm } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const login = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginUser(login));
  };
  return (
    <LoginFormContainer>
      <LoginStyledForm onSubmit={handleSubmit}>
        <div>
          <label>Email Address:</label>
          <input type="email" name="email" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <button type="submit">Login</button>
        </div>
      </LoginStyledForm>
    </LoginFormContainer>
  );
};

export default LoginForm;

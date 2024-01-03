import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  margin-top: 35px;
`;

export const StyledForm = styled.form`
  background-color: #fcdce7;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;

  div {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
    }

    input {
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      transition: border-color 0.3s ease-in-out;

      &:focus {
      
  color: #ffffff;
      }
    }

    button {
      padding: 8px;
      border: 1px solid #d9b6b6;
      border-radius: 5px;
      background-color: #efaaaa;
      color: #7d5d5d;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

      &:hover {
        background-color: #ff7f50;
        color: #ffffff;
      }
    }
  }
`;
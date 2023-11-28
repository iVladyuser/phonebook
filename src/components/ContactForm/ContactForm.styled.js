import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  margin: 30px 20px;
`;

export const FormLabel = styled.label`
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 18px;
`;

export const FormInput = styled.input`
  height: 20px;
  font-size: 16px;
  width: 400px;
  margin-bottom: 6px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid teal;
  &:focus,
  &:hover,
  &:active {
    outline: 0;
    outline-offset: 0;
    border: none;
    border-bottom: 1.5px solid teal;
    outline: none;
  }
`;

export const FormButton = styled.button`
  width: 100px;
  height: 28px;
  margin-left: 5px;
  margin-top: 5px;
  border-width: inherit;
  border-radius: 5px;
  outline: none;
  background-color: #3645ab;
  color: white;
  cursor: pointer;
  &:focus {
    background-color: #2b3788;
  }
`;

import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  max-width: 420px;
  padding: 10px;
  margin: 20px;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
`;

export const FilterContainer = styled.div`
  display: flex;
  max-width: 420px;
  margin: 20px;
  gap: 30px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
`;

export const FilterLabel = styled.label`
  font-size: 18px;
`;

export const FilterInput = styled.input`
  width: 300px;
  font-size: 16px;
  padding: 5px;
  display: block;
  border: none;
  border-bottom: 1px solid teal;
  &:focus,
  &:hover,
  &:active {
    outline: 0;
    outline-offset: 0;
    border: none;
    border-bottom: 1.5px solid teal;
  }
`;

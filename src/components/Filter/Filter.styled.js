import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  margin: 20px;

  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
`;

export const FilterLabel = styled.label`
  margin: 0px;
  font-size: 18px;
`;

export const FilterInput = styled.input`
  max-width: 240px;
  font-size: 14px;
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

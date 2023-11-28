import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
margin: 20px;
flex-direction: column;
gap: 10px;
`;

export const ContactItem = styled.li`
max-width: 400px;
  padding: 20px;
  background: white;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.05);
  }`;

export const CardWrapper = styled.div`
  display: flex;
  height: 100px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const Info = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;

export const ButtonDelete = styled.button`
  width: 70px;
  height: 40px;
  margin-left: 5px;
  border-width: inherit;
  border-radius: 5px;
  outline: none;
  background-color: #e22626;
  color: white;
  cursor: pointer;

  &:focus {
    background-color: #c72323;
  }
`;
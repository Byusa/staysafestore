import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.43rem;
  background: transparent;
  border:0.05rem solid var(--lightBlue);
  border-color: ${props => 
    props.cart ? "var(--mainYello)" : "var(--lightBlue)"};
  color:${prop => 
    prop.cart ? "var(--mainYello)" :"var(--lightBlue)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.5s ease-in-out;
  &:hover{
    background:${prop => prop.cart? "var(--mainYello)" : "var(--lightBlue)"};
    color:var(--mainBlue);
  } 
  &:focus{
    outline: none;
  }
`;


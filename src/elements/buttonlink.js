import styled, { css } from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 20px;
  margin: 10px;
  padding: 1px 1px;
  border: 1px solid palevioletred;
  border-radius: 9px;

`;
export default Button;
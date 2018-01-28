import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
`;

const Span = styled.span`
  font-size: 12px;
`;

const LocationBtn = styled.button`
  font: inherit;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: underline;

  :hover {
    text-decoration: none;
  }
`;

const search = (props) => {
  return (
    <Wrapper>
      <TextField hintText="City" />
      <br />
      <Span>or</Span>
      <LocationBtn>your current location</LocationBtn>
    </Wrapper>
  );
}

export default search;
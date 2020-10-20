import React from "react";
import styled from "styled-components";

export const Card = () => {
  return (
    <Container>
      <Top />

      <li>
        <p> one </p>
        <p> one </p>
        <p> one </p>
      </li>
      <li> this is container </li>
      <li> this is container </li>
      <li> this is container </li>
    </Container>
  );
};

const Container = styled.ul`
  box-shadow: 1px 1px 7px grey;
  width: 500px;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-flow: column nowrap;
  list-style-type: none;
  li {
    justify-content: space-between;
    display: flex;
    flex-flow: row nowrap;
  }
`;
const Top = () => <TopContainer></TopContainer>;
const TopContainer = styled.div`
  background: #cacaca;
  height: 20px;
  margin: -10px -20px;
  border-radius: 10px 10px 0 0;
`;

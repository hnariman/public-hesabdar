import React from "react";
import styled from "styled-components";
import * as _ from "lodash";
import {Search} from 'semantic-ui-react';

export const Family = ({
  categories = [
    "files",
    "faliyyeti",
    "herbi",
    "icra veregesi ",
    "more1",
    "more2",
    "more3",
    "more4",
    "more5",
    "more6",
  ],
  name = "Intizam",
  surname = "Abbasov",
  fathersname = "Islam",
}) => {
  return (
    <Container>
      <h2>
        {surname + " "}
        {name + " "}
        {fathersname + " "}
      </h2>
      <ul>
        {categories
          .filter((x, i) => i < 5)
          .map((x, i) => (
            <li>{x}</li>
          ))}
        <select>
          {categories
            .filter((x, i) => i >= 5)
            .map((x, i) => (
              <option value="">{x}</option>
            ))}
        </select>
      </ul>
      <h3>Aile Uzvleri</h3>
      <Buttons />
      <Table />
    </Container>
  );
};

const Table = () => {
  const mockData = [
    {
      name: "some data",
      member: "some data",
      saa: "some data",
      dob: "some data",
      workplace: "some data",
      contact: "some data",
    },
  ];
  return (
    <TableWrapper>
      <ul>
        <li>name</li>
        <li>member</li>
        <li>saa</li>
        <li>dob</li>
        <li>workplace</li>
        <li>contact</li>
      </ul>
      {mockData.map(({ name, member, saa, dob, workplace, contact }) => (
        <ul>
          <li>{name}</li>
          <li>{member}</li>
          <li>{saa}</li>
          <li>{dob}</li>
          <li>{workplace}</li>
          <li>{contact}</li>
        </ul>
      ))}
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  box-shadow: inset 1px 1px 1px grey;
  margin-top: 3%;
  background: #cacaca;
  border-radius: 6px;
  ul:nth-child(1) {
    border-radius: 6px;
    background: #a4a4a4;
    li {
      border-bottom: 1px solid #808080;
      border-left: 1px solid #808080;
    }
  }
  ul {
    width: 100%;
    margin: 0 0.2em;
    line-height: 2em;
    li {
      width: 15%;
      text-align: center;
    }
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  * {
    margin: 5px;
  }
`;
const Buttons = () => {
  return (
    <ButtonsContainer>
      <button>Create</button>
      <button>ICON</button>
        <Search/>
      <select>
        <option value="">ICON</option>
      </select>
      <select>
        <option value="">ICON</option>
      </select>
    </ButtonsContainer>
  );
};

const Container = styled.section`
  width: 500px;
  padding: 2em;
  border-radius: 6px;
  box-shadow: 3px 3px 20px silver;
  font-size: 14px;
  h2 {
    font-size: 1.2em;
    margin: 3px;
  }
  h3 {
    margin: 1em 0;
    font-size: 1.1em;
    color: #777777;
  }
  ul {
    margin: 0.5em;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    margin-left: 0;
    text-decoration: underline;
    color: #3333bb;
    li {
      flex: 6;
      list-style-type: none;
    }
  }
  input {
    width: 200px;
  }
  button,
  select {
    margin: 0;
    flex: 1 2 auto;
    border: 0;
    border-radius: 4px;
    padding: 5px;
    background: #000066;
    color: #fff;
  }
`;

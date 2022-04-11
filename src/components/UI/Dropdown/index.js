import React, { useState } from "react";
import styled from "styled-components";
import {IoIosArrowDown} from 'react-icons/io';


export function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => setIsOpen(!isOpen);
  const [handleOption, setHandleOption] = useState(props?.list[0]);

    const handleClicked = value => {
    setHandleOption(value);
    setIsOpen(false);
    props.onSelect(value);
};

  

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={handleChange}>{handleOption.name}<IoIosArrowDown/></DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {props?.list.map((item) => (
                <ListItem onClick={() => handleClicked(item)}>{item.name} </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}

const Main = styled("div")`
  font-family: sans-serif;
`;

const DropDownContainer = styled("div")`

`;

const DropDownHeader = styled("div")`
  display: flex;
  padding: 30px;
  font-weight: 700;
  font-size: 50px;
  color: #3faffa;
  background: #ffffff;
  cursor:pointer;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  margin: 20px;
  padding-left: 20px;
  background: #ffffff;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
    cursor:pointer;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

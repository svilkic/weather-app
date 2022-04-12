import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => setIsOpen(!isOpen);
  const [handleOption, setHandleOption] = useState(props?.list[0]);

  const handleClicked = (value) => {
    setHandleOption(value);
    setIsOpen(false);
    props.onSelect(value);
  };

  return (
    <Main>
      <DropDownContainer >
        <DropDownHeader onClick={handleChange} fontSize={props.fontSize}>
          {handleOption.name}
          <IoIosArrowDown />
        </DropDownHeader >

        {isOpen && (
          <DropDownListContainer position={props.position} width={props.width}>
            <DropDownList width={props.width}>
              {props?.list.map((item) => (
                <ListItem onClick={() => handleClicked(item)}>
                  {item.name}
                </ListItem>
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

const DropDownContainer = styled("div")``;

const DropDownHeader = styled("div")`
  display: flex;
  padding: 30px;
  font-weight: 700;
  font-size: ${props => props.fontSize || '' };
  color: white;
  cursor: pointer;
`;

const DropDownListContainer = styled("div")`
  width:  ${props => props.width || '' };
  margin-left: 32px;
  position: ${props => props.position || '' };

`;

const DropDownList = styled("ul")`
background: DarkGray;
list-style: none;
${props => props.position || '' };

  max-height:200px;  
  overflow-x:hidden;
  overflow-y:auto
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
   
    cursor:pointer;
  }
`;

const ListItem = styled("li")`
  color: #fff;
  background: DarkGray;
 padding:7px;
  position: relative;
  text-decoration: none;

`;

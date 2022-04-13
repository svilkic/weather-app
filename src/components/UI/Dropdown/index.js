import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

export function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [handleOption, setHandleOption] = useState(props?.list[0] || []);

  const handleChange = () => {
    if (props?.list.length == 0) return;
    setIsOpen(!isOpen);
  };

  const handleClicked = (value) => {
    setHandleOption(value);
    setIsOpen(false);
    props.onSelect(value);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={handleChange} fontSize={props.fontSize}>
          {handleOption.name}
          {props?.list.length == 0 && (
            <Information>
              <p>Loading...</p>
            </Information>
          )}
          {props?.list.length !== 0 && <IoIosArrowDown />}
        </DropDownHeader>

        {isOpen && (
          <DropDownListContainer>
            {props?.list.length > 0 ? (
              <DropDownList>
                {props?.list.map((item) => (
                  <ListItem onClick={() => handleClicked(item)}>
                    {item.name}
                  </ListItem>
                ))}
              </DropDownList>
            ) : (
              'Loading...'
            )}
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}

const Main = styled('div')`
  font-family: sans-serif;
`;

const DropDownContainer = styled('div')``;

const DropDownHeader = styled('div')`
  display: flex;
  padding: 30px;
  font-weight: 700;
  font-size: ${(props) => props.fontSize || ''};
  color: white;
  cursor: pointer;
`;

const DropDownListContainer = styled('div')`
  margin-left: 32px;
  position: absolute;
`;

const DropDownList = styled('ul')`
background: DarkGray;
list-style: none;


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

const ListItem = styled('li')`
  color: #fff;
  background: DarkGray;
  padding: 7px;
  position: relative;
  text-decoration: none;
`;

const Information = styled.p`
  font-size: 30px;
  color: white;
`;

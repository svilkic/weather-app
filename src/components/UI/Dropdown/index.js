import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

export function Dropdown(props) {
  const childrenProps = props?.children?.props || props;
  return (
    <Main className={props.className}>
      <StyledDropdown {...childrenProps} />
    </Main>
  );
}

export function StyledDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ id: '' });

  const handleOpen = () => {
    if (props?.list.length == 0) return;
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    props.onSelect(value);
  };

  useEffect(() => {
    setSelectedOption(props.list[0]);
  }, [props.list]);

  return (
    <DropDownContainer>
      <DropDownHeader onClick={handleOpen}>
        {selectedOption?.icon ? (
          <Icon
            src={selectedOption.icon ? selectedOption.icon : undefined}
          ></Icon>
        ) : (
          selectedOption?.name
        )}
        {props?.list.length == 0 && <Information>Loading...</Information>}

        {props?.list.length !== 0 && <IoIosArrowDown />}
      </DropDownHeader>

      {isOpen && (
        <DropDownListContainer>
          {props?.list.length > 0 ? (
            <DropDownList>
              {props?.list.map((item) => (
                <React.Fragment>
                  {(selectedOption?.id !== item.id ||
                    selectedOption?.name !== item.name) && (
                    <ListItem onClick={() => handleSelect(item)}>
                      {item.icon ? (
                        <Icon src={item.icon ? item.icon : undefined}></Icon>
                      ) : (
                        item.name
                      )}
                    </ListItem>
                  )}
                </React.Fragment>
              ))}
            </DropDownList>
          ) : (
            'Loading...'
          )}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

const Main = styled.div`
  font-family: sans-serif;
`;

const DropDownContainer = styled.div``;

const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: white;
  cursor: pointer;
  display: flex;
  margin-left: 5px;
  text-align: center;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 15;
`;

const DropDownList = styled.ul`
background: DarkGray;
list-style: none;
margin-top:7px;

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

const ListItem = styled.li`
  color: #fff;
  background: Gray;
  padding: 5px;
  position: relative;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 33px;
`;

const Information = styled.p`
  font-size: 30px;
  color: white;
`;

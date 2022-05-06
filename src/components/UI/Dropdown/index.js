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
  const listPopulated = props?.list.length > 0;

  const handleOpen = () => {
    if (!listPopulated) return;
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

  const getIcon = (item) => {
    return item?.icon ? <Icon src={item.icon}></Icon> : item?.name;
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={handleOpen}>
        {getIcon(selectedOption)}
        {!listPopulated && <Information>Loading...</Information>}

        {listPopulated && <StyledArrowDown rotate={isOpen} />}
      </DropDownHeader>

      <DropDownListContainer isOpen={isOpen}>
        {listPopulated ? (
          <DropDownList>
            {props?.list.map((item) => (
              <React.Fragment key={item.name}>
                {(selectedOption?.id !== item.id ||
                  selectedOption?.name !== item.name) && (
                  <ListItem onClick={() => handleSelect(item)}>
                    {getIcon(item)}
                  </ListItem>
                )}
              </React.Fragment>
            ))}
          </DropDownList>
        ) : (
          <Information>Loading...</Information>
        )}
      </DropDownListContainer>
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
  max-height: ${(props) => (props?.isOpen ? 'calc(2.06rem * 6)' : '0px')};
  transition: max-height 300ms;
  z-index: 5;
`;

const DropDownList = styled.ul`
  max-height: inherit;
  list-style: none;
  margin-top: 7px;
  overflow-x: hidden;
  overflow-y: auto;
  color: var(--color-white);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  gap: 1px;
  &:first-child {
    cursor: pointer;
  }
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #999;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #555;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #222;
  }
`;

const ListItem = styled.li`
  font-size: 1.3rem;
  color: var(--color-white);
  scroll-snap-align: start;
  padding: 0.25rem;
  text-decoration: none;
  position: relative;
  border-radius: 0.15rem;
  /* Glass effect*/
  background: rgba(100, 100, 100, 0.58);
  backdrop-filter: blur(10.7px);
  transition: all 300ms ease;
  display: flex;
  &:hover {
    background: rgba(50, 50, 50, 0.58);
  }
`;

const Icon = styled.img`
  width: 1.5rem;
`;

const Information = styled.p`
  font-size: 30px;
  color: var(--color-white);
`;

const StyledArrowDown = styled(IoIosArrowDown)`
  transition: all 300ms;
  transform: rotate(${(props) => (props.rotate ? '180deg' : '360deg')});
`;

import React, { useEffect, useRef, useState } from 'react';
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
  const filterRef = useRef();
  const inputRef = useRef();
  const [inputWidth, setInputWidth] = useState('300px');
  const [filter, setFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ id: '', name: '' });
  const listPopulated = props?.list.length > 0;

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleOpen = () => {
    if (!listPopulated) return;
    if (props.searchable && !isOpen) inputRef?.current.focus();
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    props.onSelect(value);
    setFilter('');
  };

  useEffect(() => {
    if (props.defaultSelected) {
      setSelectedOption(props.defaultSelected);
    } else {
      setSelectedOption(props.list[0]);
    }
  }, [props.list]);

  useEffect(() => {
    var length = '300px';
    if (filter.length > 0) length = filter.length;
    else if (selectedOption?.name) length = selectedOption?.name.length;

    setInputWidth(length + 1);
  }, [selectedOption, filter]);

  const getIcon = (item) => {
    return item?.icon ? (
      <Icon src={`${process.env.PUBLIC_URL}/` + item.icon} />
    ) : (
      item?.name
    );
  };

  useEffect(() => {
    // Close dropdown on click outside
    const dropdownListener = (event) => {
      if (!filterRef.current || filterRef.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener('mousedown', dropdownListener);
    document.addEventListener('touchstart', dropdownListener);

    return () => {
      document.removeEventListener('mousedown', dropdownListener);
      document.removeEventListener('touchstart', dropdownListener);
    };
  }, [filterRef]);

  return (
    <DropDownContainer ref={filterRef}>
      <DropDownHeader onClick={handleOpen}>
        {!listPopulated && <Information>Loading...</Information>}

        {listPopulated ? (
          props.searchable ? (
            <SearchFilter
              ref={inputRef}
              value={filter}
              onChange={handleFilter}
              placeholder={selectedOption?.name}
              width={inputWidth + 'ch'}
            />
          ) : (
            getIcon(selectedOption)
          )
        ) : undefined}

        {listPopulated && <StyledArrowDown rotate={isOpen} />}
      </DropDownHeader>

      <DropDownListContainer isOpen={isOpen}>
        {listPopulated && (
          <DropDownList>
            {props?.list
              .filter((item) => item.name.includes(filter))
              .map((item) => (
                <React.Fragment key={item.name}>
                  {(selectedOption?.id !== item.id ||
                    selectedOption?.name !== item.name) && (
                    <ListItem onClick={() => handleSelect(item)}>
                      {getIcon(item)}
                    </ListItem>
                  )}
                </React.Fragment>
              ))}
            {props?.list.filter((item) => item.name.includes(filter)).length ===
              0 && <ListItem>Couldn't find any results</ListItem>}
          </DropDownList>
        )}
      </DropDownListContainer>
    </DropDownContainer>
  );
}

const Main = styled.div`
  font-family: sans-serif;
`;

const DropDownContainer = styled.div`
  ${'' /* max-width: 300px; */}
`;

const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: white;
  display: flex;
  text-align: center;
  cursor: pointer;
`;

const SearchFilter = styled.input`
  max-width: 300px;
  width: ${(props) => props.width};
  color: var(--color-white);
  font-weight: 700;
  background-color: transparent;
  font-size: 2rem;
  border: none;
  transition: border-bottom 300ms;
  border-bottom: 1px solid transparent;
  &::placeholder {
    color: var(--color-white);
  }
  &:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid var(--color-white);
    outline: none;
  }
`;

const StyledArrowDown = styled(IoIosArrowDown)`
  transition: all 300ms;
  transform: rotate(${(props) => (props.rotate ? '180deg' : '360deg')});
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

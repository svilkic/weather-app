import React, { useEffect, useRef, useState } from 'react';

import {
  Main,
  DropDownContainer,
  DropDownHeader,
  SearchFilter,
  StyledArrowDown,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Icon,
  Information,
} from './dropdown.styled';

export function Dropdown(props) {
  const childrenProps = props?.children?.props || props;
  return (
    <Main className={props.className}>
      <StyledDropdown {...childrenProps} />
    </Main>
  );
}

export function StyledDropdown(props) {
  const dropdownRef = useRef();
  const inputRef = useRef();
  const [inputWidth, setInputWidth] = useState('300px');
  const [filterWord, setFilterWord] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ id: '', name: '' });
  const listPopulated = props?.list.length > 0;

  const handleFilter = (e) => {
    setFilterWord(e.target.value.toLowerCase());
  };

  const handleOpen = () => {
    if (!listPopulated) return;
    if (props.searchable && !isOpen) inputRef?.current.focus();
    else if (props.searchable && isOpen) {
      inputRef?.current.blur();
      setFilterWord('');
    }
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    props.onSelect(value);
    setFilterWord('');
  };

  useEffect(() => {
    if (props.defaultSelected) {
      setSelectedOption(props.defaultSelected);
    } else {
      setSelectedOption(props.list[0]);
    }
  }, [props.list, props.defaultSelected]);

  //Set input width acording to filter key word
  useEffect(() => {
    var length = '300px';
    if (filterWord.length > 0) length = filterWord.length;
    else if (selectedOption?.name) length = selectedOption?.name.length;

    setInputWidth(length + 3);
  }, [selectedOption, filterWord]);

  const getIcon = (item) => {
    return item?.icon ? (
      <Icon src={`${process.env.PUBLIC_URL}/` + item.icon} />
    ) : (
      item?.name
    );
  };

  // Close dropdown on outside click
  useEffect(() => {
    const dropdownListener = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }
      setFilterWord('');
      setIsOpen(false);
    };

    document.addEventListener('mousedown', dropdownListener);
    document.addEventListener('touchstart', dropdownListener);

    return () => {
      document.removeEventListener('mousedown', dropdownListener);
      document.removeEventListener('touchstart', dropdownListener);
    };
  }, [dropdownRef]);

  return (
    <DropDownContainer ref={dropdownRef}>
      <DropDownHeader onClick={handleOpen}>
        {!listPopulated && <Information>Loading...</Information>}

        {listPopulated ? (
          props.searchable ? (
            <SearchFilter
              ref={inputRef}
              value={filterWord}
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
              .filter((item) => item.name.toLowerCase().includes(filterWord))
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
            {props?.list.filter((item) =>
              item.name.toLowerCase().includes(filterWord)
            ).length === 0 && <ListItem>Couldn't find any results</ListItem>}
          </DropDownList>
        )}
      </DropDownListContainer>
    </DropDownContainer>
  );
}

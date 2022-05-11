import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

export const Main = styled.div`
  font-family: sans-serif;
`;

export const DropDownContainer = styled.div`
  ${'' /* max-width: 300px; */}
`;

export const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: white;
  display: flex;
  text-align: center;
  cursor: pointer;
  & > * {
    text-transform: uppercase;
  }
`;

export const SearchFilter = styled.input`
  max-width: 100%;
  position: relative;
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

  //Mobile
  @media (max-width: 767px) {
    max-width: 300px;
  }
`;

export const StyledArrowDown = styled(IoIosArrowDown)`
  transition: all 300ms;
  transform: rotate(${(props) => (props.rotate ? '180deg' : '360deg')});
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  max-height: ${(props) => (props?.isOpen ? 'calc(2.06rem * 6)' : '0px')};
  transition: max-height 300ms;
  z-index: 5;
`;

export const DropDownList = styled.ul`
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

export const ListItem = styled.li`
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

export const Icon = styled.img`
  width: 1.5rem;
`;

export const Information = styled.p`
  font-size: 30px;
  color: var(--color-white);
`;

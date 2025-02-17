import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropdownContainer = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  width: calc(100vw - 15rem);
  max-width: 1280px;
  overflow-y: auto;
  border: 1px solid #f06e19;
  background: white;
  padding: 2rem;
  color: black;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DropdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }
`;

export const DropdownLink = styled(Link)`
  display: block;
  font-size: 1.125rem;
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;

  &:hover h3 {
    color: #f06e19;
  }
`;

export const DropdownItemTitle = styled.h3`
  color: #252423;
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

export const DropdownItemDescription = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
  color: #7a7a7a;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 1rem 0;
  font-size: 18px;
  color: white;
  margin-right: 135px;

  @media (max-width: 1115px) {
    gap: 2rem;
    margin-right: 40px;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
`;

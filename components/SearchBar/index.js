import styled from "styled-components";
import { Icon } from "@/components/Icon";

export default function SearchBar({ onChange }) {
  return (
    <SearchBarContainer>
      <IconWrapper>
        <Icon name="search" color="black" />
      </IconWrapper>
      <StyledInput
        type="text"
        id="search"
        placeholder="Search for activities, locations"
        onChange={onChange}
      />
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

  @media (max-width: 768px) {
    padding-left: 0.5rem;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
  */ &:focus-within {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  color: #333;
  width: 100%;

  &::placeholder {
    color: #999;
    opacity: 1;

    @media (max-width: 768px) {
      font-size: 0.79rem;
    }
  }
`;

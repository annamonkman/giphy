import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 35px;
  a {
    padding: 0;
    margin: 0;
    .random-svg {
      color: #ff007b;
    }
    .search-svg {
      color: #00ff77;
    }
    .trending-svg {
      color: #00d5ff;
    }
  }
`;

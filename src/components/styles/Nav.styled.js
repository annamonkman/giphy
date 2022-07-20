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
      color: ${(props) => props.theme.colors.random};
    }
    .search-svg {
      color: ${(props) => props.theme.colors.finder};
      transform: scaleX(-1);
    }
    .trending-svg {
      color: ${(props) => props.theme.colors.trending};
    }
  }
`;

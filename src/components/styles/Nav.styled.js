import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 35px;
  .nav__link {
    padding: 0;
    margin: 0;
    .nav__icon--random {
      color: ${(props) => props.theme.colors.random};
    }
    .nav__icon--finder {
      color: ${(props) => props.theme.colors.finder};
      transform: scaleX(-1);
    }
    .nav__icon--trending {
      color: ${(props) => props.theme.colors.trending};
    }
  }
`;

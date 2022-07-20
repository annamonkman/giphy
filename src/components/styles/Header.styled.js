import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 5px;
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkGrey};
  display: flex;
  align-items: center;
  .header__img {
    width: 30px;
    margin-left: 10px;
  }
  .header__title {
    color: white;
    text-transform: uppercase;
    margin: 0;
    margin-left: 10px;
    font-weight: 900;
  }
  @media (min-width: 620px) {
    position: sticky;
    top: 0;
  }
`;

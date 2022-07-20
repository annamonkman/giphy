import styled from "styled-components";

export const StyledTrending = styled.div`
  .content__gallery {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    &__img {
      max-width: 150px;
      margin: 2px;
      border-radius: 4px;
    }
  }
`;

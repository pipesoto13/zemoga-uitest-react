import styled from "styled-components";

export const CardContainer = styled.article`
  flex: 0 0 calc((100% / 3) - 1rem);
  margin: 1rem 0;
  /* background-color: yellow; */

  @media all and (max-width: 768px) {
    flex: 0 0 calc((100% / 2) - 1rem);
  }

  @media all and (max-width: 500px) {
    flex: 0 0 90%;
    margin-right: 1rem;
  }

  .people-card__bg {
    height: 100%;
    background: center no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;

    &:before {
      content: "";
      padding-bottom: 100%;
      display: block;
    }

    .people-card__content {
      padding-right: 34px;
    }

    .people-card__footer {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0001) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }
  }
`
import styled from "styled-components";

export const CardContainer = styled.article`
  flex: 0 0 calc((100% / 3) - 1rem);
  margin: 10px 0;
  position: relative;
  overflow: hidden;

  @media all and (max-width: 768px) {
    flex: 0 0 calc((100% / 2) - 1rem);
  }

  @media all and (max-width: 500px) {
    flex: 0 0 90%;
  }

  .card__bg {
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

    .card__content {
      padding-right: 34px;
    }

    .card__footer {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0001) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }
  }

  .buttons {
    border: none;
    outline: none;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media all and (min-width: 1100px){
      height: 45px;
      width: 45px;
    }

    &--up {
      background: rgba(60, 187, 180, 0.8);;
    }
    &--down {
      background: #FBBD4A;
      transform: rotate(180deg);
    }

    &--active {
      border: 1px solid #FFFFFF;
    }

    & > img {
      height: 16px;

      @media all and (min-width: 1100px){
        height: 24px;
      }
    }
  }

  .card-caption {
    &__header {
      display: flex;
      align-items: flex-end;
    }
    &__title {
      font-size: 30px;
      margin-bottom: -5px;

      @media all and (min-width: 1100px){
        margin-left:70px;
      }
    }
    &__description {
      margin-left: 30px;
      font-size: 15px;
      line-height: 18px;
    }
    &__title,
    &__description {
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .last-updated-label {
    color: #FFFFFF;
    text-align: right;
    font-size: 12px;
    line-height: 14px;

    @media all and (min-width: 1100px){
      font-size: 15px;
      line-height: 18px;
    }

    .category {
      text-transform: capitalize;
    }
  }

  .card {
    &__progress {
      display: flex;
      position: relative;
    }

    &__progress-icon {
      margin: 0 10px;
    }
    &__progress-label {
      position: absolute;

      & > img {
        height: 16px;

        @media all and (min-width: 1100px){
          height: 24px;
        }
      }
    }
    &__progress-val {
      display: flex;
      height: 36px;
      align-items: center;
      color: #FFFFFF;
      font-family: Lato;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;

      @media all and (min-width: 1100px){
        height: 54px;
        font-size: 27px;
        line-height: 32px;
      }

      &--up {
        background: #3cbbb499;
        justify-content: flex-start;
      }
      &--down {
        background: #f9ad1d99;
        justify-content: flex-end;
      }
    }
  }

`
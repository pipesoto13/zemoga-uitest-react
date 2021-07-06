import styled from "styled-components";

export const StyledDiv = styled.div`

  .votes-input {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 12px;

    &__buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      height: 38px;
      width: 107px;
      padding: 0;

      @media all and (min-width: 1100px){
        height: 45px;
        width: 135px;
      }

      &--vote-icon {
        margin-right: 12px;
      }

      &--vote {
        background: #30303099;
        color: white;
        text-align: center;
        font-family: Lato;
        font-size: 15px;
        line-height: 18px;
        border: 1px solid white;
        margin-right: 0;

        @media all and (min-width: 1100px){
          font-size: 18px;
          line-height: 22px;
        }

        &:disabled {
          background: #00000099;
        }
      }
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
`


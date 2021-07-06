import styled from "styled-components";

const handleBgView = type => {
  
  if (type === 'list') {
    return `linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.0001) 0%,
      #888888 19.79%,
      #666666 50%,
      rgba(51, 51, 51, 0.6) 71.88%
    );`
  }
};

export const StyledDiv = styled.div`
  &.post-view {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  @media all and (min-width: 768px) {
    overflow-x: hidden;
  }

  &--list {
    flex-wrap: nowrap;
    @media all and (min-width: 768px) {
      flex-wrap: wrap;
      .card {
        flex-basis: 100%;
        .info {
          flex-basis: 50%;
          margin-left: 150px;
          
          &__header > div {
            position: absolute;
            left: 0;
            top: 0;
          }

          &__description {
            margin-left: 0;
            margin-bottom: 2rem;
            margin-right: 2rem;

            @media all and (min-width: 1100px) {
              margin-left: 70px;
              margin-bottom: 0.8rem;
              margin-top: 0;
            }
          }
        }

        &__gradient.list{
          position: relative;
          width: 100%;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%);
          @media all and (min-width: 1100px) {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%);
          }
        }

        &__img {
          margin-right: 0;
          background: left no-repeat;
          background-size: contain;
          &::before {
            padding-bottom: 0;
          }
        }

        &__content {
          display: flex;
          justify-content: space-between;
          padding: 0 1.25rem;

          @media all and (min-width: 1100px) {
            padding: 0 1.25rem;
          }
        }
      }
    }
  }

  &--grid {
    @media all and (min-width: 768px) {
      flex-wrap: wrap;
    }
  }
}

`
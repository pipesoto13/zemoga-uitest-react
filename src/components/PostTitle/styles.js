import styled from "styled-components";

const heightTablet = '28px';
const widthTablet = '131px';
const heightDesktop = '36px';
const widthDesktop = '173px';

export const Header = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  .title {
    margin: 0;
  }
`

export const SelectContainer = styled.div`
  display: none;
  position: relative;
  font-family: inherit;
  text-align: center;

  @media all and (min-width: 768px) {
    display: grid;
  }
`

export const SelectorHeader = styled("div")`
  box-sizing: border-box;
  font-size: 10.5px;
  line-height: 100%;
  background-color: #fff;
  display: flex;
  padding-left: 33%;

  align-items: center;
  width: ${widthTablet};
  height: ${heightTablet};
  border: 2px solid #333333;
  cursor: pointer;
  
  &::after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    position: absolute;
    left: 110px;
    background-color: #333333;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);

    @media all and (min-width: 1100px){
      left: 145px;
    }
  }

  @media all and (min-width: 1100px){
    font-size: 13.5px;
    width: 173px;
    height: 36px;
  }
`;

export const SelectorListContainer = styled("div")`

`;

export const SelectorList = styled("ul")`
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const ListItem = styled("li")`
  box-sizing: border-box;
  height: ${heightTablet};
  border-bottom: 2px solid #333333;
  border-left: 2px solid #333333;
  border-right: 2px solid #333333;
  cursor: pointer;
  font-size: 10.5px;
  line-height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 1100px){
    font-size: 13.5px;
    width: ${widthDesktop};
    height: ${heightDesktop};
  }
`;

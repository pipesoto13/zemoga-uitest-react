/* .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
}

.title {
  margin: 0;
}

.selector {
  display: none;

  grid-template-areas: "select";
  align-items: center;
  position: relative;
  min-width: 8rem;
  padding: 6px 14px;
  border: 2px solid #333333;
}

  @media all and (min-width: 768px) {
    display: grid;
  }

  .selector__options, .selector::after {
    grid-area: selector;
  }

  .selector__select {
    text-align: center;
    appearance: none;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
  }

  .selector:after {
    content: "";
    grid-area: select;
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: #333333;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
 */
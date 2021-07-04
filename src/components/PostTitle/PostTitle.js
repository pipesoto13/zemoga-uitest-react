'use strict';

import {  } from "./styles";

/* const styled = require('styled-components');

const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
` */

function PostTitle() {

  return (
    <section className="header">
      <h2 className="title">Previous Rulings</h2>
      <div className="selector">
        <select
          className="selector__options"
          defaultValue="grid"

        >
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
      </div>
    </section>
  ); 
}

export default PostTitle;
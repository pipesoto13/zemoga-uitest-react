import React, { useState } from "react";

import PostTitle from '../PostTitle/PostTitle';
import { StyledDiv } from "./styles";
import Card from "../Card/Card";


function PostsSection ({data}) {
  
  const [view, setView] = useState("list");

  const handleChange = (value) => {
    setView(value)
  }

  return (
    <>
      <PostTitle onChange={handleChange}></PostTitle>
      <StyledDiv className={`post-view post-view--${view}`}>
        {data.map(
          ({ name, description, category, picture, lastUpdated, votes }, i) => (
            <Card
              key={i}
              picture={picture}
              name={name}
              description={description}
              category={category}
              lastUpdated={lastUpdated}
              votes={votes}
            />
          )
        )}
      </StyledDiv>
    </>
  )
}

export default PostsSection;
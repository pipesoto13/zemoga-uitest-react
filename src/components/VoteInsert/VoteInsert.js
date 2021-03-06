import React, { useState } from "react";
import { StyledDiv } from "./styles";

function VoteInsert({handleBtnAgain, index, handleVoteValue}) {

  const data = JSON.parse(localStorage.getItem('data'))

  const [info, setInfo] = useState(data)
  const [value, setValue] = useState(null);
  const [vote, setVote] = useState(false);

  const handleVote = (e) => {
    if (vote) {
      setValue(null);
      setVote(false);
      handleBtnAgain(false);
    }
    
    if (vote === false) {
      setVote(true);
      handleBtnAgain(true);
      value === 'upVote' ? data[index].votes.positive += 1 : data[index].votes.negative += 1;
      console.log(data[index].votes);
      localStorage.setItem("data", JSON.stringify(data))
      handleVoteValue(value)
    }
  };

  return (
    <StyledDiv>
      <div className="votes-input">
        {!vote && (
          <>
            <button
              type="button"
              aria-label={`thumbs up`}
              className={`votes-input__buttons--vote-icon buttons buttons--up buttons--${value === "upVote"? 'active' : ''}`}
              onClick={() => setValue("upVote")}
            >
              <img
                src={`assets/img/thumbs-up.svg`}
                alt={`up icon`}
              />
            </button>

            <button
              type="button"
              aria-label={`thumbs down`}
              className={`votes-input__buttons--vote-icon buttons buttons--down buttons--${value === "downVote"? 'active' : ''}`}
              onClick={() => setValue("downVote")}
            >
              <img
                src={`assets/img/thumbs-up.svg`}
                alt={`down icon`}
              />
            </button>
          </>
        )}
        <button
          className="votes-input__buttons votes-input__buttons--vote "
          type="button"
          disabled={!value}
          onClick={handleVote}
          aria-label="vote now"
        >
          {!vote ? "Vote Now" : "Vote Again"}
        </button>
      </div>
    </StyledDiv>
  );
};

export default VoteInsert;

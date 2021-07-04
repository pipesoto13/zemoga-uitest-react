import React, { useState } from "react";

/* type State = "VOTE_UP" | "VOTE_DOWN";

interface Props {
  onSubmit: (event: State) => void;
  renderUpdateLabel?: ({ vote }: { vote?: boolean }) => React.ReactElement;
  alreadyVote?: boolean;
}

const VotesInput: React.FC<Props> = ({
  onSubmit,
  renderUpdateLabel = () => null,
  alreadyVote = false,
}) => {
  const [value, setValue] = useState<State>();
  const [vote, setVote] = useState(alreadyVote);

  const handleVote = () => {
    if (vote) {
      setValue(undefined);
      setVote(false);
    }

    if (vote === false) {
      onSubmit(value as State);
      setVote(true);
    }
  }; */

function VoteInsert() {

  const [vote, setVote] = useState(false);

  return (
    <div>
      {/* {renderUpdateLabel({ vote })} */}
      <div className="votes-input">
        {vote === false && (
          <>
              <button
                /* className={`${className} buttons buttons--${type} buttons--${
                  isActive ? "active" : ""
                }`}
                type="button"
                aria-label={`thumbs ${type}`}
                onClick={onClick}
                type="up"
                isActive={value === "VOTE_UP"}
                className="votes-input__buttons--vote-icon"
                onClick={() => setValue("VOTE_UP")} */
              >
                <img
                  /* className={className}
                  src={`assets/img/thumbs-${type}.svg`}
                  alt={`thumbs ${type}`} */
                />
              </button>

            <button
              /* className={`${className} buttons buttons--${type} buttons--${
                isActive ? "active" : ""
              }`}
              type="button"
              aria-label={`thumbs ${type}`}
              onClick={onClick}
              type="down"
              isActive={value === "VOTE_DOWN"}
              className="votes-input__buttons--vote-icon"
              onClick={() => setValue("VOTE_DOWN")} */
            >
              <img
                /* className={className}
                src={`assets/img/thumbs-${type}.svg`}
                alt={`thumbs ${type}`} */
              />
            </button>
          </>
        )}
        <button
          /* className="votes-input__buttons votes-input__buttons--vote"
          type="button"
          disabled={!value}
          onClick={handleVote}
          aria-label="vote now" */
        >
          {vote === false ? "Vote Now" : "Vote Again"}
        </button>
      </div>
    </div>
  );
};

export default VoteInsert;

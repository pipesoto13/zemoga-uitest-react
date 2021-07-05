import React, {useState} from "react";

import { formatDistanceToNow } from 'date-fns'
import { CardContainer } from "./styles";
import VoteInsert from "../VoteInsert/VoteInsert";


/* const Card: React.FC<Celebrity> = ({
  picture,
  votes: defaultVotes,
  name,
  description,
  lastUpdated,
  category,
}) => {
  const [votes, { increase, decrease }] = useVotesCount(name, defaultVotes);
  const { positive, negative } = votes;

  const handleSubmit = useCallback(
    (value: string) => {
      if (value === "VOTE_UP") {
        increase();
      }
      if (value === "VOTE_DOWN") {
        decrease();
      }
    },
    [increase, decrease]
  ); */

function Card({ name, description, category, picture, lastUpdated, votes }) {

  const [btnAgain, setBtnAgain] = useState(null);

  const handleBtnAgain = (value) => {
    setBtnAgain(value)
  }

  const dateDistance = formatDistanceToNow(
    new Date(lastUpdated),
    { addSuffix: true, addPrefix: false }
  )

  return (
    <CardContainer className="people-card">
      <div
        className="people-card__bg"
        style={{ backgroundImage: `url(/assets/img/${picture})`}}
      >
        <div className="people-card__footer">
          <div className="people-card__content">
            <div className="card-caption">
              <div className="card-caption__header">
                <div>
                  <button
                    className={`buttons buttons--${'up'}`}
                    type="button"
                    aria-label={`thumbs up`}
                  >
                    <img
                      className="people-card__progress-icon"
                      src={`assets/img/thumbs-up.svg`}
                      alt={`thumbs up`}
                    />
                  </button>
                </div>
                <h2 className="card-caption__title">{name}</h2>
              </div>
              <p className="card-caption__description">{description}</p>
            </div>
            <div>
              <div className="last-updated-label">
                {!!btnAgain && <span>Thank you for your vote!</span>}
                {!btnAgain && <span>{dateDistance} in <span className="category">{category}</span></span>}
              </div>
              <VoteInsert handleBtnAgain={handleBtnAgain}/>
            </div>
          </div>
          <div className="people-card__progress">
            <div
              className="people-card__progress-val people-card__progress-val--up"
            >
              <div className="people-card__progress-label">
                <img
                  type="up"
                  className="people-card__progress-icon"
                  src={`assets/img/thumbs-up.svg`}
                  alt={`thumbs up`}
                />
                <span>{"upVotesPerLabel"}</span>
              </div>
            </div>
            <div
              className="people-card__progress-val people-card__progress-val--down"
            >
              <div className="people-card__progress-label">
                <span>{"downVotesPerLabel"}</span>
                <img
                  type="down"
                  className="people-card__progress-icon"
                  src={`assets/img/thumbs-down.svg`}
                  alt={`thumbs down`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;

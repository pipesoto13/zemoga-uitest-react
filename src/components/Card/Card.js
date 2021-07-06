import React, {useState} from "react";

import { formatDistanceToNow } from 'date-fns'
import { CardContainer } from "./styles";
import VoteInsert from "../VoteInsert/VoteInsert";


function Card({ name, description, category, picture, lastUpdated, votes, index }) {


  const [btnAgain, setBtnAgain] = useState(null);
  const [upVotes, setUpVotes] = useState(votes.positive);
  const [downVotes, setDownVotes] = useState(votes.negative);

  const percentOfVotes = (upVotes, downVotes) => {
    const perncetUp = (upVotes/(upVotes + downVotes))*100;
    const perncetDown = 100 - perncetUp;
    return [perncetUp, perncetDown];
  }

  const [perncetUp, perncetDown] = percentOfVotes(upVotes, downVotes)

  const handleBtnAgain = (active) => {
    setBtnAgain(active);
  }
  
  const handleVoteValue = (value) => {
    value === 'upVote' ? setUpVotes(prev => prev+1) : setDownVotes(prev => prev+1);
  }

  const dateDistance = formatDistanceToNow(
    new Date(lastUpdated),
    { addSuffix: true, addPrefix: false }
  )

  return (
    <CardContainer className="card">
      <div
        className="card__bg"
        style={{ backgroundImage: `url(/assets/img/${picture})`}}
      >
        <div className="card__footer">
          <div className="card__content">
            <div className="card-caption">
              <div className="card-caption__header">
                <div>
                  <button
                    className={`buttons buttons--${perncetUp>=50 ? 'up' : 'down'}`}
                    type="button"
                    aria-label={`thumbs up`}
                  >
                    <img
                      className="card__progress-icon"
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
              <VoteInsert handleVoteValue={handleVoteValue} handleBtnAgain={handleBtnAgain} index={index}/>
            </div>
          </div>

          <div className="card__progress">
            <div
              className="card__progress-val card__progress-val--up"
              style={{ width: `${perncetUp}%` }}
            >
              <div className="card__progress-label">
                <img
                  type="up"
                  className="card__progress-icon"
                  src={`assets/img/thumbs-up.svg`}
                  alt={`thumbs up`}
                />
                <span>{perncetUp.toFixed(1)}</span>
              </div>
            </div>
            <div
              className="card__progress-val card__progress-val--down"
              style={{ width: `${perncetDown}%` }}
            >
              <div className="card__progress-label">
                <span>{perncetDown.toFixed(1)}</span>
                <img
                  type="down"
                  className="card__progress-icon"
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

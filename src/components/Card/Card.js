import React  from "react";

import { CardContainer } from "./styles";
import VoteInsert from "../VoteInsert/VoteInsert";
import ElonImg from "../../assets/img/elon.png"


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

  return (
    <CardContainer className="people-card">
      <div
        className="people-card__bg"
        style={{ backgroundImage: `url(/assets/img/${picture})`}}
      >
        <div className="people-card__footer">
          <div className="people-card__content">
             {/* CardCaption */}
            <div className="card-caption">
              <div className="card-caption__header">
                <div>
                  {/* ButtonIcon */}
                  <button
                    /* className={`${className} buttons buttons--${type} buttons--${
                      isActive ? "active" : ""
                    }`} */
                    type="button"
                    aria-label={`thumbs up`}
                    /* onClick={onClick} */
                  >
                    <img
                      type="down"
                      className="people-card__progress-icon"
                      src={`assets/img/thumbs-down.svg`}
                      alt={`thumbs down`}
                    />
                  </button>
                </div>
                <h2 className="card-caption__title">{name}</h2>
              </div>
              <p className="card-caption__description">{description}</p>
            </div>
            <VoteInsert
              renderUpdateLabel={({ vote }) => (
                <p className="last-updated-label">
                  {/* {false//voted
                    ? "Thank you for your vote!"
                    : `${getRelativeTime(lastUpdated)} ${category}`} */}
                </p>
              )}
              /* onSubmit={handleSubmit} */
            />
          </div>
          <div className="people-card__progress">
            <div
              className="people-card__progress-val people-card__progress-val--up"
              /* style={{ width: upVotesPerLabel }} */
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
              /* style={{ width: downVotesPerLabel }} */
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

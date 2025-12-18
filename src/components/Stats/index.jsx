import "./Stats.css";
import stats from "../../data/stats.json";

import Person from "../../assets/icons/person.svg?react";
import Shake from "../../assets/icons/handshake.svg?react";
import Stars from "../../assets/icons/stars.svg?react";
import Community from "../../assets/icons/community.svg?react";

const icons = {
  user: <Person />,
  book: <Shake />,
  smile: <Stars />,
  users: <Community />,
};

const StatsBar = () => {
  return (
    <section className="StatsBar">
      <div className="StatsBar__container">
        {stats.map((item) => (
          <div key={item.id} className="StatsBar__item">
            <div className="StatsBar__icon">{icons[item.icon]}</div>

            <div className="StatsBar__text">
              <span className="StatsBar__value">{item.value}</span>
              <span className="StatsBar__label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;

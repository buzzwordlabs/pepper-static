import React from 'react';
import css from './Tier.module.css';

export default function Tier(props) {
  const { flatPrice, containerClassName } = props;
  return (
    <div className={`${containerClassName} ${css.container}`}>
      <div className={css.card}>
        <div className="text-center">
          <h2 className="my-2">A Dash of Pepper</h2>
          <div className="mx-auto my-2 d-inline-block">
            <ul className="text-left my-4">
              <li className="mb-3">
                Digital receptionist to filter potential robocalls
              </li>
              <li className="mb-3">Unlimited number of blocked robocalls</li>
              <li className="mb-3">
                Automatic whitelisting for numbers in contact list
              </li>
              <li className="mb-3">Improved call sound quality</li>
            </ul>
          </div>
          <h3>{flatPrice}</h3>
          <h5>with 1 week free trial!</h5>
        </div>
      </div>
    </div>
  );
}

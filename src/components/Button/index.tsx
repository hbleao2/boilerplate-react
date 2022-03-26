import React from 'react';

import S from './style.scss';

export const Button = () => {
  return (
    <div>
      <button type="button" className={S.button}>
        Click here!
      </button>
    </div>
  );
};

import React from 'react';

import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = ({ hidden, message }) => {
  if (hidden !== true) {
    return (
      <div className={styles['Spinner__Container']}>
        <div className={styles['Spinner']}>
          <div />
          <div />
          <div />
        </div>
        {message && <p className={styles['Spinner__Message']}>{message}</p>}
      </div>
    );
  }
  return null;
};

export default LoadingSpinner;

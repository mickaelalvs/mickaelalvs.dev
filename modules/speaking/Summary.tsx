import styles from './Summary.module.scss';

export const Summary = () => {
  return (
    <p className={styles.summaryRoot}>
      A collection of talks, workshop and podcasts I've given in the past. You can find the{' '}
      <a href="#">full playlist on YouTube</a>
    </p>
  );
};

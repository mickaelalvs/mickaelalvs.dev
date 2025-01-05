import {PropsWithChildren} from 'react';
import styles from "./SpeakingList.module.scss";

export const SpeakingList = ({children}: PropsWithChildren<{}>) => {
  return <section className={styles.speakingList}>{children}</section>;
};
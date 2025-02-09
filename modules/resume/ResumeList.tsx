import {PropsWithChildren} from 'react';
import styles from "./ResumeList.module.scss";

export const ResumeList = ({children}: PropsWithChildren<{}>) => {
  return <section className={styles.resumeList}>{children}</section>;
};
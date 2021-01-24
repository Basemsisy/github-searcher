import React from "react";
import styles from "./Card.module.scss";
interface Props {
  repo: any;
}

const RepoCard: React.FC<Props> = ({ repo }) => {
  return (
    <div className={styles.Card}>
      <div></div>
      <div>
        <a target="_blank" href={repo.html_url}>
          <h4>{repo.name}</h4>
        </a>
      </div>
      <div>
        <ul>
          <li>
            <h6>Forks count</h6>
            <small>{repo.forks_count}</small>
          </li>
          <li>
            <h6>Open issues count</h6>
            <small>{repo.open_issues_count}</small>
          </li>
          <li>
            <h6>Watchers count</h6>
            <small>{repo.watchers_count}</small>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RepoCard;

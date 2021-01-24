import React from "react";
import styles from "./Card.module.scss";
interface Props {
  user: any;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className={styles.Card}>
      <div></div>
      <div>
        <img src={user.avatar_url} />
        <a target="_blank" href={user.html_url}>
          <h4>@{user.login}</h4>
        </a>
      </div>
      <div>
        <ul>
          <li>
            <h5>followers</h5>
            <p>05050</p>
          </li>
          <li>
            <h5>followers</h5>
            <p>05050</p>
          </li>
          <li>
            <h5>followers</h5>
            <p>05050</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserCard;

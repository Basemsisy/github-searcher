import React from "react";
import styles from "./CardsContainer.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import UserCard from "components/Cards/UrerCard";
import RepoCard from "components/Cards/RepoCard";
import EmptyCard from "components/Cards/EmptyCard";

interface Props {}
const CardsContainer: React.FC<Props> = () => {
  const { items, isLoading, error } = useSelector(
    (state: RootState) => state.main
  );
  if (error) {
    return <EmptyCard message={error} />;
  }
  if (isLoading) return <EmptyCard message="loading..." />;

  if (!items) return <EmptyCard message="Start type to find results" />;

  if (!items.length)
    return <EmptyCard message="No reposeitories or users match this keyword" />;

  return (
    <div className={styles.CardsContainer}>
      {items.map((item: any) => {
        if (item.type == "User") {
          return <UserCard key={item.id} user={item} />;
        } else {
          return <RepoCard repo={item} />;
        }
      })}
    </div>
  );
};

export default CardsContainer;

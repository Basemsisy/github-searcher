import React, { useCallback, useEffect, useState } from "react";
import styles from "./Form.module.scss";
import icon from "assets/imgs/github.png";
import { fetchData, resetStore } from "store/main/actions";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

interface Props {}

interface State {
  name: string;
  type: "users" | "repositories";
}

const Form: React.FC<Props> = (props) => {
  const [form, setform] = useState<State>({ name: "", type: "users" });

  const dispatch = useDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setform({ ...form, [event.target.name]: event.target.value });
  };

  const handleSearch = () => {
    if (form.name.length >= 3) {
      dispatch(fetchData(form));
    } else {
      dispatch(resetStore());
    }
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 1000), [form]);

  useEffect(() => {
    debouncedSearch();
  }, [form]);

  return (
    <div
      className={styles.Form}
      style={
        (!form.name.length && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }) ||
        {}
      }
    >
      <div className={styles.Form__Head}>
        <img src={icon} className={styles.Icon} />
        <div>
          <h4>Github Searcher</h4>
          <p>Search users or repositories below</p>
        </div>
      </div>
      <form className={styles.Form__Form}>
        <input
          value={form.name}
          className={styles.Input}
          onChange={handleChange}
          name="name"
          placeholder="start type to search"
          type="text"
        />
        <select
          value={form.type}
          className={styles.Input}
          onChange={handleChange}
          name="type"
        >
          <option value="users">user</option>
          <option value="repositories">repo</option>
        </select>
      </form>
    </div>
  );
};

export default Form;

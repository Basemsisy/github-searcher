import { RequestAction } from "@redux-requests/core";
import * as T from "./types";
export const fetchData: ({
  name,
  type,
}: {
  name: string;
  type: string;
}) => RequestAction = ({ name, type }) => ({
  type: T.LOAD_DATA,
  request: {
    url: `/${type}`,
    method: "GET",
    params: { q: name },
  },
});

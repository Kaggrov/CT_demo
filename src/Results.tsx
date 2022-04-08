import { FunctionComponent } from "react";
import { Data } from "./APIResponsesTypes";
import Response from "./Response";

const Results: FunctionComponent<{ users: Data[] }> = ({ users }) => {
  return (
    <div className="search">
      {!users.length ? (
        <h1>No candidate Found</h1>
      ) : (
        users.map((cand) => {
          return (
            <Response
              label={cand.label}
              response={cand.response}
              key={cand.response}
              
            />
          );
        })
      )}
    </div>
  );
};

export default Results;

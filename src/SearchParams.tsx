/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FunctionComponent, useState, useEffect } from "react";

import Results from "./Results";
import {DataPack ,Data} from "./APIResponsesTypes";

import 'antd/dist/antd.css';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5NTA4MzY1LCJqdGkiOiI5ZjQxNGYzYTlmMjQ0M2UxYTIzMTIxODliNjY2N2JiNSIsInVzZXJfaWQiOjQ2Mn0.1Z15Lz0SveW5CO5IqSBmUjJ7Xwuq6AXzcX54DcMS0qw"


const SearchParams: FunctionComponent = () => {
  
  const [users, setUser] = useState([] as Data[]);
  


  useEffect(() => {
    void requestAPI();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestAPI() {

    const res = await fetch(`http://ct-forms-server-test.herokuapp.com/api/2ff9e9c8-a8e3-4471-97da-9b34908bf2e5/saved-data/`, {
      method: 'GET',
      headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          'Authorization': `Bearer ${token}`,
      }
  })
    const json = (await res.json());
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const result = json.data[0] as DataPack;
    // console.log(json.data);
    setUser(result.data);
  }

  return (
    <div>
      <Results users={users} />
    </div>
  );
};

export default SearchParams;

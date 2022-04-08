
export interface Data {

  label:string;
  response:string;
}

export interface DataPack {
  id: number;
  created: string;
  metaData: string[];
  user: number;
  form_entry: number;
  data: Data[];
}




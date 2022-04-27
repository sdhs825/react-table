import { ColumnFilter } from "./ColumnFilter";
import Json from "./output.json";

let c = [];
let data = Object.keys(Json[0]);
for (let keys in data) {
  console.log(data[keys]);
  c.push({
    Header: data[keys],
    accessor: data[keys],
    Footer: data[keys],
    Filter: ColumnFilter,
  });
}

export const Columns = c;

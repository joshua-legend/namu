import TableData from "../components/TableData";
import TableHeader from "../components/TableHeader";

const TableRow = (props) => {
  const { header, data } = props;

  return (
    <tr>
      <TableHeader {...header} />
      <TableData data={data} />
    </tr>
  );
};

export default TableRow;

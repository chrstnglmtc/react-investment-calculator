import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Result({ investmentResults }) {
    return (
      <table id="result">
        <TableHeader />
        <TableRow investmentResults={investmentResults} />
      </table>
    );
  }
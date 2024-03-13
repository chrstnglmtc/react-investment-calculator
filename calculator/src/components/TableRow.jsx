import { formatter } from "../util/investment";

export default function TableRow({ investmentResults }) {
  return (
    <tbody>
      {investmentResults.map((result, index) => (
        <tr key={result.year}>
          <td>{result.year}</td>
          <td>{formatter.format(result.valueEndOfYear)}</td>
          <td>{formatter.format(result.interest)}</td>
          <td>{formatter.format(result.interest + (index > 0 ? investmentResults[index - 1].totalInterest : 0))}</td>
          <td>{formatter.format(result.valueEndOfYear - result.totalInterest)}</td>
        </tr>
      ))}
    </tbody>
  );
}

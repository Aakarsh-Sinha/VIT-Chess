import Table from "react-bootstrap/Table";
import gold_medal from "./images/gold-medal.png";
import silver_medal from "./images/silver-medal.png";
import bronze_medal from "./images/bronze-medal.png";

function ResponsiveExample() {
  const headings = [
    "#",
    "Season 1",
    "Season 2",
    "Season 3",
    "Season 4",
    "Season 5",
    "Season 6",
  ];

  const winners = ["Fischer", "Karpov", "Morphy", "Lasker", "Vidit", "Vishy"];
  const runnersup = ["Karpov", "Lasker", "Vishy", "Fischer", "Morphy", "Vidit"];
  const third = ["Vidit", "Morphy", "Fischer", "Vishy", "Lasker", "Karpov"];

  return (
    <Table responsive style={{ margin: "40px" }}>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={gold_medal} height={70} width={70}></img>
          </td>
          {winners.map((winner, index) => (
            <td key={index}>{winner}</td>
          ))}
        </tr>
        <tr>
          <td>
            <img src={silver_medal} height={70} width={70}></img>
          </td>
          {runnersup.map((winner, index) => (
            <td key={index}>{winner}</td>
          ))}
        </tr>
        <tr>
          <td>
            <img src={bronze_medal} height={70} width={70}></img>
          </td>
          {third.map((winner, index) => (
            <td key={index}>{winner}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;

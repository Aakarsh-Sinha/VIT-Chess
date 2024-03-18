import Table from "react-bootstrap/Table";

function ResponsiveExample() {
  // Define your custom headings
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
          <td>1</td>
          {winners.map((winner, index) => (
            <td key={index}>{winner}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {winners.map((winner, index) => (
            <td key={index}>{winner}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {winners.map((winner, index) => (
            <td key={index}>{winner}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;

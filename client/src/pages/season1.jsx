import TeamComposition from "../components/Season1/TeamComposition";
import Table from "../components/Points/Table";
import Winners from "../components/Season1/Winners";
import Finals from "../components/Season1/Finals";

const Season1 = () => {
  return (
    <div>
      <Winners />
      <TeamComposition />
      <Table />
      <Finals />
    </div>
  );
};

export default Season1;

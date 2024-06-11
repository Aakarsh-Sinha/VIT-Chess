import React, { useEffect, useState } from "react";
import axios from "axios";

const Profiles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/update-data"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from PostgreSQL Database</h1>
      {data}
    </div>
  );
};

export default Profiles;

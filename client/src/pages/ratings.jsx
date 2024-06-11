import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, Button } from "react-bootstrap"; // Import Dropdown and Button components from react-bootstrap
import "../assets/styles/UserRatings.css"; // Import the CSS file for styling

const UserRatings = () => {
  const [ratings, setRatings] = useState([]);
  const [sortBy, setSortBy] = useState("average_points"); // State to track the selected sorting option

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/ratings");
        const sortedRatings = response.data.sort(
          (a, b) => b.average_points - a.average_points
        );
        setRatings(sortedRatings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSortByTotalPoints = () => {
    const sortedRatings = [...ratings].sort(
      (a, b) => b.total_points - a.total_points
    );
    setRatings(sortedRatings);
    setSortBy("total_points");
  };

  const handleSortByMeanPoints = () => {
    const sortedRatings = [...ratings].sort(
      (a, b) => b.average_points - a.average_points
    );
    setRatings(sortedRatings);
    setSortBy("average_points");
  };

  return (
    <div className="ratings-container">
      <h2>Player Statistics</h2>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleSortByTotalPoints}>
            Total Points
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSortByMeanPoints}>
            Mean Points
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <table className="ratings-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Blitz Rating</th>
            <th>Bullet Rating</th>
            <th>Average Rating</th>
            <th>Blitz Points</th>
            <th>Bullet Points</th>
            <th>Average Points</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map((rating, index) => {
            const averageRating =
              (rating.blitz_rating + rating.bullet_rating) / 2;
            return (
              <tr key={index}>
                <td>
                  <a
                    href={`https://lichess.org/@/${rating.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="username-link"
                  >
                    {rating.username}
                  </a>
                </td>
                <td>{rating.blitz_rating}</td>
                <td>{rating.bullet_rating}</td>
                <td>{averageRating.toFixed(1)}</td>
                <td>{rating.blitz_points}</td>
                <td>{rating.bullet_points}</td>
                <td>{rating.average_points}</td>
                <td>{rating.total_points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserRatings;

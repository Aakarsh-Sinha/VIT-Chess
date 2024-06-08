import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/UserRatings.css"; // Import the CSS file for styling

const UserRatings = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/ratings");
        setRatings(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ratings-container">
      <h2>User Ratings</h2>
      <table className="ratings-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Blitz Rating</th>
            <th>Bullet Rating</th>
            <th>Average Rating</th>
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
                <td>{averageRating.toFixed(1)}</td>{" "}
                {/* Display the average rating */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserRatings;

import React from "react";
import "../components/css/about.css";
import PawnQueening from "../components/PawnQueenting";

const About = () => {
  return (
    <div className="about-page">  {/* Wrap content in a container */}
      <header>
        <h1>VIT Chess</h1>
        <p>A Community of Chess Enthusiasts</p>
      </header>

      <main>
        <section id="about">
          <h2>About VIT Chess</h2>
          <p>
            VIT Chess is a vibrant community of chess players brought together by their love for the game. We welcome players of all skill levels, from beginners to seasoned veterans, to join us and share their passion for strategic thinking and friendly competition.
          </p>
          <p>What We Offer:</p>
          <ul>
            <li>A welcoming and inclusive environment</li>
            <li>Regular Chess Events (e.g., Blitz Tournaments, Rapid Tournaments)</li>
            <li>Opportunities to Learn and Grow (workshops, lectures)</li>
          </ul>
        </section>

        <section id="join">
          <h2>Join the Community!</h2>
          <p>We invite you to become a part of the VIT Chess family. Here's how you can get involved:</p>
          <ul>
            <li>
              Attend our upcoming events:{" "}
              <a href="#">Events Calendar</a> (link to be added later)
            </li>
            <li>Follow us on social media: (Links to be added later)</li>
            <li>Contact us: (Email address to be added later)</li>
          </ul>
        </section>
        <PawnQueening />
      </main>

      <footer id="footer">
        <p>&copy; VIT Chess - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default About;
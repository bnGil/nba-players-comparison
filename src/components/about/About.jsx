import React from "react";
import "./about.css";

function About() {
  return (
    <div className="aboutPage">
      <section className="about-content">
        <h1>About us</h1>
        <p>
          The purpose of this application is to allow you to compare NBA players
          characteristics that are formally measureable (season's statistics)
          and informally measureable (people's opinions).
        </p>
        <br />
        <p>
          On the comparison page, you can choose one or two players to visualize
          on a chart their season's statistics: points per game, blocks per
          game, assists per game, rebounds per game, three-point percentage, and
          field goals percentage.
          <br />
          On desktop: hover with your mouse over the chart to see the exact
          values. <br />
          On mobile: click on the chart to see the exact values.
        </p>
        <br />
        <p>
          You can choose two different players or the same one for two different
          seasons!
        </p>
        <br />
        <p>
          Click the link below each player and you'll be taken to the comments
          page where you can read what other people have to say about him.
          Please be respectful.
        </p>
        <br />
        <h4>Have fun</h4>
      </section>
    </div>
  );
}

export default About;

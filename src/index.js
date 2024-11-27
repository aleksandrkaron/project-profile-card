import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./styles.css";

function Avatar() {
  return <img className="avatar" src="./alex.jpg" alt="Photo of Alex" />;
}

function Intro() {
  return (
    <div>
      <h1>Alexandre Caron</h1>
      <p>
        Enthusiastic Full Stack Web Developer, passionate about learning and
        creation. <br />
        Strong skills in both front-end and back-end development.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="C#/.NET Core" style={{ color: "red" }} />
      <Skill name="JavaScript/TypeScript" />
      <Skill name="React//Next.js/Angular" />
      <Skill name="PHP" />
      <Skill name="SQL" />
    </div>
  );
}

function Skill(props) {
  return <p className="skill">{props.name}</p>;
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

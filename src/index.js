import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./styles.css";

function Avatar() {
  return <h1>Hello!</h1>;
}

function Intro() {
  return <h1>Hello!</h1>;
}

function SkillList() {
  return <h1>Hello!</h1>;
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* One skill component for each web dev skill*/}
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

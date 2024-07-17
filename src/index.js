import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermidiete",
    color: "#E44D26",
  },
  {
    skill: "JavaScript",
    level: "intermidiete",
    color: "#EFD81D",
  },
  {
    skill: ".NET",
    level: "advanced",
    color: "#512BD4",
  },
  {
    skill: "C#",
    level: "advanced",
    color: "#9A4F96",
  },
  {
    skill: "Angular",
    level: "begginer",
    color: "#DD0031",
  },
  {
    skill: "React",
    level: "begginer",
    color: "#61DAFB",
  },
  {
    skill: "Python",
    level: "advanced",
    color: "#41B883",
  },
  {
    skill: "C++",
    level: "advanced",
    color: "#00599C",
  },
  {
    skill: "SQL",
    level: "advanced",
    color: "#F8971D",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="me1.jpg" alt="Ava" />;
}

function Intro() {
  return (
    <div>
      <h1>Roman Vorobel</h1>
      <p>
        I am currently a third-year student at the Ivan Franko National
        University of Lviv, where I am studying computer science.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <Skill skill={skill.skill} level={skill.level} color={skill.color} />
        );
      })}

      {/* <Skill name="HTML" backColor="green" emoji="💪" />
      <Skill name="CSS" backColor="orangered" emoji="💪" />
      <Skill name="JavaScript" backColor="lightblue" emoji="💪" />
      <Skill name="React" backColor="yellow" emoji="💪" />
      <Skill name=".NET" backColor="purple" emoji="💪" /> */}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div style={{ backgroundColor: `${color}` }} className="skill">
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermidiete" && "👍"}
        {level === "begginer" && "👌"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const skillsList = document.getElementById("skills-list");

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Data Structures and Algorithms (DSA)",
  "Python",
  "Java",
  "C"
];

skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});
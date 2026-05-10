document.addEventListener("DOMContentLoaded", () => {
  const planetMap = document.getElementById("planetMap");

  if (planetMap) {
    planetMap.innerHTML = PLANETS.map(planet => `
      <article class="planet-card ${planet.unlocked ? "" : "locked"}">
        <span class="planet-emoji">${planet.emoji}</span>

        <h3>${planet.title}</h3>

        <p>${planet.desc}</p>

        <div class="badge-row">
          <span class="chip">${planet.skill}</span>
          <span class="chip">${planet.mission}</span>
        </div>

        ${
          planet.unlocked
            ? `<a class="btn primary" href="mission.html?planet=${planet.id}">Миссияға кіру</a>`
            : `<button class="btn ghost">🔒 Жабық</button>`
        }
      </article>
    `).join("");
  }

  const studentTable = document.getElementById("studentTable");

  if (studentTable) {
    studentTable.innerHTML = STUDENTS.map(student => `
      <tr>
        <td><b>${student.name}</b></td>
        <td>${student.level}</td>
        <td>${student.stars}</td>
        <td>${student.strong}</td>
        <td>${student.weak}</td>
        <td>${student.activity}</td>
        <td>${student.advice}</td>
      </tr>
    `).join("");
  }
});

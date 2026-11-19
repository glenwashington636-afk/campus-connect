const form = document.getElementById("filters");
const list = document.getElementById("course-list");
const count = document.getElementById("result-count");
const departmentSelect = document.getElementById("department");

[...new Set(COURSES.map((course) => course.department))].sort().forEach((name) => {
  departmentSelect.add(new Option(name, name));
});

const courseCard = (course) => `
  <li class="panel course">
    <p class="code">${course.code} · ${course.credits} credits</p>
    <h3>${course.title}</h3>
    <p>${course.summary}</p>
    <dl>
      <dt>Department</dt><dd>${course.department}</dd>
      <dt>Delivery</dt><dd>${course.mode}</dd>
      <dt>Schedule</dt><dd>${course.schedule}</dd>
      <dt>Instructor</dt><dd>${course.instructor}</dd>
      <dt>Prerequisites</dt><dd>${course.prerequisites}</dd>
    </dl>
  </li>`;

function render() {
  const { q, department, level, mode } = Object.fromEntries(new FormData(form));
  const query = q.trim().toLowerCase();

  const matches = COURSES.filter((course) =>
    (!query || [course.code, course.title, course.instructor].some((field) => field.toLowerCase().includes(query))) &&
    (!department || course.department === department) &&
    (!level || course.level === Number(level)) &&
    (!mode || course.mode === mode)
  );

  count.textContent = `${matches.length} of ${COURSES.length} courses shown`;
  list.innerHTML = matches.length
    ? matches.map(courseCard).join("")
    : `<li class="empty">No courses match these filters. Clear the search box or choose "All" in a filter.</li>`;
}

form.addEventListener("input", render);
form.addEventListener("submit", (event) => event.preventDefault());
render();

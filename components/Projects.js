export default function renderProjects(projects) {
  const projectsHTML = document.createElement("section");
  projectsHTML.setAttribute("class", "projects");
  projectsHTML.innerHTML += `<h2>Projects</h2>
  <div class="psearch">
        <input type="search" name='work' placeholder="Search Projects...">
        </div>
        <div class ="projectlist">
    ${projects.map((item) => renderProjectItem(item)).join("")} </div>`;

  return projectsHTML;
}
export function renderProjectItem(item) {
  return `<h3>${item.title}</h3> 
    <a href="?project=${item.id}">View Project</a>`;
}


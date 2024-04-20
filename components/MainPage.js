import renderProfile from "./Profile.js";
import renderCourse, {renderCourseItem} from "./Course.js";
import renderProjects, {renderProjectItem} from "./Projects.js";
import renderWork, {renderWorkItem} from "./Work.js";

export default function renderMainPage(data) {
  const body = document.querySelector("body");
  const main = document.createElement("main");
  const left = document.createElement("section");
  main.setAttribute("class", "cont");
  left.setAttribute("class", "left");
  left.innerHTML += renderProfile(data.home);
  left.innerHTML += renderCourse(data.courses);
  left.appendChild(renderProjects(data.projects));
  main.appendChild(left);
  main.innerHTML += renderWork(data.work);
  body.appendChild(main);

  const csearch = document.querySelector(".csearch");
  console.log(csearch);
  csearch.addEventListener("input", (e) => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);

    const value = e.target.value.toLowerCase();
    const filtered = data.courses.filter((courseitem) =>
      courseitem.title.toLowerCase().includes(value)
    );
    console.log(filtered);

    const list = document.querySelector(".courselist");
    console.log(list);
    list.innerHTML = filtered
      .map((courseitem) => renderCourseItem(courseitem))
      .join("");
  });
  const psearch = document.querySelector(".psearch");
  console.log(psearch);
  psearch.addEventListener("input", (e) => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);

    const value = e.target.value.toLowerCase();
    const filtered = data.projects.filter((projectitem) =>
      projectitem.title.toLowerCase().includes(value)
    );
    console.log(filtered);

    const list = document.querySelector(".projectlist");
    console.log(list);
    list.innerHTML = filtered
      .map((projectitem) => renderProjectItem(projectitem))
      .join("");
  });
  const wsearch = document.querySelector(".wsearch");
  console.log(wsearch);
  wsearch.addEventListener("input", (e) => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);

    const value = e.target.value.toLowerCase();
    const filtered = data.work.filter((workitem) =>
      workitem.job.toLowerCase().includes(value)
    );
    console.log(filtered);

    const list = document.querySelector(".worklist");
    console.log(list);
    list.innerHTML = filtered
      .map((workitem) => renderWorkItem(workitem))
      .join("");
  });
}


import renderNavbar from "./components/Nav.js";
import renderMainPage from "./components/MainPage.js";
import renderProjectDetails from "./components/ProjectDetails.js"

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // render HTML here
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    const page = projectId == null ? "main" : "project-detail";
    if (page === "main") {
      renderNavbar();
      renderMainPage(data);
    } else {
      const p = data.projects.find((p) => p.id == projectId);
      renderNavbar();
      renderProjectDetails(p);
    }
  });

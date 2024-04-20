export default function renderProjectDetails(project) {
  const body = document.querySelector("body");
  const main = document.createElement("main");
  const section = document.createElement("section");
  main.setAttribute("class", "singleProject");

  section.innerHTML = `<h3>${project.title}</h3>
                    <p>${project.description}</p>`;

  main.appendChild(section);
  // Check if project has photos
  if (project.photos) {
    const sectionPictures = document.createElement("section");
    sectionPictures.setAttribute("class", "pictures");
    project.photos.forEach((photo) => {
      sectionPictures.innerHTML += `<img src="${photo.photo}" alt="${project.title} Photo">`;
    });
    main.appendChild(sectionPictures);
  }

  // Check if project has a path (link)
  if (project.path) {
    main.innerHTML += `<p><a href="${project.path}" target="_blank">View Project</a></p>`;
  }

  body.appendChild(main);
}


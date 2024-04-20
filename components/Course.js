export default function renderCourse(courses) {
  return `<section class="courses">
        <h2>Courses</h2>
        <div class="csearch">
        <input type="search" name='courses' placeholder="Search Courses...">
        </div>
        <div class = "courselist">
        ${courses.map((item) => renderCourseItem(item)).join("")}
        </div>
        </section>`;
}
export function renderCourseItem(item) {
  return `
        <div class="row">
          <div class="col-8">${item.title}</div>
          <div class="col-4">${item.date}</div>
        </div>`;
}
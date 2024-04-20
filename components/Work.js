export default function renderWork(work) {
  return `<section class="work">
        <h2>Work Experience</h2>
                <div class="wsearch">
        <input type="search" name='work' placeholder="Search Work Experience...">
        </div>
        <div class = "worklist">
        ${work.map((item) => renderWorkItem(item)).join("")}
         </div>
         </section>`;

}
export function renderWorkItem(item) {
  return `<h3>${item.job}</h3>
          <ul>
          <li>${item.description}</li>
          </ul>`;
}


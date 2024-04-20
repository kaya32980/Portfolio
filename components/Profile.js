export default function renderProfile(home) {
  return `
      <section class="box-profile">
        <img
          class="profile-image"
          src=${home.photo}
          alt="Profile Image"
        />
        <h1>${home.name}</h1>
        <h2>${home.university}</h2>
        <h3>${home.major}</h3>
        <p>
          Phone: <a href="tel:+4106085068">${home.phone}</a>
          <br />
          Email: <a href="mailto:pachilis@bc.edu">${home.email}</a>
        </p>
      </section>`;
}
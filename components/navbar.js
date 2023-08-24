function renderNavbar(activeRoute) {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // Add more routes as needed
  ];

  return routes
    .map((route) => {
      if (route.path === activeRoute) {
        return `<a href="${route.path}" class="active">${route.name}</a>`;
      }
      return `<a href="${route.path}">${route.name}</a>`;
    })
    .join("");
}

module.exports = renderNavbar;

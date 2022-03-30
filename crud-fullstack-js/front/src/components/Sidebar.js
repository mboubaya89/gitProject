import "../styles/Sidebar.css";

/* global bootstrap: false */
(function () {
  "use strict";
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

function Sidebar() {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light size_sidebar">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="https://www.google.fr/" class="nav-link active" aria-current="page">
            <svg class="bi me-2" width="16" height="16"></svg>
            Home 1
          </a>
        </li>
        <li>
          <a href="https://www.google.fr/" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="https://www.google.fr/" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"></svg>
            Orders
          </a>
        </li>
        <li>
          <a href="https://www.google.fr/" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"></svg>
            Products
          </a>
        </li>
        <li>
          <a href="https://www.google.fr/" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"></svg>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div
        class="fb-page"
        data-tabs="events"
        data-href="https://www.facebook.com/YoloBookStore"
        data-width="380"
      ></div>
    </div>
  );
}

export default Sidebar;

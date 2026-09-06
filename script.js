// ============================================================
// IRON TRIBE — tab navigation, mobile menu, gallery lightbox, contact form
// ============================================================

(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.getElementById("navToggle");
  var tabButtons = document.querySelectorAll("[data-tab]");
  var panels = document.querySelectorAll("[data-panel]");

  function activateTab(tabName) {
    panels.forEach(function (panel) {
      panel.classList.toggle("is-active", panel.dataset.panel === tabName);
    });
    document.querySelectorAll(".tab-link").forEach(function (link) {
      link.classList.toggle("is-active", link.dataset.tab === tabName);
    });
    document.getElementById("tabContent").scrollIntoView({ behavior: "smooth", block: "start" });
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    history.replaceState(null, "", "#" + tabName);
  }

  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activateTab(btn.dataset.tab);
    });
  });

  navToggle.addEventListener("click", function () {
    var isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Open the tab matching the URL hash on load, if any
  var initial = window.location.hash.replace("#", "");
  if (initial && document.querySelector('[data-panel="' + initial + '"]')) {
    activateTab(initial);
  }

  // ---------------- Gallery lightbox ----------------
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      var img = item.querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = item.dataset.caption || "";
      lightbox.classList.add("is-open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  // ---------------- Contact form (no backend — opens the visitor's email client) ----------------
  var form = document.getElementById("contactForm");
  var formNote = document.getElementById("formNote");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var contact = form.contact.value.trim();
    var message = form.message.value.trim();

    var subject = "Enquiry from " + name;
    var body = "Name: " + name + "\nContact: " + contact + "\n\n" + message;
    var mailto = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
    formNote.textContent = "Opening your email app to send this message…";
  });
})();

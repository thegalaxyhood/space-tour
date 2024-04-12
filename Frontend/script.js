"use strict";

// CONSTANT DECLARATIONS

// Destination page constants
const destinationButton = document.querySelectorAll(".destination_list-item");
const destinationButtonContainer = document.querySelector(".destination_list");

const seclectedDestination = document.querySelectorAll(".selected_destination");

const destinationContent = document.querySelectorAll(".destination_content");

const destinationStats = document.querySelectorAll(".destination_stats");

const destinationImage = document.querySelectorAll(".destination_image");

if (destinationButtonContainer) {
  // DESTINATION PAGE EVENT LISTENER
  document
    .querySelector(".destination_list")
    .addEventListener("click", function (e) {
      const clicked = e.target.closest(".destination_list-item");
      // Guard clause
      if (!clicked) return;

      // Remove all active classes
      destinationButton.forEach((e) =>
        e.classList.remove("destination_list--active")
      );

      destinationContent.forEach((e) => e.classList.remove("active--class"));

      seclectedDestination.forEach((e) =>
        e.classList.remove("destination--active")
      );

      destinationStats.forEach((e) => e.classList.remove("active--class"));

      destinationImage.forEach((e) => e.classList.remove("active--class"));

      // Activate active destination
      clicked.classList.add("destination_list--active");

      // Adding active class with respect to data destination number
      document
        .querySelector(`.destination--${clicked.dataset.destination}`)
        .classList.add("destination--active");
      document
        .querySelector(`.destination_content--${clicked.dataset.destination}`)
        .classList.add("active--class");
      document
        .querySelector(`.destination_stats--${clicked.dataset.destination}`)
        .classList.add("active--class");
      document
        .querySelector(`.destination_image--${clicked.dataset.destination}`)
        .classList.add("active--class");
    });
}

// Crew page constants
const crewButton = document.querySelectorAll(".crew_button");

const crewButtonContainer = document.querySelector(".crew_buttons");

const crewPosition = document.querySelectorAll(".crew_position");

const crewName = document.querySelectorAll(".crew_name");

const crewBio = document.querySelectorAll(".crew_bio");

const crewImage = document.querySelectorAll(".crew_image");

if (crewButtonContainer) {
  // CREW PAGE EVENT LISTENER
  crewButtonContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".crew_button");

    // Guard clause
    if (!clicked) return;

    // Remove all active classes
    crewButton.forEach((e) => e.classList.remove("crew_button--active"));

    crewPosition.forEach((e) => e.classList.remove("active--class"));

    crewName.forEach((e) => e.classList.remove("active--class"));

    crewBio.forEach((e) => e.classList.remove("active--class"));

    crewImage.forEach((e) => e.classList.remove("active--class"));

    // Activate active crew
    clicked.classList.add("crew_button--active");

    // Adding active class with respect to data destination number
    document
      .querySelector(`.crew_position--${clicked.dataset.crew}`)
      .classList.add("active--class");
    document
      .querySelector(`.crew_name--${clicked.dataset.crew}`)
      .classList.add("active--class");
    document
      .querySelector(`.crew_bio--${clicked.dataset.crew}`)
      .classList.add("active--class");
    document
      .querySelector(`.crew_image--${clicked.dataset.crew}`)
      .classList.add("active--class");
  });
}

// Technology page constants
const techButton = document.querySelectorAll(".technology_list");

const techButtonContainer = document.querySelector(".technology_lists");

const techHeader = document.querySelectorAll(".technology_lead-header");

const techInfo = document.querySelectorAll(".technology_info");

const techImage = document.querySelectorAll(".technology_image");

if (techButtonContainer) {
  //TECHNOLOGY PAGE EVENT LISTENER
  techButtonContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".technology_list");
    // Guard clause
    if (!clicked) return;

    // Remove all active classes
    techButton.forEach((e) => e.classList.remove("technology_list--active"));

    techHeader.forEach((e) => e.classList.remove("active--class"));
    techInfo.forEach((e) => e.classList.remove("active--class"));

    techImage.forEach((e) => e.classList.remove("active--class"));
    // Activate active crew
    clicked.classList.add("technology_list--active");

    // Adding active class with respect to data destination number
    document
      .querySelector(`.technology_lead-header--${clicked.dataset.tech}`)
      .classList.add("active--class");
    document
      .querySelector(`.technology_info--${clicked.dataset.tech}`)
      .classList.add("active--class");
    document
      .querySelector(`.technology_image--${clicked.dataset.tech}`)
      .classList.add("active--class");
  });
}

///////////////////////MOBILE NAVIGATION
const mobileNav = document.querySelector(".mobile-nav");
const mobileIcon = document.querySelector(".nav-open");
const overlay = document.querySelector(".overlay");

mobileIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("active");

  if (mobileNav.classList.contains("active")) {
    mobileIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    overlay.classList.add("dark-overlay");
  } else {
    mobileIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    overlay.classList.remove("dark-overlay");
  }
});

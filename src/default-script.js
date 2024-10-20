'use strict'

// Persian Date
const date = new Date;
document.getElementById("date").textContent =
date.toLocaleString("fa-IR", {dateStyle: "full",});


// Header Button 
const toggle = document.getElementById('nav-toggle-btn')
toggle.addEventListener('click', function() {

    // Header Button rotate
    document.body.classList.toggle('btn-rotate')

    // header-title style in h1 
    document.body.classList.toggle('header-brand');

    // change width for navbar
    document.body.classList.toggle('sidebar-closed');

    // Hide the sidebar's spans and add button and Dropdown menu for when sidebar is closed
    document.body.classList.toggle('hidden-nav');
});

// Logout dropdown in header
const logout = document.getElementById('dropdown-toggle')
logout.addEventListener('click', function() {

  // open the logout dropdown
  document.body.classList.toggle('open');
})

// Dropdown menu in navbar 
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
  
    navItems.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
  
        // Close any open dropdowns
        const openDropdown = document.querySelector(".dropdown.show");
        if (openDropdown && openDropdown !== this.nextElementSibling) {
          openDropdown.classList.remove("show");
        }
  
        // Toggle the clicked item's dropdown
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle("show");
      });
    });
});
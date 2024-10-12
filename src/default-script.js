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

    // Hide the sidebar's spans for when sidebar is closed
    document.body.classList.toggle('hidden-nav');


})
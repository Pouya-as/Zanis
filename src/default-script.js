'use strict'

// Persian Date
const date = new Date;
document.getElementById("date").textContent =
date.toLocaleString("fa-IR", {dateStyle: "full",});
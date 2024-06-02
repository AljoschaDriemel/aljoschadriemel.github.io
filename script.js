/* TOP SCROLL FUNCTION */
var mybutton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* PROJECTS HIDE FUNCTION */

let project = document.getElementById("project")
let openBtn = document.getElementById("open-btn");

openBtn.addEventListener("click", function handleClick() {
  if (project.style.display === 'block') {
    project.style.display = 'none';
  } else {
    project.style.display = 'block';
  }
})

/* openBtn.addEventListener("click", function handleClick() {
  if (project.style.display === 'none') {
    project.style.display = 'block';
  } else {
    project.style.display = 'none';
  }
}) */

/* FIX LATER */

let project2 = document.getElementById("project2")
let openBtn2 = document.getElementById("open-btn2");

openBtn2.addEventListener("click", function() {
  if (project2.style.display === 'block') {
    project2.style.display = 'none';
  } else {
    project2.style.display = 'block';
  }
})

let project3 = document.getElementById("project3")
let openBtn3 = document.getElementById("open-btn3");

openBtn3.addEventListener("click", function() {
  if (project3.style.display === 'block') {
    project3.style.display = 'none';
  } else {
    project3.style.display = 'block';
  }
})
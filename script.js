const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
//
linksContainer = document.querySelector(".nav-container");
//
btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// review data
const review = [
  {
    id: 1,
    name: "Susan Smith",
    job: "costumer",
    img: "images/profil-pic1.jpg",
    text: "Your salon is meticulous and outstanding in the service that it provides. I always leave happy and refreshed after a manicure. The salon is absolutely clean and sanitary and your team is always ready to help me make a decision about new nail art.",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "costumer",
    img: "images/profil-pic2.jpg",
    text: "I have been getting my nails done since high school and have been to a lot of different salons. Ann from Blameless salon is by far the best nail tech I have been to. I recommend this salon to every girl looking for the best nail art and customer service.",
  },
  {
    id: 3,
    name: "Emily Taylor",
    job: "costumer",
    img: "images/profil-pic3.jpg",
    text: "I did some search online for a place to get my nails done, and shortly afterward I came across Blameless. Since my first visit, I have always left their salon fully satisfied. Their team is highly qualified and knows how to treat my nails the best way.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = review[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson();
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrolHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrolHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrolHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// select scroll

const scrollLinks = document.querySelectorAll(".nav-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // navigate to specefic spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scroll({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

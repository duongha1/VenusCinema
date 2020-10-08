$(document).ready(function () {
  $(window).resize(function (e) {
    let width = $(document).width();
    console.log(width);
    if (width < 1200) {
      $(".logo").css("display", "none");
      $(".mobile-logo").css("display", "block");
    } else {
      $(".logo").css("display", "block");
      $(".mobile-logo").css("display", "none");
    }
    if (width < 768) {
      $(".navBtn").css("display", "none");
    } else {
      $(".navBtn").css("display", "block");
    }
  });
});

//------Element--------
const slideWrapper = $("#slide-wrapper");
// const moviesSelection = document.querySelector(".movies-selection");
// const btnGroup = document.querySelector("#btn-group");

const dbApi = "http://localhost:3000/slides";

function start() {
  getData((slides) => renderSlideShow(slides));
}
start();
btnMoviesStatus();
function getData(callback) {
  fetch(dbApi)
    .then((res) => res.json())
    .then(callback);
}

function renderSlideShow(slides) {
  slides.map((slide) => {
    return slideWrapper.append(`
    <div class="carousel-item" id="slide-${slide.id}">
      <a href="#">
        <img src="${slide.img}" class="d-block w-100" alt="movie">
      </a>
    </div>
    `);
  });
  $("#slide-1").addClass("active");
}
function btnMoviesStatus($this) {
  //parameter is the current element that have event
  const clicked = $this;
  if (!clicked.classList.contains("btn-active")) {
    clicked.classList.add("btn-active");
    if (clicked.previousElementSibling) {
      clicked.previousElementSibling.classList.remove("btn-active");
    } else {
      clicked.nextElementSibling.classList.remove("btn-active");
    }
  }
}

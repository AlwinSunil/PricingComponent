window.onload = function () {
  window.scrollTo(0, 0);
  const loader = document.getElementById("loader-wrapper");
  loader.style.opacity = 0;
  loader.style.display = "none";
  document.getElementById("body").style.height = "auto";
  document.getElementById("body").style.overflow = "auto";
};

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

function checkbox() {
  var checkBox = document.getElementById("checkbox");
  if (checkBox.checked == true) {
    document.getElementById("basic-monthly").innerHTML = "<strong>$</strong>19.99";
    document.getElementById("professional-monthly").innerHTML = "<strong>$</strong>24.99";
    document.getElementById("master-monthly").innerHTML = "<strong>$</strong>39.99";
  } else {
    document.getElementById("basic-monthly").innerHTML = "<strong>$</strong>199.99";
    document.getElementById("professional-monthly").innerHTML = "<strong>$</strong>249.99";
    document.getElementById("master-monthly").innerHTML = "<strong>$</strong>399.99";
  }
}

function warning() {
  window.scroll({top: 0, behavior: "smooth"});
  document.getElementById("close-button").style.display ="block";
  document.getElementById("close-button").style.fontSize = "1rem";
  document.getElementById("container").style.opacity= "50%";

}

function closeWarning() {
    document.getElementById("close-button").style.fontSize = "0px";
    document.getElementById("container").style.opacity= "100%";
}
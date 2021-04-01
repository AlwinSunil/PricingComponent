window.onload = function () {
  window.scrollTo(0, 0);
  const loader = document.getElementById("loader-wrapper");
  loader.style.opacity = 0;
  loader.style.display = "none";
  document.getElementById("body").style.height = "auto";
  document.getElementById("body").style.overflow = "auto";
  addAnimation();
};

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
  window.scroll({ top: 0, behavior: "smooth" });
  document.getElementById("close-button").style.display = "block";
  document.getElementById("close-button").style.fontSize = "1rem";
  document.getElementById("container").style.opacity = "50%";
}

function closeWarning() {
  document.getElementById("close-button").style.fontSize = "0px";
  document.getElementById("container").style.opacity = "100%";
}
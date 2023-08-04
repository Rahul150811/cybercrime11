function changeUpdatesText() {
  var updatesSection = document.querySelector(".topbar-one__left");
  var updatesText = updatesSection.querySelector("p");
  updatesText.innerText = "This website is ready to be launched in this month!";
}

window.addEventListener("load", changeUpdatesText);
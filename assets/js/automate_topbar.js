function changeUpdatesText() {
  var updatesSection = document.querySelector(".topbar-one__left");
  var updatesText = updatesSection.querySelector("p");
  updatesText.innerText = "Level up your online safety with our quick and easy ";
}

window.addEventListener("load", changeUpdatesText);
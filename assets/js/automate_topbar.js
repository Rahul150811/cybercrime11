function changeUpdatesText() {
  var updatesSection = document.querySelector(".topbar-one__left");
  var updatesText = updatesSection.querySelector("p");
  updatesText.innerText = "New Cyber Risk Assessment Tool is Available now";
}

window.addEventListener("load", changeUpdatesText);
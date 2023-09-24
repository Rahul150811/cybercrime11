function changeUpdatesText() {
  var updatesSection = document.querySelector(".topbar-one__left");
  var updatesText = updatesSection.querySelector("p");
  updatesText.innerText = "New Cyber Risk Assessment Tool will be available soon so stay tuned!";
}

window.addEventListener("load", changeUpdatesText);
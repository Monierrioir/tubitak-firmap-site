const modal = document.getElementById("mapModal");
const modalFrame = document.getElementById("modalMapFrame");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".open-map").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "block";
    modalFrame.src = this.href;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
  modalFrame.src = "";
};

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
    modalFrame.src = "";
  }
});

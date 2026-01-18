const ANNIVERSARY = "2023-08-29";

/* REMOVE PRELOAD */
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

function unlock() {
  const input = document.getElementById("dateInput").value;
  if (input === ANNIVERSARY) {
    switchSection("month1");
  } else {
    document.getElementById("lockError").innerText = "That’s not our date ❤️";
  }
}

function goTo(id) {
  switchSection(id);
}

function switchSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function sayYes() {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("final").style.opacity = "0.3";
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("final").style.opacity = "1";
}

function runAway() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 70 + "%";
  btn.style.top = Math.random() * 70 + "%";
}

/* SCROLL ANIMATION */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reason").forEach(r => {
    const rect = r.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120 && rect.bottom > 120) {
      r.classList.add("show");
    } else {
      r.classList.remove("show");
    }
  });
});

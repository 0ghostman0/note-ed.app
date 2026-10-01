document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const instrument = params.get("instrument") || "Flute";
  const level = params.get("level") || "Level 1";

  document.getElementById("instrument-name").textContent = `${instrument} Fingering Practice`;
  document.getElementById("level-label").textContent = `${level}`;

  // Global spacebar listener for "Check" button
  window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      event.preventDefault();
      const checkButton = document.getElementById("check-button");
      if (checkButton && checkButton.offsetParent !== null && !checkButton.disabled) {
        checkButton.click();
      }
    }
  });
});

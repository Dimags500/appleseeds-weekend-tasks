const spinner = document.getElementById("spinner");

function spinnerOn() {
  spinner.style.display = "block";
}

function spinnerOff() {
  spinner.style.display = "none";
}

export { spinnerOn, spinnerOff };

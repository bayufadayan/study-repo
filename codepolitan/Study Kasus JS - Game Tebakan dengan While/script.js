let maximum;
let targetNum;
let attempts = 0;

document.getElementById("start-game").addEventListener("click", () => {
  // biome-ignore lint/style/useNumberNamespace: <explanation>
  maximum = parseInt(document.getElementById("max-number").value);
  if (!maximum) {
    alert("Masukkan nilai maksimal yang valid.");
    return;
  }
  targetNum = Math.floor(Math.random() * maximum) + 1;
  console.log(targetNum);
  document.getElementById("maximum-guess").textContent = maximum;
  document.getElementById("max-number").style.display = "none";
  document.getElementById("start-game").style.display = "none";
  document.getElementById("guess-number").style.display = "block";
  document.getElementById("check-guess").style.display = "block";
});

document.getElementById("check-guess").addEventListener("click", () => {
  // biome-ignore lint/style/useNumberNamespace: <explanation>
  const guess = parseInt(document.getElementById("guess-number").value);
  attempts++;
  const statusAlert = document.getElementById("status-alert");

  if (guess === targetNum) {
    statusAlert.classList.remove("alert-danger");
    statusAlert.classList.add("alert-success");
    statusAlert.textContent = `Selamat! Anda menebak angka dengan benar dalam ${attempts} percobaan.`;
  } else if (guess > targetNum) {
    statusAlert.classList.remove("alert-success");
    statusAlert.classList.add("alert-danger");
    statusAlert.textContent = "Terlalu tinggi. Tebak lagi!";
  } else {
    statusAlert.classList.remove("alert-success");
    statusAlert.classList.add("alert-danger");
    statusAlert.textContent = "Terlalu rendah. Tebak lagi!";
  }
  statusAlert.style.display = "block";
});

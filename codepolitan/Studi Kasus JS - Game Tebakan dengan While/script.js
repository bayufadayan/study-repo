// let maximum;
// let targetNum;
// let attempts = 0;

// document
//   .getElementById("submit-maximum")
//   .addEventListener("click", () => {
//     // Get the value from the maximum input field
//     maximum = Number.parseInt(document.getElementById("input-maximum").value);

//     if (!maximum) {
//       alert("Masukkan nilai maksimal yang valid.");
//       return;
//     }

//     // Hide the maximum input and button, show the guess input and button
//     document.getElementById("input-maximum").style.display = "none";
//     document.getElementById("submit-maximum").style.display = "none";
//     document.getElementById("input-tebak").style.display = "block";
//     document.getElementById("submit-guess").style.display = "block";

//     // Generate a random number between 1 and maximum
//     targetNum = Math.floor(Math.random() * maximum) + 1;
//     console.log(targetNum); // For debugging
//     document.getElementById("maximum-guess").textContent = maximum;
//   });

// document.getElementById("submit-guess").addEventListener("click", () => {
//   // Get the value from the guess input field
//   const guess = Number.parseInt(document.getElementById("input-tebak").value);
//   attempts++;
//   const statusAlert = document.getElementById("status-alert");

//   if (guess === targetNum) {
//     statusAlert.classList.remove("alert-danger");
//     statusAlert.classList.add("alert-success");
//     statusAlert.textContent = `Selamat! Anda menebak angka dengan benar dalam ${attempts} percobaan.`;
//   } else if (guess > targetNum) {
//     statusAlert.classList.remove("alert-success");
//     statusAlert.classList.add("alert-danger");
//     statusAlert.textContent = "Terlalu tinggi. Tebak lagi!";
//   } else {
//     statusAlert.classList.remove("alert-success");
//     statusAlert.classList.add("alert-danger");
//     statusAlert.textContent = "Terlalu rendah. Tebak lagi!";
//   }
//   statusAlert.style.display = "block";
// });

let maximum;
let randomNumber;
let attempts = 0;

function setMaximum() {
  const maximumInput = document.getElementById("input-maximum");
  const maximumView = document.getElementById("maximum-guess");

  maximum = Number.parseInt(maximumInput.value);

  if (!maximum) {
    alert("Isi field dan masukan nilai yang valid!");
    return;
  }

  console.log(maximum);
  maximumView.innerHTML = `${maximum}`;

  const status = document.getElementById("mystatus");
  status.innerHTML = "Nilai maksimum sudah diset, kamu belum mencoba menebak!";
  status.style.display = "block";

  document.getElementById(
    "instruksi"
  ).innerHTML = `Silakan tebak angkanya! Nilai berkisar 1 - ${maximum}`;
  document.getElementById("instruksi").style.fontWeight = 600;

  document.getElementById("input-maximum").style.display = "none";
  document.getElementById("submit-maximum").style.display = "none";
  document.getElementById("input-guess").style.display = "block";
  document.getElementById("submit-guess").style.display = "block";

  // random numbernya
  randomNumber = Math.floor(Math.random() * maximum) + 1;
  console.log(`${randomNumber} Ini sengaja dimunculin hasil bener nya`);
}

function guessNumber() {
  attempts++;
  const guessInput = document.getElementById("input-guess");
  const failedStatus = document.getElementById("failed-status");
  const successStatus = document.getElementById("success-status");
  const attemptsCount = document.getElementById("attempts-count");

  guess = Number.parseInt(guessInput.value);

  if (!guess) {
    alert("Isi field dan masukan nilai yang valid!");
    return;
  }

  console.log(guess);
  attemptsCount.innerHTML = `<br>Jumlah percobaan: <b>${attempts}</b>`;

  while (guess !== randomNumber) {
    failedStatus.style.display = "block";
    document.getElementById("mystatus").style.display = "none";
    // document.getElementById("successStatus").style.display = "none";

    if (guess < randomNumber) {
      console.log("Terlalu kecil");
      failedStatus.innerHTML = "Tebakanmu terlalu kecil, Silakan tebak lagi";
    } else {
      console.log("Terlalu Besar");
      failedStatus.innerHTML = "Tebakanmu terlalu besar, Silakan tebak lagi";
    }
    return;
  }

  document.getElementById("mystatus").style.display = "none";
  successStatus.style.display = "block";
  failedStatus.style.display = "none";

  successStatus.innerHTML =
    'Selamat Tebakan Anda benar <br><button type="button" onclick="location.reload();" style="margin-top: 10px; border-radius: 10px;">Reset</button>';
  document.getElementById('submit-guess').disabled = true;
}

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

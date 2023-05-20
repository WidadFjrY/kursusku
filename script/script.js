// Button nav-bar
document
  .getElementById("btn-instruktur")
  .addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/index.html#instruktur";
  });

document.getElementById("btn-course").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/index.html#content";
});

const radioButtons = document.querySelectorAll(
  '.radio-filter input[name="filter"]'
);

// Filter radio button
const filterOptionWeb = document.getElementById("filter-option-web");
const filterOptionMobile = document.getElementById("filter-option-mobile");
const filterOptionIOS = document.getElementById("filter-option-ios");
const filterOptionData = document.getElementById("filter-option-data");
const filterOptionDb = document.getElementById("filter-option-db");
const labelWeb = document.getElementById("label-web");
const labelMobile = document.getElementById("label-mobile");
const labelIOS = document.getElementById("label-ios");
const labelData = document.getElementById("label-data");
const labelDb = document.getElementById("label-db");
const contentWebDeveloper = document.getElementById("content-web-developer");
const contentMobileDeveloper = document.getElementById(
  "content-mobile-developer"
);
const contentIosDeveloper = document.getElementById("content-ios-developer");
const contentData = document.getElementById("content-data-scientist");
const contentDb = document.getElementById("content-relational-database");

if (radioButtons[0].checked) {
  filterOptionWeb.style.backgroundColor = "#5d646f";
  labelWeb.style.color = "#fff";
  contentMobileDeveloper.style.display = "none";
  contentIosDeveloper.style.display = "none";
  contentData.style.display = "none";
  contentDb.style.display = "none";
}

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", function () {
    if (this.checked) {
      let selectedValue = this.value;
      if (selectedValue === "web-developer") {
        filterOptionWeb.style.backgroundColor = "#5d646f";
        labelWeb.style.color = "#fff";
        contentWebDeveloper.style.display = "block";
      } else {
        filterOptionWeb.style.backgroundColor = "#f7f7f7";
        labelWeb.style.color = "#131313";
        contentWebDeveloper.style.display = "none";
      }
      if (selectedValue === "mobile-developer") {
        filterOptionMobile.style.backgroundColor = "#5d646f";
        labelMobile.style.color = "#fff";
        contentMobileDeveloper.style.display = "block";
      } else {
        filterOptionMobile.style.backgroundColor = "#f7f7f7";
        labelMobile.style.color = "#131313";
        contentMobileDeveloper.style.display = "none";
      }
      if (selectedValue === "ios-developer") {
        filterOptionIOS.style.backgroundColor = "#5d646f";
        labelIOS.style.color = "#fff";
        contentIosDeveloper.style.display = "block";
      } else {
        filterOptionIOS.style.backgroundColor = "#f7f7f7";
        labelIOS.style.color = "#131313";
        contentIosDeveloper.style.display = "none";
      }
      if (selectedValue === "data-scientist") {
        filterOptionData.style.backgroundColor = "#5d646f";
        labelData.style.color = "#fff";
        contentData.style.display = "block";
      } else {
        filterOptionData.style.backgroundColor = "#f7f7f7";
        labelData.style.color = "#131313";
        contentData.style.display = "none";
      }
      if (selectedValue === "relational-database") {
        filterOptionDb.style.backgroundColor = "#5d646f";
        labelDb.style.color = "#fff";
        contentDb.style.display = "block";
      } else {
        filterOptionDb.style.backgroundColor = "#f7f7f7";
        labelDb.style.color = "#131313";
        contentDb.style.display = "none";
      }
    }
  });
}

// Button selengkapnya
let clicked = false;

function ExtendCardJava() {
  const cardExtend = document.getElementById("card-extend-java");
  const btn = document.getElementById("btn-java");

  const currentHeight = cardExtend.offsetHeight;
  let targetHeight = currentHeight === 0 ? cardExtend.scrollHeight : 0;

  if (!clicked) {
    btn.innerHTML = "Lihat Lebih Sedikit";
    cardExtend.style.height = targetHeight + "px";
    btn.style.marginTop = "0";
  } else {
    btn.innerHTML = "Lihat Selengkapnya";
  }

  if (targetHeight === 0) {
    btn.innerHTML = "Lihat Selengkapnya";
    btn.style.marginTop = "-2rem";
  }

  currentHeight = 0;
  clicked = !clicked;
}

function ExtendCardGolang() {
  const cardExtend = document.getElementById("card-extend-golang");
  const btn = document.getElementById("btn-golang");

  const currentHeight = cardExtend.offsetHeight;
  const targetHeight = currentHeight === 0 ? cardExtend.scrollHeight : 0;

  if (!clicked) {
    btn.innerHTML = "Lihat Lebih Sedikit";
    cardExtend.style.height = targetHeight + "px";
    btn.style.marginTop = "0";
  } else {
    btn.innerHTML = "Lihat Selengkapnya";
  }

  if (targetHeight === 0) {
    btn.innerHTML = "Lihat Selengkapnya";
    btn.style.marginTop = "-2rem";
  }

  currentHeight = 0;
  clicked = !clicked;
}

// Button login
function loginClick() {
  const formLogin = document.getElementById("form-login");
  const overlay = document.getElementById("overlay");

  formLogin.style.display = "block";
  overlay.style.display = "block";
  setTimeout(function () {
    overlay.classList.add("active");
  }, 10);
}

function formButton() {
  const formLogin = document.getElementById("form-login");
  const overlay = document.getElementById("overlay");
  const verifikasi = document.getElementById("verifikasi");
  const slider = document.getElementById("slider");
  const gambar = document.getElementById("gambar");

  verifikasi.style.display = "flex";
  formLogin.style.filter = "blur(5px)";

  slider.addEventListener("input", function () {
    const nilaiSlider = slider.value;

    console.log(nilaiSlider);
    if (nilaiSlider == 88) {
      if (overlay.classList.contains("active")) {
        overlay.classList.remove("active");
        formLogin.style.display = "none";
        verifikasi.style.display = "none";
        formLogin.style.filter = "none";
        slider.value = 0;
        gambar.style.transform = `translateX(${slider.value}px)`;

        setTimeout(function () {
          overlay.style.display = "none";
        }, 300);
      } else {
        overlay.style.display = "block";
        setTimeout(function () {
          overlay.classList.add("active");
        }, 10);
      }
    }
  });
}

// Verifikasi robot
const slider = document.getElementById("slider");
const gambar = document.getElementById("gambar");

slider.addEventListener("input", function () {
  const nilaiSlider = slider.value;
  const pergeseran = (nilaiSlider - 50) * 2;

  gambar.style.transform = `translateX(${pergeseran}px)`;
});

feather.replace();

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Modal Box
const itemDetailModalA = document.querySelector("#item-detail-modal-a");
const itemDetailModalB = document.querySelector("#item-detail-modal-b");
const itemDetailModalC = document.querySelector("#item-detail-modal-c");
const itemDetailModalD = document.querySelector("#item-detail-modal-d");
const itemDetailButtonsA = document.querySelectorAll(".item-detail-button-a");
const itemDetailButtonsB = document.querySelectorAll(".item-detail-button-b");
const itemDetailButtonsC = document.querySelectorAll(".item-detail-button-c");
const itemDetailButtonsD = document.querySelectorAll(".item-detail-button-d");

itemDetailButtonsA.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalA.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtonsB.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalB.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtonsC.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalC.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtonsD.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalD.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon-a").onclick = (e) => {
  itemDetailModalA.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon-b").onclick = (e) => {
  itemDetailModalB.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon-c").onclick = (e) => {
  itemDetailModalC.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon-d").onclick = (e) => {
  itemDetailModalD.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModalA) {
    itemDetailModalA.style.display = "none";
  } else if (e.target === itemDetailModalB) {
    itemDetailModalB.style.display = "none";
  } else if (e.target === itemDetailModalC) {
    itemDetailModalC.style.display = "none";
  } else if (e.target === itemDetailModalD) {
    itemDetailModalD.style.display = "none";
  }
};

// const lihatDetailModal = document.querySelector("#item-detail-modal-d");

// document.querySelector(".product-icons-button-detail").onclick = (e) => {
//   itemDetailModalB.style.display = "none";
//   html_module.html
//   e.preventDefault();
// };
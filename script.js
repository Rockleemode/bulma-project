const nav = document.querySelector("#nav-links");
const icon = document.querySelector("#burger-icon");

icon.addEventListener("click", () => {
  nav.classList.toggle("is-active");
});

const tabs = document.querySelectorAll(".tabs li");
const content = document.querySelectorAll("#tab-content > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("is-active");
    });
    tab.classList.add("is-active");

    const target = tab.dataset.target;

    content.forEach((bro) => {
      if (bro.getAttribute("id") == target) {
        bro.classList.remove("is-hidden");
      } else bro.classList.add("is-hidden");
    });
  });
});

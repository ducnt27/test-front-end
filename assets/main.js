const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion__header");
  const icon = item.querySelector(".accordion__icon");

  header.addEventListener("click", () => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      icon.textContent = "-";
    } else {
      icon.textContent = "+";
    }

    accordionItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion__icon").textContent = "+";
      }
    });
  });
});

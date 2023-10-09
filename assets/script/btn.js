import caseData from "./data";

const btnContainer = document.querySelector(".case-btn-container");
const sectionCenter = document.querySelector(".case-card-container");

let uniqueTypes; // Declare uniqueTypes outside the function

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuButtons();
  displayMenuItems(caseData); // Corrected typo
});

function displayMenuButtons() {
  uniqueTypes = caseData.reduce(
    function (values, item) {
      if (!values.includes(item.type)) {
        values.push(item.type);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = uniqueTypes
    .map(function (type) {
      return `<button type="button" class="filter-btn" data-id="${type}">
          ${type}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = caseData.filter(function (item) {
        if (item.type === category) {
          return item;
        }
      });
      if (category === "all") {
        displayMenuItems(caseData);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.caseName} class="photo" />
    <div class="content">
            <p class="content-info">${item.detail}</p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const subMenu = document.getElementById("sub-menu");

const dropSubMenu = document.querySelectorAll(".dropdown-btn");
const titlesInMenu = document.querySelectorAll("#menu-title");

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  toggleTitleMenu();
}

function toggleTitleMenu() {
  const isSideBarShrinked = sidebar.classList.contains("close");
  if (isSideBarShrinked) {
    titlesInMenu.forEach((title) => {
      console.log(title);
      title.style.display = "none";
    });
  } else {
    titlesInMenu.forEach((title) => {
      console.log(title);
      title.style.display = "";
    });
  }
}

function toggleSubMenu(button) {
  preventOpenOtherDropMenu(button.id); //Prevents more than 1 dropdown menu open at same time
  toggleDropMenuTab(button.classList.contains("show"));

  button.classList.toggle("show");
  button.classList.toggle("rotate");
}

function preventOpenOtherDropMenu(itemName) {
  const childQuantities = subMenu.childElementCount;
  dropSubMenu.forEach((item) => {
    if (item.classList.contains("show")) {
      if (item.id !== itemName) {
        item.classList.remove("show");
        item.classList.remove("rotate");
      }
    }
  });

  for (let i = 0; i < childQuantities; i++) {
    let subMenuItem = subMenu.children[i];
    if (subMenuItem.id == itemName) {
      subMenuItem.style.display = "";
    } else {
      subMenuItem.style.display = "none";
    }
  }
}

function toggleDropMenuTab(itemShow) {
  if (itemShow) {
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "block";
  }
}

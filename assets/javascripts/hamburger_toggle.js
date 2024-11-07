document.addEventListener("DOMContentLoaded", () => {
  const isDebugMode = window.RAILS_ENV === 'development';

  if (isDebugMode) console.log("DOM fully loaded and parsed");

  const mobileMenuButton = document.querySelector("#hamburger-button");
  const mobileMenu = document.querySelector("#mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    if (isDebugMode) console.log("Mobile menu button and menu found");

    mobileMenuButton.addEventListener("click", () => {
      if (isDebugMode) console.log("Hamburger button clicked");
      mobileMenu.classList.toggle("hidden");
      if (isDebugMode) console.log("Mobile menu visibility toggled");
    });

    // Close the mobile menu when clicking outside of it
    window.addEventListener("click", (event) => {
      if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        if (isDebugMode) console.log("Clicked outside the mobile menu");
        mobileMenu.classList.add("hidden");
      }
    });
  } else {
    if (!mobileMenuButton && isDebugMode) console.log("Mobile menu button not found");
    if (!mobileMenu && isDebugMode) console.log("Mobile menu not found");
  }
});
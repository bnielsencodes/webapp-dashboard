const alertBanner = document.getElementById("alert");

// create the html for the banner
alertBanner.innerHTML =
  `
  <div class="alert-banner">
    <div class="alert-p-container">
      <p class="alert-p"><strong class="alert-strong">Alert:</strong> You have undread messages</p>
      <p class="alert-banner-close">x</p>
    </div>
  </div>
  `

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
});
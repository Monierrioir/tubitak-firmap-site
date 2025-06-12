document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".open-map");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetURL = this.getAttribute("href");

      if (!targetURL) {
        console.warn("Harita bağlantısı boş.");
        return;
      }

      // Modal yerine aynı sayfada aç
      window.open(targetURL, "_self");
    });
  });
});

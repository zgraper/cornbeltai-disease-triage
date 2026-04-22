// ============================================================
//  CornbeltAI Disease Triage — Tab Switching Logic
// ============================================================

(function () {
  "use strict";

  // ── Open / Close Popup ─────────────────────────────────
  const overlay   = document.getElementById("popup-overlay");
  const openBtn   = document.getElementById("open-popup-btn");
  const closeBtn  = document.getElementById("close-popup-btn");

  function openPopup() {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openPopup);
  closeBtn.addEventListener("click", closePopup);

  // Close when clicking outside the popup box
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closePopup();
  });

  // Close with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("active")) closePopup();
  });

  // ── Crop Tab Switching ─────────────────────────────────
  const tabs   = document.querySelectorAll(".crop-tab");
  const panels = document.querySelectorAll(".crop-panel");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const target = tab.dataset.crop;

      tabs.forEach(function (t) { t.classList.remove("active"); });
      panels.forEach(function (p) { p.classList.remove("active"); });

      tab.classList.add("active");
      document.getElementById("panel-" + target).classList.add("active");

      // Scroll panel back to top whenever tab switches
      document.querySelector(".popup-body").scrollTop = 0;
    });
  });
})();

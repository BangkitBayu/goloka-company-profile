// To get all element validation
let invalidValidation = document.querySelectorAll(".invalid-validation");
let invalidValidationEmail = document.querySelector(
  "span.invalid-validation-email",
);

//regex pattern
const numPattern = /^\d{12}/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Contact Form to WhatsApp Integration
  const submitWaBtn = document.getElementById("submit-wa-btn");

  submitWaBtn.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const email = document.getElementById("email").value;
    const paket = document.getElementById("paket").value;

    // input validation
    if (name.trim() === "" || whatsapp.trim() === "") {
      invalidValidation.forEach((e) => {
        e.textContent = "Mohon isi Nama dan No. WhatsApp";
        e.classList.remove("hidden");
      });
      return;
    } else {
      invalidValidation.forEach((e) => {
        e.classList.add("hidden");
      });
    }

    if (!numPattern.test(whatsapp)) {
      invalidValidation[1].textContent = "Mohon masukkan nomor yang valid";
      invalidValidation[1].classList.remove("hidden");
      return;
    } else {
      invalidValidation[1].classList.add("hidden");
    }

    if (email && !emailPattern.test(email)) {
      invalidValidationEmail.textContent = "Mohon masukkan email yang valid";
      invalidValidationEmail.classList.remove("hidden");
      return;
    } else {
      invalidValidationEmail.classList.add("hidden");
    }

    const phoneNumber = "6285189081947";
    const message = `Halo Goloka, saya ingin mendaftar dengan detail berikut:
-----------------------------
*Nama:* ${name}
*No. WhatsApp:* ${whatsapp}
*Email:* ${email || "Tidak diisi"}
*Paket yang Dipilih:* ${paket}
-----------------------------
Mohon informasinya lebih lanjut. Terima kasih.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  });
});

document.getElementById("year").textContent = `${new Date().getFullYear()}`;

// Menunggu hingga seluruh dokumen HTML telah di-load
// document.addEventListener("DOMContentLoaded", function () {
//     // Mendapatkan referensi elemen-elemen yang akan diubah
//     const toggleElement = (trigger, target) => {
//         // Menambahkan event listener untuk menangani klik pada elemen
//         trigger.addEventListener("click", function (e) {
//             // Mencegah perilaku default dari tautan
//             e.preventDefault();
//             // Toggle class "active" pada elemen yang diklik dan elemen target
//             trigger.classList.toggle("active");
//             target.classList.toggle("active");
//         });
//     };

//     // Mendapatkan referensi elemen-elemen yang diperlukan
//     const feature = document.getElementById("features");
//     const company = document.getElementById("company");
//     const accordionFeature = document.getElementById("accordion_feature");
//     const accordionCompany = document.getElementById("accordion_company");

//     // Menggunakan fungsi toggleElement untuk mengelola klik pada elemen feature
//     toggleElement(feature, accordionFeature);
//     // Menggunakan fungsi toggleElement untuk mengelola klik pada elemen company
//     toggleElement(company, accordionCompany);
// });

// menggunkan event bubbling
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".toggle");
    const navbarList = document.getElementById("navbar_list");
    const accordionFeature = document.getElementById("accordion_feature");
    const accordionCompany = document.getElementById("accordion_company");
    const feature = document.getElementById("features");
    const company = document.getElementById("company");
    const navbar = document.querySelector(".navbar");

    toggle.addEventListener("click", function () {
        toggle.classList.toggle("open");
        navbar.classList.toggle("show");
    });

    navbarList.addEventListener("click", function (e) {
        // Memeriksa elemen target yang diklik
        const target = e.target;

        // Memeriksa apakah yang diklik adalah elemen dengan ID "features"
        if (target.id === "features") {
            e.preventDefault(); // Mencegah perilaku default dari tautan
            featureClick();
        }

        // Memeriksa apakah yang diklik adalah elemen dengan ID "company"
        else if (target.id === "company") {
            e.preventDefault(); // Mencegah perilaku default dari tautan
            companyClick();
        }
    });

    // Fungsi untuk menangani klik pada elemen "features"
    function featureClick() {
        feature.classList.toggle("active");
        accordionFeature.classList.toggle("active");
    }

    // Fungsi untuk menangani klik pada elemen "company"
    function companyClick() {
        company.classList.toggle("active");
        accordionCompany.classList.toggle("active");
    }
});

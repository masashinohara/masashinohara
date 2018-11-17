import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["EXPLORE YOUR DRINKS"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };

// import swal from 'sweetalert';

// function bindSweetAlertButtonDemo() {
//   const swalButton = document.getElementById('sweet-alert-new-cocktail');
//   if (swalButton) { // protect other pages
//     swalButton.addEventListener('click', () => {
//       swal({
//         title: "Created successfully!",
//         text: "Add doses to your new cocktail then!",
//         icon: "success"
//       });
//     });
//   }
// }

// function bindSweetAlertButtonDemo() {
//   const swalButton = document.getElementById('sweet-alert-new-dose');
//   if (swalButton) { // protect other pages
//     swalButton.addEventListener('click', () => {
//       swal({
//         title: "Added new dose!",
//         text: "You can add review, too!",
//         icon: "success"
//       });
//     });
//   }
// }

// function bindSweetAlertButtonDemo() {
//   const swalButton = document.getElementById('sweet-alert-new-review');
//   if (swalButton) { // protect other pages
//     swalButton.addEventListener('click', () => {
//       swal({
//         title: "Thank you for your review!",
//         text: "Enjoy your drink!",
//         icon: "success"
//       });
//     });
//   }
// }

// export { bindSweetAlertButtonDemo };

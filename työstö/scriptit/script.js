window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

function showContactForm() {
  // Piilota kaikki lomakkeet
  var forms = document.querySelectorAll('.contactForm');
  forms.forEach(function(form) {
      form.style.display = 'none';
  });

  // Näytä klikatun teoksen lomake
  var clickedForm = event.target.closest('.aino_taide').querySelector('.contactForm');
  clickedForm.style.display = 'block';
}

// Estä lomakkeen oletustoiminta ja toteuta oma toiminto
document.querySelectorAll('.contactForm form').forEach(function(form) {
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Estä lomakkeen oletustoiminta
      
      // Toteuta haluamasi toiminto, esim. lomaketietojen käsittely
      console.log('Lomaketiedot lähetetty');
      
      // Piilota lomake lähettämisen jälkeen
      this.closest('.contactForm').style.display = 'none';
  });
});

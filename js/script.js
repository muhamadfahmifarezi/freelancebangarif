const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color');
    } else if(window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparent');
    }
});


var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);



      const contactForm = document.getElementById("contact-form");
      const loader = document.querySelector(".loader");
      
      loader.style.display = "none";
      
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        loader.style.display = "block";
        const url = e.target.action;
        const formData = new FormData(contactForm);
      
        fetch(url, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        })
          .then(() => {
            loader.style.display = "none";
            window.location.href = "/thankyou.html";
          })
          .catch((e) => alert("Error occured"));
      });
// const Button = document.getElementById("selector-ball");
const Button = document.querySelector(".selector-ball");
const select_bar = document.querySelector(".select-bar");


Button.addEventListener("click", myFunction);

function myFunction() {
  var monthPayment = document.getElementsByTagName("h3");
  var annualPayment = document.getElementsByTagName("h4");
  var i;
  var n;
  for (i = 0; i < monthPayment.length; i++) {
    for (n = 0; n < annualPayment.length; n++) {
      if (monthPayment[i].style.display === "none") {
        monthPayment[i].style.display = "block";
        annualPayment[i].style.display = "none";
        select_bar.style.justifyContent = "flex-end";
      } else {
        monthPayment[i].style.display = "none";
        annualPayment[i].style.display = "block";
        select_bar.style.justifyContent = "flex-start";
      }
    }
  }

}

const Button = document.getElementById("select-ball");
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
        Button.style.justifyContent = "flex-end";
      } else {
        monthPayment[i].style.display = "none";
        annualPayment[i].style.display = "block";
        Button.style.justifyContent = "flex-start";
      }
    }
  }
}

//Tip calculator function
var starList = document.querySelector('#rate-area');
var starRating;
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    
    //validate input
    if (billAmt === "" || serviceQual == 0) {
      alert("Error: Values Missing");
      return;
    }
    //Did you input anything at all?
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
    //Calculate the tip
    var total = (billAmt * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  }
  //Don't initially show tip amount
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  };
  //This is the slider's function
  var slider = document.getElementById("peopleamt");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value;
  }

  starList.addEventListener('click', function(event){
    starRating = event.target.value;
  });
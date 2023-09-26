var regExp = /^([a-zA-Z0-9._]+)@([a-z0-9]+\.)+([a-z]+)$/;

var UserName = /^([a-zA-Z0-9`_`]+)$/;
var phoneNumber = /^([0-9]+)$/;


function check() {
  var email = document.getElementById("yomail").value;
  var user = document.getElementById("userName").value;
  var phone = document.getElementById("phoneNumber").value;
  
  if (regExp.test(email) ) {
    alert("Valid email");
  } else {
    alert("Invalid email");
  }


  if (UserName.test(user)) {
    alert("Valid userName");
  } else {
    alert("Invalid UserName");
  }

  if (phoneNumber.test(phone)) {
    alert("Valid phone");
  } else {
    alert("Invalid phone");
  }



}

//Initialize Firebase

var config = {
    apiKey: "AIzaSyCS3mW1yaE9GXQpyZGt1PxgrBmgaZwq4QE",
    authDomain: "portfolio-1ab36.firebaseapp.com",
    databaseURL: "https://portfolio-1ab36.firebaseio.com",
    projectId: "portfolio-1ab36",
    storageBucket: "",
    messagingSenderId: "221228245472"
 };

firebase.initializeApp(config);

var inquiry = firebase.database();

$("#sendInfo").on("click",function(){
	event.preventDefault();
	var name = $("#inputName").val().trim();
	var phone = $("#inputPhone").val().trim();
	var email = $("#inputEmail").val().trim();
	var preference = $("form").serialize();
	var consult = [];

	$('input[id="consultation"]:checked').each(function() {
   		consult.push(this.value); 
	});

	var newInquiry = {
		name: name,
		phone: phone,
		email: email,
		contactPreference: preference,
		consultationDesired: consult
	}

	inquiry.ref().push(newInquiry);

	alert("Thank you for contacting me! I will attempt to reach out to you as soon as possible, usually within 24 hours.");

	 window.location.reload();

})

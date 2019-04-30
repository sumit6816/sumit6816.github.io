$(document).ready(function(){

$('#slides').superslides({
	animation:'fade',
	play:5000,
	pagination:false
});

var typed=new Typed(".typed",{

strings: ["Software Engineer","Delhi Technological University","Student","Competitive Programmer"],
typeSpeed: 80,
loop: true,
startDelay: 1000,
showCursor: false
});
});
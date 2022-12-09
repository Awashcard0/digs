// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//     location.href = "/m"
//   }else{
    
//   }

  if(window.innerHeight > window.innerWidth){
    // Portrait
    location.href = "/m"
} else {
	// Landscape
  // location.href = "/"
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}
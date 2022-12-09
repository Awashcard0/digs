function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//     location.href = "/m"
//   }else{
    
//   }

if(window.innerHeight > window.innerWidth){
    // Portrait
    location.href = "/m"
} else {
	// Landscape
  location.href = "/"
}

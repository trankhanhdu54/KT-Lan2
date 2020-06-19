window.onscroll = function(){
	
    var kc      = document.documentElement.scrollTop;
    var header  = document.getElementById("header");
    var logo    = document.getElementById("logo");
    var hinhanh = document.getElementById("hinhanh");
    var menu    = document.getElementById("menu");
    var hinh3   = document.getElementById("hinh3");
    console.log(kc);
    var khungtren = document.getElementById("khungtren");
    var khunggiua = document.getElementById("khunggiua");
    

   if(kc>150){
    // biến đổi
        
        menu.style.top = "0px";
        logo.style.fontSize = "30px";
        header.style.top = "-200px";


        khunggiua.classList.add("khunggiua2");
       
        
   }else{
    // về như cũ
        
        logo.style.fontSize = "40px";
        menu.style.top = "220px";
        header.style.top = "0px";

        
        khunggiua.classList.remove("khunggiua2");
        
   }
   if (kc>50) {
        hinhanh.style.height = "167px";
        hinhanh.style.width ="270px";
        header.style.padding = "10px 20px";
        logo.style.padding = "50px";
   }
   else {
        hinhanh.style.height = "200px";
        hinhanh.style.width ="300px";
        header.style.padding = "10px 20px";
        logo.style.padding = "40px";
   }
   if (kc>755) {
        hinh3.classList.add("hinh3lol");
   } else {
        hinh3.classList.remove("hinh3lol");
   }
   
}

// hiệu ứng 1 


function opentimkiem(){
	var khung = document.getElementById("khung");
	if (khung.classList.contains("hieuung2")) {
		khung.classList.remove("hieuung2");
	}else{
		khung.classList.add("hieuung2");
	}
}





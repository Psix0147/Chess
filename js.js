//Создание поля//	
for (var i=0; i<64; i++){
	document.getElementById("game").innerHTML += "<div class=\"block\"></div>";
}
	
MakeDesk();
	
function MakeDesk(){
	var ActB = document.getElementsByClassName("block");
		
	var color;
	for (color = 0; color < 8; color++){
		for (i = 0; i < 8; i++){
			if (color%2 == i%2) {
				ActB[i + color*8].style.backgroundColor = "black";
			}else{
				ActB[i + color*8].style.backgroundColor = "white";
			}
		}
	}
		
	var i;
	for (i=8; i<16; i++){
		ActB[i].innerHTML += "BP";
		ActB[i + 40].innerHTML += "WP";
	}
	var count = 0;	
	document.getElementById("button").onclick = function(){            
		var Hod;
		Hod = prompt("Выберите клетку", 12);

		if (count == 0){
			move ();
			count = 1;
		}
		else if (count == 1) {			
			moved ();
			count = 0;
		}
		function move (){
			if(ActB[Hod].innerHTML == "BP" && Hod >= 8 && Hod < 16){
				ActB[Hod].style.color = "gold";
				ActB[Hod - (-8)].innerHTML = "BP";
				ActB[Hod - (-8)].style.color = "gold";						
				ActB[Hod - (-16)].innerHTML = "BP";
				ActB[Hod - (-16)].style.color = "gold";
			}		
			if(ActB[Hod].innerHTML == "BP" && Hod >= 16){
				ActB[Hod].style.color = "gold";
				ActB[Hod - (-8)].innerHTML = "BP";
				ActB[Hod - (-8)].style.color = "gold";						
			}		
										
			if (ActB[Hod].innerHTML == "WP" && Hod >= 32 && Hod <= 63){
				if(ActB[Hod].innerHTML == "WP"){
					ActB[Hod].style.color = "gold";
					ActB[Hod - 8].style.color = "gold";	
					ActB[Hod - 8].innerHTML = "WP";	
					ActB[Hod - 16].style.color = "gold";	
					ActB[Hod - 16].innerHTML = "WP";
				}
			}
		}
		function moved () {
			if(ActB[Hod].innerHTML == "BP" && ActB[Hod].style.color == "gold"){
				ActB[Hod].style.color = "red";
				if (ActB[Hod - (-8)].innerHTML == "BP"){
					ActB[Hod - (-8)].style.color = "red";
					ActB[Hod - (-8)].innerHTML = "";
				}	
				if (ActB[Hod - 8].innerHTML == "BP"){
					ActB[Hod - 8].style.color = "red";
					ActB[Hod - 8].innerHTML = "";
				}
				if (ActB[Hod - 16].innerHTML == "BP"){
					ActB[Hod - 16].style.color = "red";
					ActB[Hod - 16].innerHTML = "";
				}
			}	
		}	
	};
}	

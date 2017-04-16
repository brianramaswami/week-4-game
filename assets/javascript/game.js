//INITIALIZE VARIABLES

var step = 1;
var current_character = "";
var current_defender = "";
var current_character_health;
var current_defender_health;
var number_enemies = 3;

//CHARACTER STATISTICS
var OBI_WAN_Base_Attack = 8;
var OBI_WAN_Attack = 8;
var OBI_WAN_Counter_Attack = 15;
var OBI_WAN_Health = 1200;

var luke_Base_Attack = 7;
var luke_Attack = 7;
var luke_Counter_Attack = 20;
var luke_Health = 100;

var darth_sidious_Base_Attack = 10;
var darth_sidious_Attack = 10
var darth_sidious_Counter_Attack = 20;
var darth_sidious_Health = 150;

var darth_maul_Base_Attack = 9;
var darth_maul_Attack = 9;
var darth_maul_Counter_Attack = 25;
var darth_maul_Health = 180;





//DEFINE FUNCTIONS
function place_enemy() {

	$(".OBI-WAN").click(function(){
		if (step == 2) {
			if (current_character != "OBI-WAN") {
				$(".OBI-WAN").appendTo(".defender");
		   		$('.OBI-WAN').css({'background':'black', 'border' : '3px solid green', 'color': 'white'});
		   		current_defender = "OBI-WAN";
		   		step =3;
		   		console.log("current step: " +  step);
			}
		}
	});

	$(".luke_Skywalker").click(function(){
		if (step == 2) {
			if (current_character != "luke_Skywalker") {
				$(".luke_Skywalker").appendTo(".defender");
			   	$('.luke_Skywalker').css({'background':'black', 'border' : '3px solid green', 'color': 'white'});
			   	current_defender = "luke_Skywalker";
			   	step = 3;
			   	console.log("current step: " +  step);
			}			
		}
	});

	$(".darth_sidious").click(function(){
		if (step == 2) {
			if (current_character != "darth_sidious") {
				$(".darth_sidious").appendTo(".defender");
		   		$('.darth_sidious').css({'background':'black', 'border' : '3px solid green', 'color': 'white'});
		   		current_defender = "darth_sidious";
		   		step = 3;			
		   		console.log("current step: " +  step);	
			}
		}
	});

	$(".darth_maul").click(function(){
		if (step == 2) {
			if (current_character != "darth_maul") {
				$(".darth_maul").appendTo(".defender");
		   		$('.darth_maul').css({'background':'black', 'border' : '3px solid green', 'color': 'white'});
		   		current_defender = "darth_maul";
		   		step = 3;
		   		console.log("current step: " +  step);
			}	
		}
	});	
	
	
}




	$("#button").click(function(){
		if (step == 3) {
			if (current_character == "OBI-WAN" && current_defender == "luke_Skywalker"){
					luke_Health =  luke_Health - OBI_WAN_Attack;
					current_defender_health = luke_Health;
					$("#lukeskywalker_health_points").text(luke_Health);
					didWin();
					OBI_WAN_Health = OBI_WAN_Health - luke_Counter_Attack;
					current_character_health = OBI_WAN_Health;
					$("#obi-wan_health_points").text(OBI_WAN_Health);
					didLose();
					OBI_WAN_Attack = OBI_WAN_Attack + OBI_WAN_Base_Attack;
				}

			if (current_character == "OBI-WAN" && current_defender == "darth_sidious"){
					darth_sidious_Health =  darth_sidious_Health - OBI_WAN_Attack;
					current_defender_health = darth_sidious_Health;
					$("#darth_sidious_health_points").text(darth_sidious_Health);
					didWin();
					OBI_WAN_Health = OBI_WAN_Health - luke_Counter_Attack;
					current_character_health = OBI_WAN_Health;
					$("#obi-wan_health_points").text(OBI_WAN_Health);
					didLose();
					OBI_WAN_Attack = OBI_WAN_Attack + OBI_WAN_Base_Attack;
				}

			if (current_character == "OBI-WAN" && current_defender == "darth_maul"){
					darth_maul_Health =  darth_maul_Health - OBI_WAN_Attack;
					current_defender_health = darth_maul_Health;
					$("#darth_maul_health_points").text(darth_maul_Health);
					didWin();
					OBI_WAN_Health = OBI_WAN_Health - luke_Counter_Attack;
					current_character_health = OBI_WAN_Health;
					$("#obi-wan_health_points").text(OBI_WAN_Health);
					didLose();
					OBI_WAN_Attack = OBI_WAN_Attack + OBI_WAN_Base_Attack;
				}

			if (current_character == "luke_Skywalker" && current_defender == "OBI-WAN"){
					OBI_WAN_Health =  OBI_WAN_Health - luke_Attack;
					current_defender_health = OBI_WAN_Health;
					$("#obi-wan_health_points").text(OBI_WAN_Health);
					didWin();
					luke_Health = luke_Health - OBI_WAN_Counter_Attack;
					current_character_health = luke_Health;
					$("#lukeskywalker_health_points").text(luke_Health);
					didLose();
					luke_Attack = luke_Attack + luke_Base_Attack;
				}

			if (current_character == "luke_Skywalker" && current_defender == "darth_maul"){
					darth_maul_Health =  darth_maul_Health - luke_Attack;
					current_defender_health = darth_maul_Health;
					$("#darth_maul_health_points").text(darth_maul_Health);
					didWin();
					luke_Health = luke_Health - darth_maul_Counter_Attack;
					current_character_health = luke_Health;
					$("#lukeskywalker_health_points").text(luke_Health);
					didLose();
					luke_Attack = luke_Attack + luke_Base_Attack;
				}			

			if (current_character == "luke_Skywalker" && current_defender == "darth_sidious"){
					darth_sidious_Health =  darth_sidious_Health - luke_Attack;
					current_defender_health = darth_sidious_Health;
					$("#darth_sidious_health_points").text(darth_sidious_Health);
					didWin();
					luke_Health = luke_Health - darth_sidious_Counter_Attack;
					current_character_health = luke_Health;
					$("#lukeskywalker_health_points").text(luke_Health);
					didLose();
					luke_Attack = luke_Attack + luke_Base_Attack;
				}

			if (current_character == "darth_sidious" && current_defender == "OBI-WAN"){
					OBI_WAN_Health =  OBI_WAN_Health - darth_sidious_Attack;
					current_defender_health = OBI_WAN_Health;
					$("#obi-wan_health_points").text(OBI_WAN_Health);
					didWin();
					darth_sidious_Health = darth_sidious_Health - OBI_WAN_Counter_Attack;
					current_character_health = darth_sidious_health_points;
					$("#darth_sidious_health_points").text(darth_sidious_Health);
					didLose();
					darth_sidious_Attack = darth_sidious_Attack + darth_sidious_Base_Attack;
				}	

			if (current_character == "darth_sidious" && current_defender == "luke_Skywalker"){
					luke_Health =  luke_Health - darth_sidious_Attack;
					current_defender_health = luke_Health;
					$("#lukeskywalker_health_points").text(luke_Health);
					didWin();
					darth_sidious_Health = darth_sidious_Health - luke_Counter_Attack;
					current_character_health = darth_sidious_health_points;
					$("#darth_sidious_health_points").text(darth_sidious_Health);
					didLose();
					darth_sidious_Attack = darth_sidious_Attack + darth_sidious_Base_Attack;
				}	

			if (current_character == "darth_sidious" && current_defender == "darth_maul"){
					darth_maul_Health =  darth_maul_Health - darth_sidious_Attack;
					current_defender_health = darth_maul_Health;
					$("#darth_maul_health_points").text(darth_maul_Health);
					didWin();
					darth_sidious_Health = darth_sidious_Health - darth_maul_Counter_Attack;
					current_character_health = darth_sidious_health_points;
					$("#darth_sidious_health_points").text(darth_sidious_Health);
					didLose();
					darth_sidious_Attack = darth_sidious_Attack + darth_sidious_Base_Attack;
				}	

			if (current_character == "darth_maul" && current_defender == "OBI-WAN"){
					OBI_WAN_Health =  OBI_WAN_Health - darth_maul_Attack;
					current_defender_health = OBI_WAN_Health;
					$("#obi-wan_health_points").text(OBI_WAN_Health);
					didWin();
					darth_maul_Health = darth_maul_Health - OBI_WAN_Counter_Attack;
					current_character_health = darth_sidious_health_points;
					$("#darth_maul_health_points").text(darth_maul_Health);
					didLose();
					darth_maul_Attack = darth_maul_Attack + darth_maul_Base_Attack;
				}	

			if (current_character == "darth_maul" && current_defender == "luke_Skywalker"){
					luke_Health =  luke_Health - darth_maul_Attack;
					current_defender_health = luke_Health;
					$("#lukeskywalker_health_points").text(luke_Health);
					didWin();
					darth_maul_Health = darth_maul_Health - luke_Counter_Attack;
					current_character_health = darth_sidious_health_points;
					$("#darth_maul_health_points").text(darth_maul_Health);
					didLose();
					darth_maul_Attack = darth_maul_Attack + darth_maul_Base_Attack;
				}	

			if (current_character == "darth_maul" && current_defender == "darth_sidious"){
					darth_sidious_Health =  darth_sidious_Health - darth_maul_Attack;
					current_defender_health = darth_sidious_Health;
					$("#darth_sidious_health_points").text(darth_sidious_Health);
					didWin();
					darth_maul_Health = darth_maul_Health - darth_sidious_Counter_Attack;
					current_character_health = darth_sidious_health_points;
					$("#darth_maul_health_points").text(darth_maul_Health);
					didLose();
					darth_maul_Attack = darth_maul_Attack + darth_maul_Base_Attack;
				}	





		}	

		
	});


function didWin() {
	console.log(current_defender_health);
	if (current_defender_health <= 0) {
		console.log("YOU Defeated " + current_defender);
		console.log(number_enemies);
		number_enemies--;
		console.log(number_enemies);
		$("." + current_defender).remove();
		$("#result_statement").text("You Defeated " + current_defender + ". Please Choose Another Enemy To Fight");
		if (number_enemies == 0) {
			$("#result_statement").text("You Won Click The Reset Button To Play Again!!");
			$("#button").hide();
			$("#button_reset").show();
		}
		step = 2;
		place_enemy();
	}
}

function didLose() {
console.log(current_character_health);
	if (current_character_health <= 0) {
		console.log("YOU are Defeated by " + current_defender);
		$("#result_statement").text("You are Defeated By " + current_defender);
		$("#button").hide();
		$("#button_reset").show();
	}	
}


$("#button_reset").click(function(){
	Reset();
});

function Reset() {
	// $("." + current_character).remove();
	$(".OBI-WAN").appendTo(".Characters");
	$(".luke_Skywalker").appendTo(".Characters");
	$(".darth_sidious").appendTo(".Characters");
	$(".darth_maul").appendTo(".Characters");
	$("#button").show();
	$("#button_reset").hide();
	$("#result_statement").text("");

	step = 1;
	current_character = "";
	current_defender = "";
	current_character_health;
	current_defender_health;
	number_enemies = 3;

	//CHARACTER STATISTICS
	OBI_WAN_Base_Attack = 8;
	OBI_WAN_Attack = 8;
	OBI_WAN_Counter_Attack = 15;
	OBI_WAN_Health = 1200;

	luke_Base_Attack = 7;
	luke_Attack = 7;
	luke_Counter_Attack = 20;
	luke_Health = 100;

	darth_sidious_Base_Attack = 10;
	darth_sidious_Attack = 10
	darth_sidious_Counter_Attack = 20;
	darth_sidious_Health = 150;

	darth_maul_Base_Attack = 9;
	darth_maul_Attack = 9;
	darth_maul_Counter_Attack = 25;
 	darth_maul_Health = 180;
 	$('.darth_sidious').css({'background':'white', 'border' : '3px solid green', 'color': 'black'});
 	$('.luke_Skywalker').css({'background':'white', 'border' : '3px solid green', 'color': 'black'});
 	$('.OBI-WAN').css({'background':'white', 'border' : '3px solid green', 'color': 'black'});
 	$('.darth_maul').css({'background':'white', 'border' : '3px solid green', 'color': 'black'});


 	$("#obi-wan_health_points").text(OBI_WAN_Health);
 	$("#lukeskywalker_health_points").text(luke_Health);
 	$("#darth_sidious_health_points").text(darth_sidious_Health);
 	$("#darth_maul_Health").text(darth_maul_Health);

 
}


function INITIALIZE() {
	$(".OBI-WAN").appendTo(".Characters");
	$(".luke_Skywalker").appendTo(".Characters");
	$(".darth_sidious").appendTo(".Characters");
	$(".darth_maul").appendTo(".Characters");
	$("#button").show();
	$("#button_reset").hide();

	step = 1;
	current_character = "";
	current_defender = "";
	current_character_health;
	current_defender_health;
	number_enemies = 3;

	//CHARACTER STATISTICS
	OBI_WAN_Base_Attack = 8;
	OBI_WAN_Attack = 8;
	OBI_WAN_Counter_Attack = 15;
	OBI_WAN_Health = 120;

	luke_Base_Attack = 7;
	luke_Attack = 7;
	luke_Counter_Attack = 20;
	luke_Health = 1000;

	darth_sidious_Base_Attack = 10;
	darth_sidious_Attack = 10
	darth_sidious_Counter_Attack = 20;
	darth_sidious_Health = 150;

	darth_maul_Base_Attack = 9;
	darth_maul_Attack = 9;
	darth_maul_Counter_Attack = 25;
 	darth_maul_Health = 180;
 	$("#obi-wan_health_points").text(OBI_WAN_Health);
 	$("#lukeskywalker_health_points").text(luke_Health);
 	$("#darth_sidious_health_points").text(darth_sidious_Health);
 	$("#darth_maul_Health").text(darth_maul_Health);
}














$(window).on('load',function() {
	INITIALIZE();
	
	    $(".OBI-WAN").click(function(){
	    	if (step == 1) {
		    	$(".OBI-WAN").appendTo(".your_character"); //position obi-wan
		    	 current_character  = "OBI-WAN";   // sets current character
		    	

		    	$(".luke_Skywalker").appendTo(".Enemies");
		    	$('.luke_Skywalker').css({'background':'red', 'border' : '3px solid black'});
		   	  	
		   	  	$(".darth_sidious").appendTo(".Enemies");
		   	  	$('.darth_sidious').css({'background':'red', 'border' : '3px solid black'});
		   	  	
		   	  	$(".darth_maul").appendTo(".Enemies");
		   	  	$('.darth_maul').css({'background':'red', 'border' : '3px solid black'});
		   	  	step = 2;
		   		console.log("current step: " +  step);
		   	}
		   	
		   	place_enemy();
		
		
		   	  	 
    	});


    	$(".luke_Skywalker").click(function(){
    		if (step == 1) {
	    		$(".luke_Skywalker").appendTo(".your_character"); //position obi-wan
				current_character  = "luke_Skywalker";

		    	$(".OBI-WAN").appendTo(".Enemies");
		    	$('.OBI-WAN').css({'background':'red', 'border' : '3px solid black'});
		   	  	
		   	  	$(".darth_sidious").appendTo(".Enemies");
		   	  	$('.darth_sidious').css({'background':'red', 'border' : '3px solid black'});
		   	  	
		   	  	$(".darth_maul").appendTo(".Enemies");
		   	  	$('.darth_maul').css({'background':'red', 'border' : '3px solid black'});	
				step = 2;
				console.log("current step: " +  step);	   	  	
    		}
		   	
		   	place_enemy();
		 

    	});

    	$(".darth_sidious").click(function(){
    		if (step == 1) {
	    		$(".darth_sidious").appendTo(".your_character"); //position obi-wan
	    		current_character  = "darth_sidious";

		    	$(".OBI-WAN").appendTo(".Enemies");
		    	$('.OBI-WAN').css({'background':'red', 'border' : '3px solid black'});
		   	  	
		   	  	$(".luke_Skywalker").appendTo(".Enemies");
		   	  	$('.luke_Skywalker').css({'background':'red', 'border' : '3px solid black'});
		   	  	
		   	  	$(".darth_maul").appendTo(".Enemies");
		   	  	$('.darth_maul').css({'background':'red', 'border' : '3px solid black'});
		   	  	step = 2;
		   	  	console.log("current step: " +  step);	
		   	}

		   	place_enemy();
		 
		   	
    	});

    	$(".darth_maul").click(function(){
    		if (step == 1) {	
	    		$(".darth_maul").appendTo(".your_character"); //position obi-wan
	    		current_character  = "darth_maul";

		    	$(".OBI-WAN").appendTo(".Enemies");
		    	$('.OBI-WAN').css({'background':'red', 'border' : '3px solid black'});
		   	  	
		   	  	$(".darth_sidious").appendTo(".Enemies");
		   	  	$('.darth_sidious').css({'background':'red', 'border' : '3px solid black'});
		   	  	
		   	  	$(".luke_Skywalker").appendTo(".Enemies");
		   	  	$('.luke_Skywalker').css({'background':'red', 'border' : '3px solid black'});	
		   	  	step = 2;
		   	  	console.log("current step: " +  step);
    		}

    		place_enemy();

    	});










});

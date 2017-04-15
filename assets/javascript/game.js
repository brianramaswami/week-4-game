//INITIALIZE VARIABLES

var step = 1;
var current_character = "";
var current_defender = "";

//CHARACTER STATISTICS
var OBI_WAN_Base_Attack = 8;
var OBI_WAN_Attack = 8;
var OBI_WAN_Counter_Attack = 15;
var OBI_WAN_Health = 120;

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
		if (current_character == "OBI-WAN" && current_defender == "luke_Skywalker"){
				alert("ITS WORKING");
				console.log("its WORKING");
				luke_Health =  luke_Health - OBI_WAN_Attack;
				console.log(luke_Health);
				$("#luke_Skywalker_health_points").text("<p> luke_Health </p>");
				//didWin();
				OBI_WAN_Health = OBI_WAN_Health - luke_Counter_Attack;
				$("#obi-wan_heath_points").html(OBI_WAN_Health);
				//didLose();
				OBI_WAN_Attack = OBI_WAN_Attack + OBI_WAN_Base_Attack;

			}
	});
























$(window).on('load',function() {

	
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

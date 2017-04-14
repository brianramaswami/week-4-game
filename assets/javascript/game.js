var step = 1;


$(window).on('load',function() {

	
	    $(".OBI-WAN").click(function(){
	    	if (step == 1) {
		    	$(".OBI-WAN").appendTo(".your_character"); //position obi-wan

		    	$(".luke_Skywalker").appendTo(".Enemies");
		    	$('.luke_Skywalker').css({'background':'red', 'border' : '5px solid black'});
		   	  	
		   	  	$(".darth_sidious").appendTo(".Enemies");
		   	  	$('.darth_sidious').css({'background':'red', 'border' : '5px solid black'});
		   	  	
		   	  	$(".darth_maul").appendTo(".Enemies");
		   	  	$('.darth_maul').css({'background':'red', 'border' : '5px solid black'});
		   	  	step = 2;
		   	}
		   	 
	    	
    	});

    	$(".luke_Skywalker").click(function(){
    		if (step == 1) {
	    		$(".luke_Skywalker").appendTo(".your_character"); //position obi-wan

		    	$(".OBI-WAN").appendTo(".Enemies");
		    	$('.OBI-WAN').css({'background':'red'});
		   	  	
		   	  	$(".darth_sidious").appendTo(".Enemies");
		   	  	$('.darth_sidious').css({'background':'red'});
		   	  	
		   	  	$(".darth_maul").appendTo(".Enemies");
		   	  	$('.darth_maul').css({'background':'red'});	
				step = 2;	   	  	
    		}
    	});

    	$(".darth_sidious").click(function(){
    		if (step == 1) {
	    		$(".darth_sidious").appendTo(".your_character"); //position obi-wan

		    	$(".OBI-WAN").appendTo(".Enemies");
		    	$('.OBI-WAN').css({'background':'red'});
		   	  	
		   	  	$(".luke_Skywalker").appendTo(".Enemies");
		   	  	$('.luke_Skywalker').css({'background':'red'});
		   	  	
		   	  	$(".darth_maul").appendTo(".Enemies");
		   	  	$('.darth_maul').css({'background':'red'});
		   	  	step = 2;	
		   	}
    	});

    	$(".darth_maul").click(function(){
    		if (step == 1) {	
	    		$(".darth_maul").appendTo(".your_character"); //position obi-wan

		    	$(".OBI-WAN").appendTo(".Enemies");
		    	$('.OBI-WAN').css({'background':'red'});
		   	  	
		   	  	$(".darth_sidious").appendTo(".Enemies");
		   	  	$('.darth_sidious').css({'background':'red'});
		   	  	
		   	  	$(".luke_Skywalker").appendTo(".Enemies");
		   	  	$('.luke_Skywalker').css({'background':'red'});	
		   	  	step = 2;
    		}
    	});








});

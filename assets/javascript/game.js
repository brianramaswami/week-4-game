

$(window).on('load',function() {
    $(".OBI-WAN").click(function(){
    	// $("#your_character").prependTo("your_character");
    	$(".OBI-WAN").appendTo(".your_character"); //position obi-wan
    	// $("#your_character").prependTo(".your_character");

    	$(".luke_Skywalker").appendTo(".Enemies");
   	  	$(".darth_sidious").appendTo(".Enemies");
   	  	$(".darth_maul").appendTo(".Enemies");
   	 
    	alert('should be working');
    });
});

$(document).ready(function(){
		
		function clear(){
			$(".results h3").empty();
    		$(".results ul").empty();
		}
		

		$("button").on("click",function(){	

		var username = $("input").val();
		if(username==""){
			alert("Please enter a username");
		}
		else{
		
		console.log(username);
		

		var res= $.ajax({
  		url: "https://api.github.com/users/"+username+"/repos",
  		jsonp: true,
  		method: "GET",
  		dataType: "json",
  		})

  		.done(function(res) {

  		var resultArray = res;
    	console.log(res)
    	clear();
    	
    	for (var i = 0; i <= res.length; i++) {
    		$(".results ul").append('<li><a href="https://github.com/'+username+'/'+resultArray[i].name+'">'+resultArray[i].name+'</a></li>');
    	}
    	})

    	.fail(function(){
    		clear();
    		$(".results h3").append('Username not found! Please recheck');
    	})
    	
    	
    	}

		});

	});
	

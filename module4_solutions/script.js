(function(window){



var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]

    for(var x =0; x<names.length ;x++){
    	
 	 var name=names[x];
 	 
 	 var firstletter = name.charAt(0);
 	 
 	 if ("J"=== firstletter) {
      byeSpeaker.speak(name)
   } else {
   	  helloSpeaker.speak(name)

  }
 	
 	}


})(window)



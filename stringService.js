myApp.factory('stringService',function(){
    return {
        processString:function(input){
             var output = "";
                  if(!input){
                      return input;
                  }
                  else{
                      for(var i=0;i<input.length;i++){
                          if(i>0&&input[i]==input[i].toUpperCase()){
                              output = output +" ";
                          }
                          output = output +input[i];
                      }
                  }
            return output;
        }
    };
});
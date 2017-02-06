exports.lengthOfLastWord = function(a){
       var str = a.split(" ");
       var lastWord ="";
       for(var i=str.length+1;i>=0;i--){
          if(str[i]){
            lastWord = str[i];
            break;
          }
       }
       return lastWord.length;
}

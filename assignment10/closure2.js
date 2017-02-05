exports.saveForLater = function(myName){
    var getName = function(){
        return myName;
    }
   return getName;
}

exports.executeLater = function(){
    return function() {
        return "Code executed";
    };
}
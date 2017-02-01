exports.sum = function(arr){
    var res = 0;
    for(var i =0;i<arr.length;i++){
        res += arr[i];
    }
    return res ;
}

exports.odds = function(arr){
    var arr2 = [];
    for(var i =0;i<arr.length;i++){
        if(arr[i] % 2 == 1 || arr[i] % 2 == -1){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

exports.find = function(arr,match){
    for(var i =0;i<arr.length;i++){
        if(match(arr[i])){
            return arr[i];
        }
    }
}

exports.match = function(v){
    return v === 50;
}

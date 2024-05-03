exports.add = function(x,y){
    return x+y;
};

exports.sub = function(x,y){
    return x-y;
};

exports.mult = function(x,y){
    return x*y;
};

exports.div = function(x,y){
    return x/y;
};

exports.fact = function(x){
    var fa=1;
    for(i=1;i<=x;i++){
        fa=fa*i;
    }
    return fa;
};


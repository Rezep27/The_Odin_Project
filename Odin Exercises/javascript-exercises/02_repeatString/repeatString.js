const repeatString = function(str, num) {
    let myStr = '';
    if (num < 0){
        return 'ERROR';
    }
    for (let i = 0 ; i < num; i++){
        myStr += str;
    }
    return myStr;
};

// Do not edit below this line
module.exports = repeatString;

const removeFromArray = function(/**/) {
    let funArgs = Array.from(arguments)
    targetArr = funArgs.shift();
    
    return targetArr.filter((num) => (!funArgs.includes(num)));
};

// Do not edit below this line
module.exports = removeFromArray;
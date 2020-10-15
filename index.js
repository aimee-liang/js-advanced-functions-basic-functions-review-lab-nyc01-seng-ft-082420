const saturdayFun = (str) => {
    if (!str) {
        return "This Saturday, I want to roller-skate!"
    } else {
        return `This Saturday, I want to ${str}!`
    }
}

saturdayFun();
saturdayFun("relax")

let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

mondayWork();
mondayWork("do something else")

let wrapAdjective = function(style = '*'){
    return function(adjective="wise"){
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = {
    add: function(a, b) {return a + b},
    subtract: function(a, b) {return a - b},
    multiply: function(a, b) {return a * b},
    divide: function(a, b) {return a / b}
}

const actionApplyer = (integer, array) => {
    if (array.length === 0){
        return integer
    } else {
        return 4
    }
}
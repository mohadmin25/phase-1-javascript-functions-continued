// code your solution here

function saturdayFun( roller = "roller-skate"){
    return `This Saturday, I want to ${roller}!`
 }

function mondayWork( office = 'go to the office'){
    return `This Monday, I will ${office}.`
 }
 let wrapAdjective = function (initial = "*"){
    return function (text = "mohadmin"){
        return `You are ${initial}${text}${initial}!`
    }
}
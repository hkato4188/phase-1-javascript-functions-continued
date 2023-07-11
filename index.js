// code your solution here
function saturdayFun(event='roller-skate'){
    return `This Saturday, I want to ${event}!`
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flairString="*"){
 return function(inParam="special"){
    return `You are ${flairString}${inParam}${flairString}!`
 }   
}
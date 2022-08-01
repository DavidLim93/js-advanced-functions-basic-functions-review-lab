// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(emphatic="*") {
    return function(adj="special") {
      return `You are ${emphatic }${adj}${emphatic}!`;
    }
  }


 const Calculator = {
add: function (a=1,b=3) {
    return a+b;
},
subtract: function(a=1, b=3) {
    return a-b;
  },
 multiply: function(a=1, b=3) {
    return a*b;
  },
 divide: function(a=10, b=5) {
    return a/b;
  }
}

function actionApplyer(start, fns) {
    for (let i = 0; i < fns.length; i++) {
      start = fns[i](start);
    }
    return start;
  }
  
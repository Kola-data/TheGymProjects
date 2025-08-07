const arr = [1, 2, 3, 4, 5];
const Operation = {
    sum: function sum(param) {
       return param.reduce((results, num) => results + num, 0)
    },
    avarage: function avg (param) {
        const sum = param.reduce((results, num) => results + num, 0);
        const avarage = sum / param.length;
        return avarage
    },
    min: function min (param) {
        return Math.min(...param);
    },
    max: function max (param) {
        return Math.max(...param);
    }
}
const arrayStats = (param) => {
    console.log(
      `The sum ${Operation.sum(param)} and here The avarage ${Operation.avarage(param)}
      Then minimum ${Operation.min(param)} Finally maximum ${Operation.max(param)}`
      )
      
}

arrayStats(arr);
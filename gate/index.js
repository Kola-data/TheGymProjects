let results = document.getElementById("results");
let btn = document.getElementById("btn");
let number = 0;

let hundleClick = (val) => {
    number += val;
    if(number <= 1){
        results.textContent = `Time: ${number}`;
    }else{
        results.textContent = `Times: ${number}`;
    }
}
// Exercise 1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["HAS","Max","PuRple","dog"]

let findWords = (d_string,d_names) =>{
    for(i =0; i< d_names.length; i++){
        if (d_string.indexOf(d_names[i]) !== -1){
            return "Matched dog_name"
        }else {
            console.log("no matches")
        }
    }

}; 
console.log(findWords(dog_string,dog_names))

// Exercise 2


let given_arr = [13, 22, 26, 40, 1, 10];

let replaceEvens = (arr) =>{
    let a_list = [];
    for(let i = 0; i < arr.length; i++){
    
    }if (arr[i]*2 < 50){
            a_list.push(arr[i])
        }   
}
console.log(replaceEvens(given_arr))





    // https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
function updateLight(current) {
    if (current == "green"){
        return "yellow"
    }if (current == "yellow"){
        return "red"
    }if (current == "red"){
        return "green"
    };
};
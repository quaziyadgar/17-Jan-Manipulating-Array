function manipulateArray(arr, mulBy4, add9){
    let x = mulBy4(arr);
    console.log("After multiplying each element by 4");
    display(x);
    let y = add9(arr);
    console.log("After adding 9 to each element");
    display(y);
}
function mulBy4(arr){
    let res = [];
    for(var i = 0 ; i < arr.length; i++){
        let x = arr[i] * 4; 
        res.push(x); 
      }
      return res;
}
function add9(arr){
    let res;
    for(var i = 0 ; i < arr.length; i++){
        let x = arr[i] + 9; 
        res.push(x);
      }
      return res;
}
function display(item){
    for(var i = 0 ; i < item.length; i++){
        console.log(item[i]);
      }
}
var a= [5,6,7,8,2,1];
manipulateArray(a, mulBy4(), add9());



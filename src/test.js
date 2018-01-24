//babel test.js -o dist/test2.js
function f(){
    return 1;
}
let x = do{
    let t = f();
    t * t + 1;
}
console.log(x);
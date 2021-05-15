// # JS Closures / Scoping exercises

// 1. What’s the result of executing this code and why.
function test() {
    const a = 1;

    console.log(a);
    console.log(foo());
    
    
    function foo() {
    return 2;
    }
}

test();
// undefined
// 2
// undefined because of the tricky var variable that has a global (dynamic) scope and is accessible everywhere
// we get undefined instead of an error that tells us you can't access the value before declaring it (what happens with const and let)
// if we move the declaration before the 1st console.log, we'll get:
// 1
// 2

// 2. What is result?

var a = 1; 

function someFunction(number) {
    function otherFunction(input) {
        return a;
    }

    a = 5;

   return otherFunction;
}
  
var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result);
// 5, functions don't do anything with the input, just returning the value of a which is reassigned in the outer function and accessed by the inner function
// the same with let keyword


// 3. What is the result of the following code? Explain your answer.

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
        return this.fullname;
    }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
// we get undefined, because test() can't access this. --> we have to bind it
const boundFunc = test.bind(obj);
console.log(boundFunc()); // returns Colin Ihrig


// 4. What will you see in the console for the following example?

var c = 1; 
function b() { 
    c = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(c);    
// 10 because even if a() and b() don't return anything when running, the canged value of c is than accessible after the function b() has been run

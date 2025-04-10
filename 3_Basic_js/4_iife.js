// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     console.log(`DB Connected`);
// });
// chai();


(function chai(){
    console.log(`DB Connected`);
    return "Function executed successfully!";
})();


(function code(){
    console.log('DB CONNECTED NEW')
})();



((name) => {
    console.log(`Db Connection Successful ${name}`);
})('Subho');



( (name) => {
    // Simple IIFE or Unnamed IIFE
    console.log(`${name} not connected`);
} )('Subho');
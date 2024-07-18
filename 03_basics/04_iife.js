// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log("DB CONNECTED");
})();
// chai function ko () isse represent kiya h bs
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ayush')
// global scope k pollution se problem hoti hai kai baar, unke variables ke pollution kio htane ke lie iife ka use krte hai




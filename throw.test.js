const myFunction = require("./throw");

test("throws error on invalid input",()=>{
    expect(()=>{
        myFunction("test")
    }).toThrow();
})
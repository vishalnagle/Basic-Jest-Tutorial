const fetchPromise = require("./promise");

test("The data is peanut butter",()=>{
    return expect(fetchPromise()).resolves.toBe("peanut butter");
})


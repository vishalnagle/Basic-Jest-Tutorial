test("object test",()=>{
    let obj = {one:1};
    obj["two"]=2;
    expect(obj).toEqual({one:1,two:2})
})
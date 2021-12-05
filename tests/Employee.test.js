// L2 describes name of tests/series of tests
describe("Employee", () => {
    // L3 is specific test we are trying to do
    describe("name", () => {
        //L6 description of test
      it("it should return a name", () => {
          
        const str = "Hello World!";
        const reversed = "!dlroW olleH";
  
        const result = new Algo().reverse(str);
  
        expect(result).toEqual(reversed);
      });
    });
});
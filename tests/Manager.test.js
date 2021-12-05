// L2 describes name of tests/series of tests
describe("Manager", () => {
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



{/* <script>
class Manager {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Manager {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
</script>

</body>
</html> */}

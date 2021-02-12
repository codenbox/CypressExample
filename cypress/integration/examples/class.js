class Animal {
    // setDetails(name, color) {
    //   this.name = name;
    //   this.color=color;
    // }

     constructor(name, color) {
          this.name = name;
          this.color=color;
        }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
      
    }

    display(){
        console.log(this.name, this.color)
    }
  }

  //let obj=new Animal();
  //obj.setDetails("dog", "white");
  let obj=new Animal("dog", "white");
  obj.display();
  obj.speak();

//create multiple objects for the same Animal class
let obj1=new Animal("cat", "black");
  obj1.display();
  obj1.speak();

let obj2=new Animal("horse", "red");
  obj2.display();
  obj2.speak();

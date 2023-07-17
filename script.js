//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age
  get age() {
    return this._age;
  }
}

// Student subclass extending Person
class Student extends Person {
  // Constructor is inherited from the Person class

  // Method specific to Student class
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher subclass extending Person
class Teacher extends Person {
  // Constructor is inherited from the Person class

  // Method specific to Teacher class
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

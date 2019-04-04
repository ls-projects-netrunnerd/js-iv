// Person

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.gender = obj.gender;
    this.location = obj.location;
  }

  speak() {
    return `Hello, my name is ${this.name} and I am from ${this.location}.`;
  }
}

// Instructor

class Instructor extends Person {
  constructor(obj) {
    super(obj); 

    this.specialty = obj.specialty;
    this.favLanaguage = obj.favLanguage;
    this.catchPrase = obj.catchPhrase;
  }

  shout() {
    return this.catchPrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

// ProjectManager

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);

    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}: @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code for ${subject}.`;
  }
}

// Student

class Student extends Person {
  constructor(obj) {
    super(obj);

    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }

  listSubjects() {
    return `${this.name}'s favorite subjects are: ${this.favSubjects.join(', ')}.`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a pull request for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun the sprint challenge on ${subject}.`;
  }
}


// school data... unencrypted.. oh noes

const instructor = new Instructor({
  name: 'Bob',
  age: 666,
  gender: null,
  location: 'Lambda School',
  specialty: 'C',
  favLanguage: 'C',
  catchPhrase: "COMMIT!"
});

const projectman = new ProjectManager({
  name: 'Bill',
  age: 31,
  gender: 'M',
  location: 'Oregon',
  specialty: 'x86 Assembly',
  favLanguage: 'x86 Assembly',
  catchPhrase: 'There\'s no place like 127.0.0.1.',
  gradClassName: 'CS2040',
  favInstructor: 'Bob'
});

const student = new Student({
  name: 'Ruby',
  age: 420,
  gender: 'M',
  location: '127.0.0.1',
  className: 'WEBPT5',
  previousBackground: 'manual labor',
  favSubjects: ['javascript', 'math', 'science']
});

// helper func

const rollcredits = (o, s) => {
  const s1 = 'JavaScript IV',
        s2 = 'JavaScript Fundamentals'
        el = '\n';

  let title = 'Student';

  if (o instanceof Instructor) title = 'Instructor';
  if (o instanceof ProjectManager) title = 'Project Manager';

  console.log(`// ${title}`);
  console.log(o);
  console.log(o.speak());

  if (o instanceof Instructor) {
    console.log(o.shout());
    console.log(o.demo(s1));
    console.log(o.grade(s, s2), o instanceof ProjectManager ? '' : el);
  }

  if (o instanceof ProjectManager) {
    console.log(o.standUp(`#webpt5_${o.name.toLowerCase()}`));
    console.log(o.debugsCode(s, s1), el);
  }

  if (o instanceof Student) {
    console.log(o.listSubjects());
    console.log(o.PRAssignment(s1));
    console.log(o.sprintChallenge(s2));
  }
}

// output

rollcredits(instructor, student);
rollcredits(projectman, student);
rollcredits(student);

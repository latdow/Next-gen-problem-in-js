const students = [
  {
    id: 1,
    name: "Amaka Okafor",
    age: 19,
    department: "Computer Science",
    level: 100,
    cgpa: 4.21,
    feesPaid: true,
    state: "Anambra",
  },
  {
    id: 2,
    name: "Tunde Bakare",
    age: 22,
    department: "Economics",
    level: 300,
    cgpa: 3.45,
    feesPaid: true,
    state: "Oyo",
  },
  {
    id: 3,
    name: "Ada Eze",
    age: 20,
    department: "Law",
    level: 200,
    cgpa: 4.68,
    feesPaid: false,
    state: "Enugu",
  },
  {
    id: 4,
    name: "Chinedu Obi",
    age: 21,
    department: "Mechanical Engineering",
    level: 300,
    cgpa: 2.98,
    feesPaid: true,
    state: "Imo",
  },
  {
    id: 5,
    name: "Fatima Bello",
    age: 18,
    department: "Mass Communication",
    level: 100,
    cgpa: 3.77,
    feesPaid: false,
    state: "Kano",
  },
  {
    id: 6,
    name: "Emeka Nwosu",
    age: 23,
    department: "Accounting",
    level: 400,
    cgpa: 3.12,
    feesPaid: true,
    state: "Abia",
  },
  {
    id: 7,
    name: "Zainab Yusuf",
    age: 20,
    department: "Biochemistry",
    level: 200,
    cgpa: 4.05,
    feesPaid: true,
    state: "Kaduna",
  },
  {
    id: 8,
    name: "Segun Adeyemi",
    age: 24,
    department: "Computer Science",
    level: 400,
    cgpa: 3.88,
    feesPaid: false,
    state: "Lagos",
  },
  {
    id: 9,
    name: "Ngozi Okeke",
    age: 19,
    department: "Law",
    level: 100,
    cgpa: 4.92,
    feesPaid: true,
    state: "Enugu",
  },
  {
    id: 10,
    name: "Ibrahim Musa",
    age: 21,
    department: "Economics",
    level: 300,
    cgpa: 2.75,
    feesPaid: true,
    state: "Sokoto",
  },
  {
    id: 11,
    name: "Blessing Eke",
    age: 22,
    department: "Mass Communication",
    level: 300,
    cgpa: 3.5,
    feesPaid: false,
    state: "Rivers",
  },
  {
    id: 12,
    name: "Yusuf Aliyu",
    age: 20,
    department: "Mechanical Engineering",
    level: 200,
    cgpa: 3.33,
    feesPaid: true,
    state: "Niger",
  },
  {
    id: 13,
    name: "Chioma Nnaji",
    age: 18,
    department: "Biochemistry",
    level: 100,
    cgpa: 4.4,
    feesPaid: true,
    state: "Anambra",
  },
  {
    id: 14,
    name: "David Ojo",
    age: 23,
    department: "Accounting",
    level: 400,
    cgpa: 3.95,
    feesPaid: false,
    state: "Ondo",
  },
  {
    id: 15,
    name: "Hauwa Sani",
    age: 19,
    department: "Computer Science",
    level: 100,
    cgpa: 4.15,
    feesPaid: true,
    state: "Borno",
  },
  {
    id: 16,
    name: "Kelechi Umeh",
    age: 21,
    department: "Law",
    level: 300,
    cgpa: 3.6,
    feesPaid: true,
    state: "Imo",
  },
  {
    id: 17,
    name: "Tobi Ade",
    age: 20,
    department: "Economics",
    level: 200,
    cgpa: 2.5,
    feesPaid: false,
    state: "Ogun",
  },
  {
    id: 18,
    name: "Maryam Idris",
    age: 22,
    department: "Biochemistry",
    level: 400,
    cgpa: 4.55,
    feesPaid: true,
    state: "Kano",
  },
  {
    id: 19,
    name: "Obinna Eze",
    age: 19,
    department: "Mechanical Engineering",
    level: 100,
    cgpa: 3.05,
    feesPaid: true,
    state: "Enugu",
  },
  {
    id: 20,
    name: "Funke Bello",
    age: 21,
    department: "Mass Communication",
    level: 300,
    cgpa: 4.3,
    feesPaid: true,
    state: "Oyo",
  },
];

// For of when we only need the students name we do not care about index (i.e position)
for (const student of students) {
  console.log(student.name, student.cgpa);
}

// Another test
// Manual count

let paidCount = 0;
for (const student of students) {
  if (student.feesPaid !== true) {
    paidCount++;
  }
}

console.log(`Student's who fees is not paid: ${paidCount}`);

/*let distinction = 4.5;
for (const student of students) {
  if (students.cgpa >= distinction) {
    console.log(`first class students`);
  } else {
    console.log(`Not a first class student`);
  }*/
let numOFirstclass = 0;
for (const student of students) {
  if (student.cgpa >= 4.5) {
    numOFirstclass++;
  }
}
console.log(`${numOFirstclass} students graduated with first class honours.🙌`);

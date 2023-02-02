import logo from './logo.svg';
import './App.css';

function App() {
    const classe = {
      nom : "1ere",
      niveau : "1",
    };
    const newClasse = {
      ...classe,
      email: 'esprit2223-4WTIN'
    };
    console.log(newClasse);
    const users = [
      {name : 'mohamed', age : 2},
      {name : 'ahmed', age : 21},
      {name : 'ali', age : 22},
      {name : 'mohamed', age : 23}
    ];
   
const longestChar = users.reduce((acc, curr) => {
  return curr.name > acc.name ? curr : acc;
}, { name: '', length: 0 });

console.log(`The longest character in the list is: ${longestChar.name}`);
    const TestAdulte = users.map(person =>
       person.age > 18 ? (`${person.name} est adulte `) :
      ( `${person.name} est mineur `)
     );
    console.log(TestAdulte);

      const input = [
          ["a", "b", "f"],
          ["b", "b", "c"],
          ["a", "b", "c"],
      ]
      const countOccurrences = input
      .flat()
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
    
    console.log(countOccurrences);
    const students = [
      { name: "John", grade: 60 },
      { name: "Jane", grade: 40 },
      { name: "Jim", grade: 80 },
      { name: "Janet", grade: 45 }
    ];
    
    const total = students
      .map(student => {
        if (student.grade < 50) {
          student.grade += 15;
        }
        return student;
      })
      .filter(student => student.grade >= 50)
      .reduce((acc, curr) => acc + curr.grade, 0);
    
    console.log("total  "+total);
    let nextId = 1;
const Tab = [
  { name: "John", age: 30, city: "Paris" },
  { name: "Jane", age: 25, city: "London" },
  { name: "Jim", age: 35, city: "Berlin" }
];

// Adding new entries using push method
Tab.push({ name: "Janet", age: 28, city: "Rome" });
Tab.push({ name: "Jessica", age: 32, city: "Madrid" });

// Adding new entries using unshift method
Tab.unshift({ name: "James", age: 26, city: "New York" });
Tab.unshift({ name: "Jacob", age: 29, city: "Toronto" });

// Adding ID property to each object in the array
Tab.forEach(obj => {
  obj.ID = nextId;
  nextId++;
});

console.log(Tab);
const Search = require("./Ecmascript/fonction.js");

const result2 = Search(Tab, 2);

console.log("ress "+result2.name);





  return (
    <div className="App">
      {TestAdulte}
    </div>
  );
}

export default App;

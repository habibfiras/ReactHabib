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
    const TestAdulte = users.map(person =>
       person.age > 18 ? (`${person.name} est adulte `+"\n") :
      ( `${person.name} est mineur `+"\n")
     );
    console.log(TestAdulte);
  
  return (
    <div className="App">
      {TestAdulte}
    </div>
  );
}

export default App;

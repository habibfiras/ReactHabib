// fonction.js
const Tab = [
    { name: "John", age: 30, city: "Paris", ID: 1 },
    { name: "Jane", age: 25, city: "London", ID: 2 },
    { name: "Jim", age: 35, city: "Berlin", ID: 3 },
    { name: "Janet", age: 28, city: "Rome", ID: 4 },
    { name: "Jessica", age: 32, city: "Madrid", ID: 5 }
  ];
  
  const Search = (Tab, id) => {
    return Tab.find(obj => obj.ID === id);
  };
  
  module.exports = Search;
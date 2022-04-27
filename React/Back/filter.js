module.exports=function filter(){
let json=require('./output.json')
console.log
const uniques = json
  .map((item) => item.category)
  .filter((value, index, self) => self.indexOf(value) === index);
  return uniques;
}


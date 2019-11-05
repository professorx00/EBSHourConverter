const fs = require('fs');
let final=[]
fs.readFile('./input.csv', 'utf8', (err, data) => {
  if (err) throw err;
  let lines = data.split("\r\n")
  let table = lines.map(ele=>ele.split(","))
  for(let x=1;x<table.length;x++){
    final.push(`${table[x][2]},${table[x][5]},${table[x][3]},1`)
    final.push(`${table[x][2]},${table[x][5]},${table[x][4]},2`)
  }
  fs.appendFile('./output.csv',final.join("\n"),'ascii',(err)=>{
    if (err) console.log(err);
    console.log("Completed")
  })
});

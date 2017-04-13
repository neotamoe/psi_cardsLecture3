var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

var bonusCal = function(emp){
  var bonusArr = [emp[0]];
  var bonus = 0;
  if (emp[1].length === 4) {  //check employee # length (4 digits means long tenure)
    bonus += 0.05;  //bonus to employees with long tenure at company
  }

  switch (emp[3]) {
    case 1:  //review rating=1, no bonus
    case 2:  //review rating=2, no bonus
      bonus = 0;
      break;
    case 3:  //review rating=3, bonus 4%
      bonus += 0.04;
      break;
    case 4:  //review rating=4, bonus 6%
      bonus += 0.06;
      break;
    case 5:  //review rating=5, bonus 10%
      bonus += 0.1;
      break;
  }

  if (parseFloat(emp[2]) > 65000) {  //decrease bonus by 1% if salary >65K
    bonus -= 0.01;
  }
//capping bonus between 0-13%
  if (bonus > 0.13) {
    bonus = 0.13;
  }
  if (bonus < 0) {
    bonus = 0;
  }
//pushing data to new array
bonusArr.push(bonus);  //bonus amount in percentage
bonusArr.push((parseFloat(emp[2]) * (1 + bonus)).toFixed(2));  //new salary amount including bonus
bonusArr.push(Math.round(parseFloat(emp[2]) * bonus));  //total bonus amount in dollars
return bonusArr;
};

for (var i = 0; i < employees.length; i++) {
  console.log(bonusCal(employees[i]));
}

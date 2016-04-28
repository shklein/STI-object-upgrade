function person (name, empID, annualSalary, revRating) {
  this.name = name,
  this.empID = empID,
  this.annualSalary = annualSalary,
  this.revRating = revRating
};



var atticus = new person ('Atticus', '2405','47000', 3);
var jem = new person ('Jem', '62374','63500', 4);
var boo = new person ('Boo', '11435', '54000', 3);
var scout = new person ('Scout', '6243', '74750', 5);  


var employees = [atticus, jem, boo, scout];

function findBonus(employee) {
var array = [];
var rating = employee.revRating;
var bonusPercent = 0;
var salary = parseInt(employee.annualSalary);
var bonusAmount = 0;

    array[0] = employee.name;

    switch (rating) {
      case 3:
        bonusPercent = .04;
        break;
      case 4:
        bonusPercent = .06;
        break;
      case 5:
        bonusPercent = .1;
        break;
      default:
        bonusPercent = 0;
        break;
    }

    if(employee.empID.length == 4){
      bonusPercent += .05;
    }

    if(this.annualSalary > 65000){
      bonusPercent -= .01;
    }

    if(bonusPercent > .13) {
      bonusPercent = .13;
    }

    array[1] = bonusPercent;

    bonusAmount = salary * bonusPercent;

    array[2] = salary + bonusAmount;

    array[3] = Math.round(bonusAmount);

    return array;
}


for (var i = 0; i<employees.length; i++){

  var face = findBonus(employees[i]);

  console.log(face);

};

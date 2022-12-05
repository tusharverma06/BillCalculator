
let billTotal = document.getElementById('billTotalInput')
let tipAmount = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')



let numberOfPeople = Number(numberOfPeopleDiv.innerText)



const calculateBill = () => {
  
  let bill = Number(billTotal.value);


  let tip = Number(tipAmount.value)/100
if(tipAmount.value > 100){
  alert ('You can not go above 100')
}
  
  let totalTip = tip * bill

  
  
let total = bill + totalTip

let perPersonTotal = total/numberOfPeople


perPersonTotalDiv.innerText = `₹${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {

numberOfPeople += 1

numberOfPeopleDiv.innerText = numberOfPeople

  
calculateBill()
}


const decreasePeople = () => {

if(numberOfPeople <= 1){
  alert ('Hey! You can not go below 1')
}
  
  
numberOfPeople -= 1




numberOfPeopleDiv.innerText = numberOfPeople

 
calculateBill()
}
let currentDayE1=moment().format('LLLL');
$("#currentDay").text(currentDayE1);
let containerE1=$(".container");
let currentTimeE1=moment().hour();
var Hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveBtn = document.querySelectorAll(".saveBtn");
console.log(currentDayE1);



for (var i = 0; i < 9; i++) {
  if (currentDayE1 === Hour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("present");
  }
  if (currentDayE1 > Hour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("past");
  }
  if (currentDayE1 < Hour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("future");
  }
}

  // accessing key name according to id + repop. data from local storage
  if(localStorage.getItem(i)){
      document.getElementById(i).value = localStorage.getItem(i);
  }

  saveBtn[i].addEventListener("click",function(){
    var id = this.getAttribute("data-id");
    var text = document.getElementById(id).value;
     localStorage.setItem(id,text);
    console.log(text);
})





    
    
    
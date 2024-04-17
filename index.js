const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent =  count;
};
let list1 = "subhanallah : Tasbih Arabic: تَسْبِيح tasbīḥ is a form of dhikr that involves the glorification of God in Islam by saying: Subhan Allah سُبْحَانَ ٱللَّٰهِ; lit. Glory be to Allah";
document.getElementById("list1").onclick = function () {
  document.getElementById("myh3").textContent = list1;
};
var element = document.getElementById("myh3");
element.style.color = "white";
element.style.textAlign = "center";

let list2 = "Alhamdullillah";
document.getElementById("list2").onclick = function () {
  document.getElementById("myh33").textContent = list2;
};
var element = document.getElementById("myh33");
element.style.color = "white";
element.style.textAlign = "center";

let list3 = "Allahu Akbar";
document.getElementById("list3").onclick = function () {
  document.getElementById("myh333").textContent = list3;
};
var element = document.getElementById("myh333");
element.style.color = "white";
element.style.textAlign = "center";

let list4 =
  "la illaha ilallah wahadahu laa sharikhallah lahul mulik walahul hamd yuhuyii wayumit  lahul mulik walahul hamd yuhuyii wayumit wahuwa Allah kuli shaihin qadeer";
document.getElementById("list4").onclick = function () {
  document.getElementById("myh3333").textContent = list4;
};
var element = document.getElementById("myh3333");
element.style.color = "white";
element.style.textAlign = "center";


let radius;
document.getElementById("mysubmit").onclick = function() {
    radius = document.getElementById(`mytext`).value;
    radius = String(radius);
    document.getElementById("myh33333").textContent = radius
}
var element = document.getElementById("myh33333");
element.style.color = "white";
element.style.textAlign = "center";
const userInput = document.getElementById("date");
const btn = document.getElementById("btn-calculator");
userInput.max = new Date().toISOString().split("T")[0]; //Change the maximum date to today
const result = document.getElementById("result");
function calculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let y3, m3, d3;

  y3 = y2 - y1;

  // Calculate months
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  // Calculate days
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }


  if(m3 < 0){
    m3 = 12;
    y3--;
  }
  console.log(y3, m3, d3)
  result.innerHTML = `You are <span>${y3}</span>  years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

btn.addEventListener("click", calculateAge);

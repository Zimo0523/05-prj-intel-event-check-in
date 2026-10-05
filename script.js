let totalAttendees = 0;

let waterCount = 0;
let zeroCount = 0;
let powerCount = 0;

const attendanceGoal = 50;

const checkInForm = document.getElementById("checkInForm");

checkInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("attendeeName").value;
  const team = document.getElementById("teamSelect").value;

  totalAttendees++;

  const progressPercentage = (totalAttendees / attendanceGoal) * 100;

  document.getElementById("attendeeCount").textContent = totalAttendees;
  document.getElementById("progressBar").style.width = progressPercentage + "%";

  if (team === "water") {
    waterCount++;
    document.getElementById("waterCount").textContent = waterCount;
  } else if (team === "zero") {
    zeroCount++;
    document.getElementById("zeroCount").textContent = zeroCount;
  } else if (team === "power") {
    powerCount++;
    document.getElementById("powerCount").textContent = powerCount;
  }

  let teamName = "";

  if (team === "water") {
    teamName = "Team Water Wise";
  } else if (team === "zero") {
    teamName = "Team Net Zero";
  } else if (team === "power") {
    teamName = "Team Renewables";
  }

  document.getElementById("greeting").textContent =
    "🎉 Welcome, " + name + " from " + teamName + "!";

  document.getElementById("greeting").style.display = "block";
  document.getElementById("greeting").classList.add("success-message");
  document.getElementById("greeting").classList.add("celebrate");

  setTimeout(function () {
    document.getElementById("greeting").classList.remove("celebrate");
  }, 500);

  checkInForm.reset();
});

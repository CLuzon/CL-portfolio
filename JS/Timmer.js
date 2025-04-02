let today = new Date();
let targetDate = new Date("2025-05-01T00:00:00Z");
let timeDiff = targetDate - today;

let dayLefts = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

document.getElementById("date").textContent = `"残り${dayLefts}日"`;
document.getElementById("date").style.color = "pink";
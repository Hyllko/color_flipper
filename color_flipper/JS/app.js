const colors = [
	"#E1B12C",
	"#353B48",
	"#E84118",
	"#F15025",
	"#0097E6",
	"#DCDDE1",
	"#4CD137",
	"#FF793F",
	"#2C2C54",
	"#218C74",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

let getRandomNumber = () => {
	return Math.floor(Math.random() * colors.length);
};

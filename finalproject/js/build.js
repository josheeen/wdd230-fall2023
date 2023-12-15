const requestURL =
	"build-data/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject); // temporary checking for valid response and data parsin
		const builds = jsonObject["builds"];
		builds.forEach(displayBuilds);
	});

function displayBuilds(build) {
	let card = document.createElement("section");
	let name = document.createElement("h2");
	let builds = document.createElement("h4");
	let tag = document.createElement("h4");
	let buildimg = document.createElement("img");
	let services = document.createElement("p");
	let cpu = document.createElement("p");
	let wifi = document.createElement("p");

	name.textContent = `${build.name}`;
	builds.textContent = `BUILD: ${build.type} `;
	tag.textContent = `TAGS: ${build.tags} `;
	services.textContent = `SERVICES: ${build.services} `;
	cpu.textContent = `CPU: ${build.cpus}`;
	wifi.textContent = `Wifi Ready: ${build.wifis}`;

	// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
	buildimg.setAttribute("src", build.imageurl);
	buildimg.setAttribute("alt", `Image of ${build.name}`);
	buildimg.setAttribute("loading", "lazy");

	// Add/append the section(card) with the h2 element
	card.appendChild(buildimg);
	card.appendChild(name);
	card.appendChild(builds);
	card.appendChild(tag);
	card.appendChild(cpu);
	card.appendChild(wifi);
	card.appendChild(services);

	// Add/append the existing HTML div with the cards class with the section(card)
	cards.appendChild(card);
}

// Card review
let cardView = function () {
	document.querySelector(".cards").classList.remove("listV");
	document.querySelector(".cards").classList.add("cardV");
};

let listView = function () {
	document.querySelector(".cards").classList.add("listV");
	document.querySelector(".cards").classList.remove("cardV");
};

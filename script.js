 // Planet data with gravity values (compared to Earth's 9.8 m/s²)
const planets = {
	mercury: {
		name: 'Mercury',
		gravity: 3.7,
		description: 'Mercury is the smallest planet in our solar system and closest to the Sun. It has extreme temperatures and a very thin atmosphere.',
		image: './images/mercury.svg'
	},
	venus: {
		name: 'Venus',
		gravity: 8.87,
		description: 'Venus is the hottest planet in our solar system with a thick atmosphere composed mainly of carbon dioxide. Its surface temperature can reach 465°C.',
		image: './images/venus.svg'
	},
	earth: {
		name: 'Earth',
		gravity: 9.8,
		description: 'Earth is our home planet and the only known planet to support life. It has a diverse range of ecosystems and perfect conditions for living organisms.',
		image: './images/earth.svg'
	},
	mars: {
		name: 'Mars',
		gravity: 3.71,
		description: 'Mars is known as the Red Planet due to its reddish appearance caused by iron oxide. It is a cold desert planet with a thin atmosphere.',
		image: './images/mars.svg'
	},
	jupiter: {
		name: 'Jupiter',
		gravity: 24.79,
		description: 'Jupiter is the largest planet in our solar system. It is a gas giant with a Great Red Spot storm that has been raging for hundreds of years.',
		image: './images/jupiter.svg'
	},
	saturn: {
		name: 'Saturn',
		gravity: 10.44,
		description: 'Saturn is famous for its spectacular ring system. It is the second-largest planet and is also a gas giant with many moons.',
		image: './images/saturn.svg'
	},
	uranus: {
		name: 'Uranus',
		gravity: 8.69,
		description: 'Uranus is an ice giant that rotates on its side. It has a blue-green color due to methane in its atmosphere and a system of faint rings.',
		image: './images/uranus.svg'
	},
	neptune: {
		name: 'Neptune',
		gravity: 11.15,
		description: 'Neptune is the farthest planet from the Sun in our solar system. It is a deep blue ice giant with the strongest winds of any planet.',
		image: './images/neptune.svg'
	}
};

// DOM elements
const massInput = document.getElementById('mass');
const planetSelect = document.getElementById('planets');
const calculateBtn = document.getElementById('calculateBtn');
const planetImage = document.getElementById('planetImage');
const planetName = document.getElementById('planetName');
const planetInfo = document.getElementById('planetInfo');
const weightResult = document.getElementById('weightResult');

// Event listeners
calculateBtn.addEventListener('click', calculateWeight);
planetSelect.addEventListener('change', updatePlanetDisplay);

// Calculate weight function
function calculateWeight() {
	const mass = parseFloat(massInput.value);
	const selectedPlanet = planetSelect.value;

	// Validation
	if (!mass || mass <= 0) {
		alert('Please enter a valid mass in kilograms');
		return;
	}

	if (selectedPlanet === 'none') {
		alert('Please select a planet');
		return;
	}

	// Get selected planet data
	const planet = planets[selectedPlanet];
	const weight = mass * planet.gravity;

	// Display result
	weightResult.textContent = `Weight on ${planet.name}: ${weight.toFixed(2)} N (Newtons)`;
	weightResult.style.display = 'block';
}

// Update planet display when selection changes
function updatePlanetDisplay() {
	const selectedPlanet = planetSelect.value;

	if (selectedPlanet === 'none') {
		planetImage.src = './images/earth.svg';
		planetName.textContent = '';
		planetInfo.textContent = '';
		weightResult.textContent = '';
		return;
	}

	const planet = planets[selectedPlanet];

	// Update image
	planetImage.src = planet.image;
	planetImage.alt = planet.name;

	// Update description
	planetName.textContent = planet.name;
	planetInfo.textContent = planet.description;

	// Clear previous result
	weightResult.textContent = '';
}

// Initialize with Earth on page load
window.addEventListener('DOMContentLoaded', function() {
	planetSelect.value = 'earth';
	updatePlanetDisplay();
});

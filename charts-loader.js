        // defining country names w/o using Google API map keys
		
		let currentSelectedContinent = 'all'; // Default to 'all' for the world view
		
		const countryNames = {
		  "AL": "Albania",
		  "DZ": "Algeria",
		  "AO": "Angola",
		  "AG": "Antigua and Barbuda",
		  "AR": "Argentina",
		  "AU": "Australia",
		  "BS": "Bahamas",
		  "BH": "Bahrain",
		  "BD": "Bangladesh",
		  "BB": "Barbados",
		  "BE": "Belgium",
		  "BA": "Bosnia and Herzegovina",
		  "BR": "Brazil",
		  "BZ": "Belize",
		  "SB": "Solomon Islands",
		  "VG": "British Virgin Islands",
		  "BN": "Brunei",
		  "BG": "Bulgaria",
		  "MM": "Myanmar",
		  "KH": "Cambodia",
		  "CM": "Cameroon",
		  "CA": "Canada",
		  "CV": "Cape Verde",
		  "LK": "Sri Lanka",
		  "CL": "Chile",
		  "CN": "China",
		  "TW": "Taiwan",
		  "CO": "Colombia",
		  "CG": "Congo - Brazzaville",
		  "CD": "Congo - Kinshasa",
		  "CR": "Costa Rica",
		  "HR": "Croatia",
		  "CU": "Cuba",
		  "CY": "Cyprus",
		  "BJ": "Benin",
		  "DK": "Denmark",
		  "DO": "Dominican Republic",
		  "EC": "Ecuador",
		  "GQ": "Equatorial Guinea",
		  "ER": "Eritrea",
		  "EE": "Estonia",
		  "FJ": "Fiji",
		  "FI": "Finland",
		  "FR": "France",
		  "DJ": "Djibouti",
		  "GA": "Gabon",
		  "GE": "Georgia",
		  "GH": "Ghana",
		  "GR": "Greece",
		  "GL": "Greenland",
		  "GD": "Grenada",
		  "GT": "Guatemala",
		  "GN": "Guinea",
		  "GY": "Guyana",
		  "HT": "Haiti",
		  "HN": "Honduras",
		  "HK": "Hong Kong SAR China",
		  "IS": "Iceland",
		  "IN": "India",
		  "ID": "Indonesia",
		  "IR": "Iran",
		  "IQ": "Iraq",
		  "IE": "Ireland",
		  "IL": "Israel",
		  "IT": "Italy",
		  "CI": "Ivory Coast",
		  "JM": "Jamaica",
		  "JP": "Japan",
		  "KE": "Kenya",
		  "KP": "North Korea",
		  "KR": "South Korea",
		  "KW": "Kuwait",
		  "LB": "Lebanon",
		  "LV": "Latvia",
		  "LR": "Liberia",
		  "LY": "Libya",
		  "LT": "Lithuania",
		  "MO": "Macao SAR China",
		  "MG": "Madagascar",
		  "MY": "Malaysia",
		  "MT": "Malta",
		  "MR": "Mauritania",
		  "MU": "Mauritius",
		  "MX": "Mexico",
		  "ME": "Montenegro",
		  "MA": "Morocco",
		  "MZ": "Mozambique",
		  "OM": "Oman",
		  "NA": "Namibia",
		  "NL": "Netherlands",
		  "CW": "Curaçao",
		  "VU": "Vanuatu",
		  "NZ": "New Zealand",
		  "NI": "Nicaragua",
		  "NG": "Nigeria",
		  "NO": "Norway",
		  "FM": "Federated States of Micronesia",
		  "PK": "Pakistan",
		  "PA": "Panama",
		  "PG": "Papua New Guinea",
		  "PE": "Peru",
		  "PH": "Philippines",
		  "PL": "Poland",
		  "PT": "Portugal",
		  "TL": "Timor-Leste",
		  "QA": "Qatar",
		  "RO": "Romania",
		  "RU": "Russia",
		  "LC": "Saint Lucia",
		  "VC": "Saint Vincent and the Grenadines",
		  "SA": "Saudi Arabia",
		  "SN": "Senegal",
		  "SL": "Sierra Leone",
		  "SG": "Singapore",
		  "VN": "Vietnam",
		  "SI": "Slovenia",
		  "SO": "Somalia",
		  "ZA": "South Africa",
		  "ES": "Spain",
		  "SD": "Sudan",
		  "SR": "Suriname",
		  "SE": "Sweden",
		  "SY": "Syria",
		  "TH": "Thailand",
		  "TG": "Togo",
		  "TT": "Trinidad and Tobago",
		  "AE": "United Arab Emirates",
		  "TN": "Tunisia",
		  "TR": "Turkey",
		  "UA": "Ukraine",
		  "EG": "Egypt",
		  "GB": "United Kingdom",
		  "TZ": "Tanzania",
		  "US": "United States",
		  "UY": "Uruguay",
		  "VE": "Venezuela",
		  "YE": "Yemen",
		  "DE": "Germany"
		};
		
		
		const countryContinents = {
		  "AL": "Europe",
		  "DZ": "Africa",
		  "AO": "Africa",
		  "AG": "Caribbean",
		  "AR": "South America",
		  "AU": "Oceania",
		  "BS": "Caribbean",
		  "BH": "Asia",
		  "BD": "Asia",
		  "BB": "Caribbean",
		  "BE": "Europe",
		  "BA": "Europe",
		  "BR": "South America",
		  "BZ": "Central America",
		  "SB": "Oceania",
		  "VG": "Caribbean",
		  "BN": "Asia",
		  "BG": "Europe",
		  "MM": "Asia",
		  "KH": "Asia",
		  "CM": "Africa",
		  "CA": "North America",
		  "CV": "Africa",
		  "LK": "Asia",
		  "CL": "South America",
		  "CN": "Asia",
		  "TW": "Asia",
		  "CO": "South America",
		  "CG": "Africa",
		  "CD": "Africa",
		  "CR": "Central America",
		  "HR": "Europe",
		  "CU": "Caribbean",
		  "CY": "Europe",
		  "BJ": "Africa",
		  "DK": "Europe",
		  "DO": "Caribbean",
		  "EC": "South America",
		  "GQ": "Africa",
		  "ER": "Africa",
		  "EE": "Europe",
		  "FJ": "Oceania",
		  "FI": "Europe",
		  "FR": "Europe",
		  "DJ": "Africa",
		  "GA": "Africa",
		  "GE": "Europe",
		  "GH": "Africa",
		  "GR": "Europe",
		  "GL": "Europe",
		  "GD": "Caribbean",
		  "GT": "Central America",
		  "GN": "Africa",
		  "GY": "South America",
		  "HT": "Caribbean",
		  "HN": "Central America",
		  "HK": "Asia",
		  "IS": "Europe",
		  "IN": "Asia",
		  "ID": "Asia",
		  "IR": "Asia",
		  "IQ": "Asia",
		  "IE": "Europe",
		  "IL": "Asia",
		  "IT": "Europe",
		  "CI": "Africa",
		  "JM": "Caribbean",
		  "JP": "Asia",
		  "KE": "Africa",
		  "KP": "Asia",
		  "KR": "Asia",
		  "KW": "Asia",
		  "LB": "Asia",
		  "LV": "Europe",
		  "LR": "Africa",
		  "LY": "Africa",
		  "LT": "Europe",
		  "MO": "Asia",
		  "MG": "Africa",
		  "MY": "Asia",
		  "MT": "Europe",
		  "MR": "Africa",
		  "MU": "Africa",
		  "MX": "Central America",
		  "ME": "Europe",
		  "MA": "Africa",
		  "MZ": "Africa",
		  "OM": "Asia",
		  "NA": "Africa",
		  "NL": "Europe",
		  "CW": "Caribbean",
		  "VU": "Oceania",
		  "NZ": "Oceania",
		  "NI": "Central America",
		  "NG": "Africa",
		  "NO": "Europe",
		  "FM": "Oceania",
		  "PK": "Asia",
		  "PA": "Central America",
		  "PG": "Asia",
		  "PE": "South America",
		  "PH": "Asia",
		  "PL": "Europe",
		  "PT": "Europe",
		  "TL": "Asia",
		  "QA": "Asia",
		  "RO": "Europe",
		  "RU": "Europe",
		  "LC": "Caribbean",
		  "VC": "Caribbean",
		  "SA": "Asia",
		  "SN": "Africa",
		  "SL": "Africa",
		  "SG": "Asia",
		  "VN": "Asia",
		  "SI": "Europe",
		  "SO": "Africa",
		  "ZA": "Africa",
		  "ES": "Europe",
		  "SD": "Africa",
		  "SR": "South America",
		  "SE": "Europe",
		  "SY": "Asia",
		  "TH": "Asia",
		  "TG": "Africa",
		  "TT": "Caribbean",
		  "AE": "Asia",
		  "TN": "Africa",
		  "TR": "Europe",
		  "UA": "Europe",
		  "EG": "Africa",
		  "GB": "Europe",
		  "TZ": "Africa",
		  "US": "North America",
		  "UY": "South America",
		  "VE": "South America",
		  "YE": "Asia",
		  "DE": "Europe"
		};		
		
		
		
		google.charts.load('current', {
            'packages': ['geochart']
        });
        google.charts.setOnLoadCallback(() => fetchDataAndDrawChart('https://raw.githubusercontent.com/Nikola-Radojicic/google-charts-website/main/data98.csv'));
		
		let globalServerData;
		
		function changeDataset() {
			const selectedDataset = document.getElementById("dataset-selector").value;
			fetchDataAndDrawChart(selectedDataset);
		}
		
		function changeContinent() {
			const selectedContinent = document.getElementById("continent-selector").value;
			currentSelectedContinent = selectedContinent; // Update the global variable
			drawRegionsMap(globalServerData, selectedContinent);
		}
		
		
        function fetchDataAndDrawChart(url) {
            fetch(url)
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok ' + response.statusText);
					}
					return response.text();
				})
				.then(text => {
					const data = parseCSV(text);
					globalServerData = data;
					drawRegionsMap(data, currentSelectedContinent);
					drawTopCountriesTable();
				})
				.catch(error => {
					console.error('Error fetching data:', error);
				});
				
			drawTopCountriesTable(); // Add this line
		}
		
		function parseCSV(csvText) {
			const lines = csvText.split("\n");
			const result = [];
			const headers = lines[0].split(",");

			for (let i = 1; i < lines.length; i++) {
				if (!lines[i])
					continue;
				const obj = {};
				const currentline = lines[i].split(",");

				for (let j = 0; j < headers.length; j++) {
					obj[headers[j]] = currentline[j];
				}
				result.push(obj);
			}
			return result;  // Return the parsed CSV as an array of objects
		}
		
		
		

		function drawRegionsMap(serverData, selectedContinent = 'all') {
			const dataTable = [['country', 'Index']];
			for (let entry of serverData) {
				const country = entry.country;
				// Only add data for countries in the selected continent (or all continents)
				if (selectedContinent === 'all' || countryContinents[country] === selectedContinent) {
					const { index } = calculateIndex(entry.costs, entry.stability, entry.in_pot, entry.int_coop, entry.governance, entry.env_regul, entry.sust_dev, entry.decarb, entry.risks);
					const countryName = countryNames[country] || country;
					dataTable.push([countryName, index]); // Ensure that index is a number
				}
			}

			const data = google.visualization.arrayToDataTable(dataTable);

			// Map options - focus on the selected continent
			let regionCode;
			switch (selectedContinent) {
				case 'Africa': regionCode = '002'; break;
				case 'Asia': regionCode = '142'; break;
				case 'Europe': regionCode = '150'; break;
				case 'North America': regionCode = '021'; break; // Northern America
				case 'South America': regionCode = '005'; break;
				case 'Central America': regionCode = '013'; break;	
				case 'Caribbean': regionCode = '029'; break;	
				case 'Oceania': regionCode = '009'; break;
				default: regionCode = 'world'; break;
			}

			const options = {
				legend: 'none',
				region: regionCode, // Set the region based on the selected continent
				displayMode: 'regions',
				resolution: 'countries',
			};

			const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
			chart.draw(data, options);
		}
	
		


		
		
        function calculateIndex(costs, stability, in_pot, int_coop, governance, env_regul, sust_dev, decarb, risks) {
			const w_costs = parseFloat(document.getElementById("w_costs").value);
            const w_stability = parseFloat(document.getElementById("w_stability").value);
            const w_in_pot = parseFloat(document.getElementById("w_in_pot").value);
            const w_int_coop = parseFloat(document.getElementById("w_int_coop").value);
			const w_governance = parseFloat(document.getElementById("w_governance").value);
			const w_env_regul = parseFloat(document.getElementById("w_env_regul").value);
			const w_sust_dev = parseFloat(document.getElementById("w_sust_dev").value);
			const w_decarb = parseFloat(document.getElementById("w_decarb").value);
			const w_risks = parseFloat(document.getElementById("w_risks").value)
					
			
			const w_Economy = parseFloat(document.getElementById("w_Economy").value);
			const w_InnovationCooperation = parseFloat(document.getElementById("w_InnovationCooperation").value);
			const w_Sustainability = parseFloat(document.getElementById("w_Sustainability").value);
			const w_RegulationGovernance = parseFloat(document.getElementById("w_RegulationGovernance").value);
			
			
			console.log('Costs:', costs);  // Debugging statement
			console.log('Stability:', stability);  // Debugging statement
			console.log('In_Pot:', in_pot);  // Debugging statement
			console.log('Int_Coop:', int_coop);  // Debugging statement

            const Economy = (w_costs * costs + w_stability * stability) / (w_costs + w_stability);
            const InnovationCooperation = (w_in_pot * in_pot + w_int_coop * int_coop) / (w_in_pot + w_int_coop);
			const RegulationGovernance = (w_governance * governance + w_env_regul * env_regul) / (w_governance + w_env_regul);
			const Sustainability = (w_sust_dev * sust_dev + w_decarb * decarb + w_risks * risks) / (w_sust_dev + w_decarb + w_risks);
			
			// Create an object with all the sub-indexes and the main index
			return {
				index: parseFloat((w_Economy * Economy + w_InnovationCooperation * InnovationCooperation + w_Sustainability * Sustainability + w_RegulationGovernance * RegulationGovernance).toFixed(3)),
				Economy: parseFloat(Economy.toFixed(3)),
				InnovationCooperation: parseFloat(InnovationCooperation.toFixed(3)),
				Sustainability: parseFloat(Sustainability.toFixed(3)),
				RegulationGovernance: parseFloat(RegulationGovernance.toFixed(3))
			};
            
		}
		
		var lockStatus = {
			w_Economy: false,
			w_Sustainability: false,
			w_RegulationGovernance: false,
			w_InnovationCooperation: false,
			w_sust_dev: false,
			w_decarb: false,
			w_risks: false
		};


		function toggleLock(sliderId) {
			lockStatus[sliderId] = !lockStatus[sliderId];

			// Update the visual representation of the toggle
			var toggleElement = document.getElementById('lock_' + sliderId);
			if (lockStatus[sliderId]) {
				toggleElement.classList.add('active');
			} else {
				toggleElement.classList.remove('active');
			}

			// Check if the slider is a main weight or a subweight and call the appropriate function
			if (["w_Economy", "w_Sustainability", "w_RegulationGovernance", "w_InnovationCooperation"].includes(sliderId)) {
				// It's a main weight
				if (!lockStatus[sliderId]) {
					adjustWeights(sliderId);
				}
			} else {
				// It's a subweight
				// Define the group of subweights it belongs to, excluding the current one
				let otherSubWeights = ["w_sust_dev", "w_decarb", "w_risks"].filter(id => id !== sliderId);
				if (!lockStatus[sliderId]) {
					adjustSubWeights(sliderId, otherSubWeights);
				}
			}
		}



		
		function adjustWeights(excludedWeightId) {
			const excludedSlider = document.getElementById(excludedWeightId);
			let excludedWeight = parseFloat(excludedSlider.value);

			// Calculate the total weight of locked sliders
			let lockedTotalWeight = 0;
			let unlockedCount = 0;
			let lastUnlockedId = "";

			["w_Economy", "w_InnovationCooperation", "w_Sustainability", "w_RegulationGovernance"].forEach(id => {
				if (lockStatus[id]) {
					lockedTotalWeight += parseFloat(document.getElementById(id).value);
				} else {
					unlockedCount++;
					lastUnlockedId = id;
				}
			});

			if (unlockedCount === 1 && lastUnlockedId === excludedWeightId) {
				let remainingWeight = 1 - lockedTotalWeight;
				excludedSlider.value = remainingWeight.toFixed(2);
				document.getElementById(excludedWeightId + "_val").textContent = remainingWeight.toFixed(2);
			} else {
				document.getElementById(excludedWeightId + "_val").textContent = excludedWeight.toFixed(2);
				let maxExcludedValue = 1 - lockedTotalWeight;
				if (excludedWeight > maxExcludedValue) {
					excludedSlider.value = maxExcludedValue.toFixed(2);
					excludedWeight = maxExcludedValue;
					document.getElementById(excludedWeightId + "_val").textContent = maxExcludedValue.toFixed(2);
				}

				let availableWeight = 1 - lockedTotalWeight - excludedWeight;
				let countUnlocked = ["w_Economy", "w_InnovationCooperation", "w_Sustainability", "w_RegulationGovernance"].filter(id => !lockStatus[id] && id !== excludedWeightId).length;
				let newWeight = availableWeight / countUnlocked;

				["w_Economy", "w_InnovationCooperation", "w_Sustainability", "w_RegulationGovernance"].forEach(id => {
					if (!lockStatus[id] && id !== excludedWeightId) {
						const slider = document.getElementById(id);
						slider.value = newWeight.toFixed(2);
						document.getElementById(id + "_val").textContent = newWeight.toFixed(2);
					}
				});

				excludedSlider.value = excludedWeight.toFixed(2);
			}

			// Redraw the map with the current continent
			if (globalServerData) {
				drawRegionsMap(globalServerData, currentSelectedContinent);
			}
		}


		
		function adjustSubWeights(changedId, otherIds) {
			const changedSlider = document.getElementById(changedId);
			let changedValue = parseFloat(changedSlider.value);

			// Update the value display for the changed slider
			document.getElementById(changedId + "_val").textContent = changedValue.toFixed(2);

			// Calculate the total weight of locked sliders, excluding the current one
			let lockedTotalWeight = 0;
			otherIds.forEach(id => {
				if (lockStatus[id] && id !== changedId) {
					lockedTotalWeight += parseFloat(document.getElementById(id).value);
				}
			});

			// Calculate the maximum value the current slider can have
			let maxChangedValue = 1 - lockedTotalWeight;
			if (changedValue > maxChangedValue) {
				changedSlider.value = maxChangedValue.toFixed(2);
				changedValue = maxChangedValue;
				// Update the value display again if the value was adjusted
				document.getElementById(changedId + "_val").textContent = maxChangedValue.toFixed(2);
			}

			// The remaining weight available for unlocked sliders
			let availableWeight = 1 - lockedTotalWeight - changedValue;

			// Calculate the number of unlocked sliders, excluding the current one
			let countUnlocked = otherIds.filter(id => !lockStatus[id] && id !== changedId).length;

			// Divide the available weight equally among the unlocked sliders
			let newWeight = availableWeight / countUnlocked;

			// Set new weights for unlocked sliders and update their displayed values
			otherIds.forEach(id => {
				if (!lockStatus[id] && id !== changedId) {
					const slider = document.getElementById(id);
					slider.value = newWeight.toFixed(2);
					document.getElementById(id + "_val").textContent = newWeight.toFixed(2);
				}
			});

			// Ensure the changed slider is set to its current value
			changedSlider.value = changedValue.toFixed(2);
		}

		
		


		// Call this function on each lock toggle click



			
		
		function updateMainWeightsAndRedraw() {
			updateWeightAndRedraw("w_Economy", "w_Economy_val");
			updateWeightAndRedraw("w_InnovationCooperation", "w_InnovationCooperation_val");
			updateWeightAndRedraw("w_Sustainability", "w_Sustainability_val");
			updateWeightAndRedraw("w_RegulationGovernance", "w_RegulationGovernance_val");
		}

        
		        // Function to populate the dropdown menus
		function populateCountryDropdowns() {
		  const countrySelect1 = document.getElementById('country1');
		  const countrySelect2 = document.getElementById('country2');
		  const countrySelect3 = document.getElementById('country3');
		  const countrySelect4 = document.getElementById('country4');
		  const countrySelect5 = document.getElementById('country5');	  

		  for (const code in countryNames) {
			const option1 = document.createElement('option');
			option1.value = code;
			option1.text = countryNames[code];
			countrySelect1.add(option1);

			const option2 = document.createElement('option');
			option2.value = code;
			option2.text = countryNames[code];
			countrySelect2.add(option2);
			
			const option3 = document.createElement('option');
			option3.value = code;
			option3.text = countryNames[code];
			countrySelect3.add(option3);

			const option4 = document.createElement('option');
			option4.value = code;
			option4.text = countryNames[code];
			countrySelect4.add(option4);

			const option5 = document.createElement('option');
			option5.value = code;
			option5.text = countryNames[code];
			countrySelect5.add(option5);			
		  }
		}
		
		

		
		function addEventListeners() {
		document.getElementById("w_costs").addEventListener("input", function() {
			    const complement = 1 - parseFloat(this.value);
				document.getElementById("w_stability").value = complement.toFixed(2);
				updateWeightAndRedraw("w_costs", "w_costs_val");
				updateWeightAndRedraw("w_stability", "w_stability_val");
            });
            document.getElementById("w_stability").addEventListener("input", function() {
			    const complement = 1 - parseFloat(this.value);
				document.getElementById("w_costs").value = complement.toFixed(2);
				updateWeightAndRedraw("w_stability", "w_stability_val");
				updateWeightAndRedraw("w_costs", "w_costs_val");
            });
			
			// Innovation Potential and International Cooperation
            document.getElementById("w_in_pot").addEventListener("input", function() {
			    const complement = 1 - parseFloat(this.value);
				document.getElementById("w_int_coop").value = complement.toFixed(2);
				updateWeightAndRedraw("w_in_pot", "w_in_pot_val");
				updateWeightAndRedraw("w_int_coop", "w_int_coop_val");
            });
            document.getElementById("w_int_coop").addEventListener("input", function() {
			    const complement = 1 - parseFloat(this.value);
				document.getElementById("w_in_pot").value = complement.toFixed(2);
				updateWeightAndRedraw("w_int_coop", "w_int_coop_val");
				updateWeightAndRedraw("w_in_pot", "w_in_pot_val");
            });

			
			// Sustainability sub-factors
			document.getElementById("w_sust_dev").addEventListener("input", function() {
				adjustSubWeights("w_sust_dev", ["w_decarb", "w_risks"]);
				updateWeightAndRedraw("w_sust_dev", "w_sust_dev_val");
				updateWeightAndRedraw("w_decarb", "w_decarb_val");
				updateWeightAndRedraw("w_risks", "w_risks_val");
			});
			
			document.getElementById("w_decarb").addEventListener("input", function() {
				adjustSubWeights("w_decarb", ["w_sust_dev", "w_risks"]);
				updateWeightAndRedraw("w_decarb", "w_decarb_val");
				updateWeightAndRedraw("w_sust_dev", "w_sust_dev_val");
				updateWeightAndRedraw("w_risks", "w_risks_val");
			});
			
			document.getElementById("w_risks").addEventListener("input", function() {
				adjustSubWeights("w_risks", ["w_sust_dev", "w_decarb"]);
				updateWeightAndRedraw("w_risks", "w_risks_val");
				updateWeightAndRedraw("w_sust_dev", "w_sust_dev_val");
				updateWeightAndRedraw("w_decarb", "w_decarb_val");
			});
			
			// Regulation & Governance sub-factors
			document.getElementById("w_governance").addEventListener("input", function() {
				const complement = 1 - parseFloat(this.value);
				document.getElementById("w_env_regul").value = complement.toFixed(2);
				updateWeightAndRedraw("w_governance", "w_governance_val");
				updateWeightAndRedraw("w_env_regul", "w_env_regul_val");
			});

			document.getElementById("w_env_regul").addEventListener("input", function() {
				const complement = 1 - parseFloat(this.value);
				document.getElementById("w_governance").value = complement.toFixed(2);
				updateWeightAndRedraw("w_env_regul", "w_env_regul_val");
				updateWeightAndRedraw("w_governance", "w_governance_val");
			});
			
			// FOR FOUR DIMENSIONS
			
			document.getElementById("w_Economy").addEventListener("input", function() {
				adjustWeights("w_Economy");
				updateMainWeightsAndRedraw();
			});
			
			document.getElementById("w_InnovationCooperation").addEventListener("input", function() {
				adjustWeights("w_InnovationCooperation");
				updateMainWeightsAndRedraw();
			});
			
			document.getElementById("w_Sustainability").addEventListener("input", function() {
				adjustWeights("w_Sustainability");
				updateMainWeightsAndRedraw();
			});
			
			document.getElementById("w_RegulationGovernance").addEventListener("input", function() {
				adjustWeights("w_RegulationGovernance");
				updateMainWeightsAndRedraw();
			});

        }
		
		// Function to handle mouse wheel event on sliders
		function handleMouseWheel(sliderId, otherIds = []) {
			var slider = document.getElementById(sliderId);
			slider.addEventListener('wheel', function(event) {
				event.preventDefault();
				var delta = event.deltaY || event.detail || event.wheelDelta;
				var step = parseFloat(slider.step);
				var currentValue = parseFloat(slider.value);
				var newValue = delta > 0 ? currentValue - step : currentValue + step;
				
				// Ensure the value is within the slider range
				newValue = Math.max(slider.min, Math.min(newValue, slider.max));
				slider.value = newValue.toFixed(2);

				// Update weights
				if (otherIds.length === 0) {
					// For main dimensions
					adjustWeights(sliderId);
				} else {
					// For sub-dimensions
					adjustSubWeights(sliderId, otherIds);
				}

				// Redraw chart and update display
				updateWeightAndRedraw(sliderId, sliderId + "_val");
				otherIds.forEach(id => updateWeightAndRedraw(id, id + "_val"));
				drawRegionsMap(globalServerData,currentSelectedContinent);
				drawTopCountriesTable();
				handleCountrySelect();
			});
		}

		// Add mouse wheel event listeners
		// For paired sliders
		handleMouseWheel("w_costs", ["w_stability"]);
		handleMouseWheel("w_stability", ["w_costs"]);
		handleMouseWheel("w_governance", ["w_env_regul"]);
		handleMouseWheel("w_env_regul", ["w_governance"]);
		handleMouseWheel("w_in_pot", ["w_int_coop"]);
		handleMouseWheel("w_int_coop", ["w_in_pot"]);

		// For triplets
		handleMouseWheel("w_sust_dev", ["w_decarb", "w_risks"]);
		handleMouseWheel("w_decarb", ["w_sust_dev", "w_risks"]);
		handleMouseWheel("w_risks", ["w_sust_dev", "w_decarb"]);

		// For main dimensions
		["w_Economy", "w_InnovationCooperation", "w_Sustainability", "w_RegulationGovernance"].forEach(id => handleMouseWheel(id));



		
		function updateWeightAndRedraw(sliderId, valueId) {
			const slider = document.getElementById(sliderId);
			const valueSpan = document.getElementById(valueId);
			valueSpan.innerText = slider.value;
			if (globalServerData) {
				drawRegionsMap(globalServerData, currentSelectedContinent); // Pass the selected continent
				handleCountrySelect(); // Updates the comparison results with new weights
			}
			drawTopCountriesTable();
		}

		
		document.addEventListener("DOMContentLoaded", function() {
			document.querySelectorAll('input[type="range"]').forEach((input) => {
				input.addEventListener('change', () => {
					const currentValue = parseFloat(input.value);
					if (currentValue < 0 || currentValue > 1) {
						alert('Please enter a value between 0 and 1');
						input.value = currentValue < 0 ? 0 : 1;
					}
				});
			});
		 });
		
		
		document.addEventListener('DOMContentLoaded', function() {
			// Attach the event listener to the dropdown
			document.getElementById('column-selector').addEventListener('change', adjustColumns);

			// Call other initialization functions here
			populateCountryDropdowns();
			addEventListeners();
			// Add any other initialization code you need here
		});

		document.addEventListener('DOMContentLoaded', function() {
			document.getElementById('toggleTableButton').addEventListener('click', function() {
				var tableContainer = document.getElementById('topCountriesTableContainer');
				if (tableContainer.style.display === 'none' || tableContainer.style.display === '') {
					tableContainer.style.display = 'block';
				} else {
					tableContainer.style.display = 'none';
				}
			});
		});
		



				
		var numberOfColumnsToShow = 3;
		
	
		function adjustColumns() {
			var selectedValue = document.getElementById('column-selector').value;
			var numberOfColumnsToShow = parseInt(selectedValue) + 1;

			var columnClasses = ['first-column', 'second-column', 'third-column', 'fourth-column', 'fifth-column', 'sixth-column'];

			columnClasses.forEach((className, index) => {
				var columns = document.querySelectorAll('.' + className);

				if (index < numberOfColumnsToShow) {
					columns.forEach(column => column.style.display = 'table-cell'); // Show columns
				} else {
					columns.forEach(column => {
						column.style.display = 'none'; // Hide columns
						// Clear content based on IDs
						clearColumnContent(column, index + 1);
					});
				}
			});
		}

		function clearColumnContent(columnElement, columnNumber) {
			const idsToClear = [
				`country${columnNumber}-result`,
				`country${columnNumber}-economy`,
				`country${columnNumber}-innovationCooperation`,
				`country${columnNumber}-sustainability`,
				`country${columnNumber}-regulationGovernance`
			];

			idsToClear.forEach(id => {
				const element = columnElement.querySelector('#' + id);
				if (element) {
					element.textContent = '';
				}
			});
		}

		
		
		
		// Event handler when a country is selected from the dropdown.
		function handleCountrySelect() {
			const country1Code = $('#country1').val();
			const country2Code = $('#country2').val();
			const country3Code = $('#country3').val();
			const country4Code = $('#country4').val();
			const country5Code = $('#country5').val();	
			
			const country1Name = countryNames[country1Code] || 'Country 1';
			const country2Name = countryNames[country2Code] || 'Country 2';
			const country3Name = countryNames[country3Code] || 'Country 3';
			const country4Name = countryNames[country4Code] || 'Country 4';			
			const country5Name = countryNames[country5Code] || 'Country 5';
			
			// Update the labels with the selected country names
			$('#country1-label').text(`Overall Index for ${country1Name}:`);
			$('#country2-label').text(`Overall Index for ${country2Name}:`);
			$('#country3-label').text(`Overall Index for ${country3Name}:`);
			$('#country4-label').text(`Overall Index for ${country4Name}:`);
			$('#country5-label').text(`Overall Index for ${country5Name}:`);		
			
			
			const country1Data = globalServerData.find(data => data.country === country1Code);
			const country2Data = globalServerData.find(data => data.country === country2Code);
			const country3Data = globalServerData.find(data => data.country === country3Code);
			const country4Data = globalServerData.find(data => data.country === country4Code);
			const country5Data = globalServerData.find(data => data.country === country5Code);


			// Ensure that the data for each country has been found before calculating the index.
			const result1 = country1Data ? calculateIndexFromData(country1Data) : { index: '...' };
			const result2 = country2Data ? calculateIndexFromData(country2Data) : { index: '...' };
			const result3 = country3Data ? calculateIndexFromData(country3Data) : { index: '...' };
			const result4 = country4Data ? calculateIndexFromData(country4Data) : { index: '...' };
			const result5 = country5Data ? calculateIndexFromData(country5Data) : { index: '...' };	
			

			// Display the main index results.
			$('#country1-result').text(result1.index);
			$('#country2-result').text(result2.index);
			$('#country3-result').text(result3.index);
			$('#country4-result').text(result4.index);
			$('#country5-result').text(result5.index);		
			
			 // Update the labels for the sub-indexes too
			$('#country1-economy-label').text(`Economy for ${country1Name}:`);
			$('#country2-economy-label').text(`Economy for ${country2Name}:`);
			$('#country3-economy-label').text(`Economy for ${country3Name}:`);
			$('#country4-economy-label').text(`Economy for ${country4Name}:`);
			$('#country5-economy-label').text(`Economy for ${country5Name}:`);	
			
			// Display the sub-indexes
			$('#country1-economy').text(result1.Economy || '...');
			$('#country2-economy').text(result2.Economy || '...');
			$('#country3-economy').text(result3.Economy || '...');
			$('#country4-economy').text(result4.Economy || '...');
			$('#country5-economy').text(result5.Economy || '...');
			
			$('#country1-innovationCooperation').text(result1.InnovationCooperation || '...');
			$('#country2-innovationCooperation').text(result2.InnovationCooperation || '...');
			$('#country3-innovationCooperation').text(result3.InnovationCooperation || '...');
			$('#country4-innovationCooperation').text(result4.InnovationCooperation || '...');
			$('#country5-innovationCooperation').text(result5.InnovationCooperation || '...');	
			
			$('#country1-sustainability').text(result1.Sustainability || '...');
			$('#country2-sustainability').text(result2.Sustainability || '...');
			$('#country3-sustainability').text(result3.Sustainability || '...');
			$('#country4-sustainability').text(result4.Sustainability || '...');
			$('#country5-sustainability').text(result5.Sustainability || '...');
			
			$('#country1-regulationGovernance').text(result1.RegulationGovernance || '...');
			$('#country2-regulationGovernance').text(result2.RegulationGovernance || '...');
			$('#country3-regulationGovernance').text(result3.RegulationGovernance || '...');
			$('#country4-regulationGovernance').text(result4.RegulationGovernance || '...');
			$('#country5-regulationGovernance').text(result5.RegulationGovernance || '...');			
		}
		adjustColumns();
		
		// Calculate the index from a data object.
		function calculateIndexFromData(data) {
		  return calculateIndex(
			data.costs, data.stability, data.in_pot, data.int_coop, data.governance,
			data.env_regul, data.sust_dev, data.decarb, data.risks
		  );
		}
		
		// Initialize the dropdowns with Select2 and set up the event handler.
		$(document).ready(function() {
		  $('.search-dropdown').select2().on('change', handleCountrySelect);
		  fetchDataAndDrawChart('https://raw.githubusercontent.com/Nikola-Radojicic/google-charts-website/main/data98.csv'); // Call this to initialize the data and table on page load

		});
		
		function drawTopCountriesTable() {
			// Sort the globalServerData by index value in descending order
			const sortedData = [...globalServerData].sort((a, b) => calculateIndexFromData(b).index - calculateIndexFromData(a).index);

			// Get the top 10 countries
			const top10 = sortedData.slice(0, 10);

			// Create HTML for the table
			let tableHtml = '<table><tr><th>Rank</th><th>Country</th><th>Index</th></tr>';
			top10.forEach((data, index) => {
				tableHtml += `<tr><td>${index + 1}</td><td>${countryNames[data.country] || data.country}</td><td>${calculateIndexFromData(data).index.toFixed(3)}</td></tr>`;
			});
			tableHtml += '</table>';

			// Set the innerHTML of the table container
			document.getElementById('topCountriesTableContainer').innerHTML = tableHtml;
		}

		
		function resetSliders() {
			// Select each slider by its ID and reset it to the default value
			document.getElementById('w_costs').value = '0.5';
			document.getElementById('w_stability').value = '0.5';
			document.getElementById('w_sust_dev').value = '0.33';
			document.getElementById('w_decarb').value = '0.33';
			document.getElementById('w_risks').value = '0.33';
			document.getElementById('w_governance').value = '0.5';
			document.getElementById('w_env_regul').value = '0.5';
			document.getElementById('w_in_pot').value = '0.5';
			document.getElementById('w_int_coop').value = '0.5';
			document.getElementById('w_Economy').value = '0.25';
			document.getElementById('w_Sustainability').value = '0.25';
			document.getElementById('w_RegulationGovernance').value = '0.25';
			document.getElementById('w_InnovationCooperation').value = '0.25';

			// Also update the display values next to each slider
			document.getElementById('w_costs_val').textContent = '0.5';
			document.getElementById('w_stability_val').textContent = '0.5';
			document.getElementById('w_sust_dev_val').textContent = '0.33';
			document.getElementById('w_decarb_val').textContent = '0.33';
			document.getElementById('w_risks_val').textContent = '0.33';
			document.getElementById('w_governance_val').textContent = '0.5';
			document.getElementById('w_env_regul_val').textContent = '0.5';
			document.getElementById('w_in_pot_val').textContent = '0.5';
			document.getElementById('w_int_coop_val').textContent = '0.5';
			document.getElementById('w_Economy_val').textContent = '0.25';
			document.getElementById('w_Sustainability_val').textContent = '0.25';
			document.getElementById('w_RegulationGovernance_val').textContent = '0.25';
			document.getElementById('w_InnovationCooperation_val').textContent = '0.25';
			
			if (globalServerData) {
				drawRegionsMap(globalServerData, currentSelectedContinent); // Redraw the map with the default values
				handleCountrySelect(); // Update the comparison results with default values
			}
			
			for (let key in lockStatus) {
				lockStatus[key] = false;

				// Also reset the visual state of the toggle buttons
				var toggleElement = document.getElementById('lock_' + key);
				if (toggleElement) {
					toggleElement.classList.remove('active');
				}
			}			
			
			drawTopCountriesTable();
		}
		


		
		window.onload = function() {
			addEventListeners();
			addMouseWheelEventListeners();
		};
        // defining country names w/o using Google API map keys
		
		const countryNames = {
		  "AL": "Albania",
		  "DZ": "Algeria",
		  "AO": "Angola",
		  "AR": "Argentina",
		  "AU": "Australia",
		  "BH": "Bahrain",
		  "BD": "Bangladesh",
		  "BE": "Belgium",
		  "BJ": "Benin",
		  "BA": "Bosnia and Herzegovina",
		  "BR": "Brazil",
		  "BG": "Bulgaria",
		  "KH": "Cambodia",
		  "CM": "Cameroon",
		  "CA": "Canada",
		  "CL": "Chile",
		  "CN": "China",
		  "CO": "Colombia",
		  "CG": "Congo",
		  "CD": "Congo, DR",
		  "CR": "Costa Rica",
		  "CI": "Côte d'Ivoire",
		  "HR": "Croatia",
		  "DK": "Denmark",
		  "DO": "Dominican Republic",
		  "EC": "Ecuador",
		  "EG": "Egypt",
		  "ER": "Eritrea",
		  "FI": "Finland",
		  "FR": "France",
		  "GH": "Ghana",
		  "GR": "Greece",
		  "GT": "Guatemala",
		  "GN": "Guinea",
		  "HT": "Haiti",
		  "HN": "Honduras",
		  "IN": "India",
		  "ID": "Indonesia",
		  "IR": "Iran",
		  "IE": "Ireland",
		  "IL": "Israel",
		  "IT": "Italy",
		  "JM": "Jamaica",
		  "JP": "Japan",
		  "KE": "Kenya",
		  "KR": "Korea Republic",
		  "KW": "Kuwait",
		  "LB": "Lebanon",
		  "LR": "Liberia",
		  "MG": "Madagascar",
		  "MY": "Malaysia",
		  "MR": "Mauritania",
		  "MX": "Mexico",
		  "ME": "Montenegro",
		  "MA": "Morocco",
		  "MZ": "Mozambique",
		  "MM": "Myanmar",
		  "NL": "Netherlands",
		  "NZ": "New Zealand",
		  "NI": "Nicaragua",
		  "NG": "Nigeria",
		  "NO": "Norway",
		  "OM": "Oman",
		  "PK": "Pakistan",
		  "PA": "Panama",
		  "PG": "Papua New Guinea",
		  "PE": "Peru",
		  "PH": "Philippines",
		  "PL": "Poland",
		  "PT": "Portugal",
		  "QA": "Qatar",
		  "RO": "Romania",
		  "RU": "Russia",
		  "SA": "Saudi Arabia",
		  "SN": "Senegal",
		  "SL": "Sierra Leone",
		  "SG": "Singapore",
		  "SB": "Solomon Islands",
		  "SO": "Somalia",
		  "ZA": "South Africa",
		  "ES": "Spain",
		  "LK": "Sri Lanka",
		  "SD": "Sudan",
		  "SE": "Sweden",
		  "TZ": "Tanzania",
		  "TH": "Thailand",
		  "TG": "Togo",
		  "TN": "Tunisia",
		  "TR": "Türkiye",
		  "UA": "Ukraine",
		  "AE": "United Arab Emirates",
		  "GB": "United Kingdom",
		  "US": "United States",
		  "UY": "Uruguay",
		  "VU": "Vanuatu",
		  "VE": "Venezuela",
		  "VN": "Vietnam",
		  "YE": "Yemen"
		};
		
		
		
		
		
		
		google.charts.load('current', {
            'packages': ['geochart'],
        });
        google.charts.setOnLoadCallback(fetchDataAndDrawChart);
		
		let globalServerData;
		
        function fetchDataAndDrawChart() {
            fetch('https://raw.githubusercontent.com/Nikola-Radojicic/google-charts-website/main/data98.csv')
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok ' + response.statusText);
					}
					return response.text();
				})
				.then(text => {
					const data = parseCSV(text);
					globalServerData = data;
					drawRegionsMap(data);
				})
				.catch(error => {
					console.error('Error fetching data:', error);
				});
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
		
		
		

		function drawRegionsMap(serverData) {
			const dataTable = [['country', 'Index']];
			for (let entry of serverData) {
				const country = entry.country;
				// Calculate the index and destructure to get the numeric value of the index property
				const { index } = calculateIndex(entry.costs, entry.stability, entry.in_pot, entry.int_coop, entry.governance, entry.env_regul, entry.sust_dev, entry.decarb, entry.risks);
				const countryName = countryNames[country] || country;
				dataTable.push([countryName, index]); // Ensure that index is a number
			}

			const data = google.visualization.arrayToDataTable(dataTable);
			const options = {
				legend: 'none'
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

		function adjustWeights(excludedWeightId) {
			const total = 1.0;

			const w_Economy = parseFloat(document.getElementById("w_Economy").value);
			const w_InnovationCooperation = parseFloat(document.getElementById("w_InnovationCooperation").value);
			const w_Sustainability = parseFloat(document.getElementById("w_Sustainability").value);
			const w_RegulationGovernance = parseFloat(document.getElementById("w_RegulationGovernance").value);

			const totalExcludingCurrent = w_Economy + w_InnovationCooperation + w_Sustainability + w_RegulationGovernance 
										- parseFloat(document.getElementById(excludedWeightId).value);
    
			const scaleFactor = (total - parseFloat(document.getElementById(excludedWeightId).value)) / totalExcludingCurrent;

			if (excludedWeightId !== "w_Economy") document.getElementById("w_Economy").value = (w_Economy * scaleFactor).toFixed(2);
			if (excludedWeightId !== "w_InnovationCooperation") document.getElementById("w_InnovationCooperation").value = (w_InnovationCooperation * scaleFactor).toFixed(2);
			if (excludedWeightId !== "w_Sustainability") document.getElementById("w_Sustainability").value = (w_Sustainability * scaleFactor).toFixed(2);
			if (excludedWeightId !== "w_RegulationGovernance") document.getElementById("w_RegulationGovernance").value = (w_RegulationGovernance * scaleFactor).toFixed(2);
		}
		
		function adjustSubWeights(changedId, otherIds) {
			const changedValue = parseFloat(document.getElementById(changedId).value);
			const otherValuesSum = otherIds.reduce((acc, id) => acc + parseFloat(document.getElementById(id).value), 0);
			const totalExcludingCurrent = 1 - changedValue;
			const scaleFactor = totalExcludingCurrent / otherValuesSum;

			otherIds.forEach(id => {
				document.getElementById(id).value = (parseFloat(document.getElementById(id).value) * scaleFactor).toFixed(2);
			});
		}
		
		
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

		  for (const code in countryNames) {
			const option1 = document.createElement('option');
			option1.value = code;
			option1.text = countryNames[code];
			countrySelect1.add(option1);

			const option2 = document.createElement('option');
			option2.value = code;
			option2.text = countryNames[code];
			countrySelect2.add(option2);
		  }
		}
		
		document.addEventListener('DOMContentLoaded', populateCountryDropdowns);
		
		
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
		
		function updateWeightAndRedraw(sliderId, valueId) {
			const slider = document.getElementById(sliderId);
			const valueSpan = document.getElementById(valueId);
			valueSpan.innerText = slider.value;
			if (globalServerData) {
				drawRegionsMap(globalServerData);
				handleCountrySelect(); // Updates the comparison results with new weights
			}
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
		
		
		
		
		// Event handler when a country is selected from the dropdown.
		function handleCountrySelect() {
			const country1Code = $('#country1').val();
			const country2Code = $('#country2').val();
			const country1Name = countryNames[country1Code] || 'Country 1';
			const country2Name = countryNames[country2Code] || 'Country 2';
			
			// Update the labels with the selected country names
			$('#country1-label').text(`Overall Index for ${country1Name}:`);
			$('#country2-label').text(`Overall Index for ${country2Name}:`);
			
			
			const country1Data = globalServerData.find(data => data.country === country1Code);
			const country2Data = globalServerData.find(data => data.country === country2Code);


			// Ensure that the data for each country has been found before calculating the index.
			const result1 = country1Data ? calculateIndexFromData(country1Data) : { index: '...' };
			const result2 = country2Data ? calculateIndexFromData(country2Data) : { index: '...' };

			// Display the main index results.
			$('#country1-result').text(result1.index);
			$('#country2-result').text(result2.index);
			
			 // Update the labels for the sub-indexes too
			$('#country1-economy-label').text(`Economy for ${country1Name}:`);
			$('#country2-economy-label').text(`Economy for ${country2Name}:`);
			
			
			// Display the sub-indexes
			$('#country1-economy').text(result1.Economy || '...');
			$('#country2-economy').text(result2.Economy || '...');
			$('#country1-innovationCooperation').text(result1.InnovationCooperation || '...');
			$('#country2-innovationCooperation').text(result2.InnovationCooperation || '...');
			$('#country1-sustainability').text(result1.Sustainability || '...');
			$('#country2-sustainability').text(result2.Sustainability || '...');
			$('#country1-regulationGovernance').text(result1.RegulationGovernance || '...');
			$('#country2-regulationGovernance').text(result2.RegulationGovernance || '...');
		}
		
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
		});
		
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
				drawRegionsMap(globalServerData); // Redraw the map with the default values
				handleCountrySelect(); // Update the comparison results with default values
			}
		}
        window.onload = addEventListeners;
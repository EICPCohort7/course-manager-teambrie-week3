function populateStates() {
  let usStates = [
    { name: 'ALABAMA', abbreviation: 'AL' },
    { name: 'ALASKA', abbreviation: 'AK' },
    { name: 'AMERICAN SAMOA', abbreviation: 'AS' },
    { name: 'ARIZONA', abbreviation: 'AZ' },
    { name: 'ARKANSAS', abbreviation: 'AR' },
    { name: 'CALIFORNIA', abbreviation: 'CA' },
    { name: 'COLORADO', abbreviation: 'CO' },
    { name: 'CONNECTICUT', abbreviation: 'CT' },
    { name: 'DELAWARE', abbreviation: 'DE' },
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC' },
    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM' },
    { name: 'FLORIDA', abbreviation: 'FL' },
    { name: 'GEORGIA', abbreviation: 'GA' },
    { name: 'GUAM', abbreviation: 'GU' },
    { name: 'HAWAII', abbreviation: 'HI' },
    { name: 'IDAHO', abbreviation: 'ID' },
    { name: 'ILLINOIS', abbreviation: 'IL' },
    { name: 'INDIANA', abbreviation: 'IN' },
    { name: 'IOWA', abbreviation: 'IA' },
    { name: 'KANSAS', abbreviation: 'KS' },
    { name: 'KENTUCKY', abbreviation: 'KY' },
    { name: 'LOUISIANA', abbreviation: 'LA' },
    { name: 'MAINE', abbreviation: 'ME' },
    { name: 'MARSHALL ISLANDS', abbreviation: 'MH' },
    { name: 'MARYLAND', abbreviation: 'MD' },
    { name: 'MASSACHUSETTS', abbreviation: 'MA' },
    { name: 'MICHIGAN', abbreviation: 'MI' },
    { name: 'MINNESOTA', abbreviation: 'MN' },
    { name: 'MISSISSIPPI', abbreviation: 'MS' },
    { name: 'MISSOURI', abbreviation: 'MO' },
    { name: 'MONTANA', abbreviation: 'MT' },
    { name: 'NEBRASKA', abbreviation: 'NE' },
    { name: 'NEVADA', abbreviation: 'NV' },
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH' },
    { name: 'NEW JERSEY', abbreviation: 'NJ' },
    { name: 'NEW MEXICO', abbreviation: 'NM' },
    { name: 'NEW YORK', abbreviation: 'NY' },
    { name: 'NORTH CAROLINA', abbreviation: 'NC' },
    { name: 'NORTH DAKOTA', abbreviation: 'ND' },
    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP' },
    { name: 'OHIO', abbreviation: 'OH' },
    { name: 'OKLAHOMA', abbreviation: 'OK' },
    { name: 'OREGON', abbreviation: 'OR' },
    { name: 'PALAU', abbreviation: 'PW' },
    { name: 'PENNSYLVANIA', abbreviation: 'PA' },
    { name: 'PUERTO RICO', abbreviation: 'PR' },
    { name: 'RHODE ISLAND', abbreviation: 'RI' },
    { name: 'SOUTH CAROLINA', abbreviation: 'SC' },
    { name: 'SOUTH DAKOTA', abbreviation: 'SD' },
    { name: 'TENNESSEE', abbreviation: 'TN' },
    { name: 'TEXAS', abbreviation: 'TX' },
    { name: 'UTAH', abbreviation: 'UT' },
    { name: 'VERMONT', abbreviation: 'VT' },
    { name: 'VIRGIN ISLANDS', abbreviation: 'VI' },
    { name: 'VIRGINIA', abbreviation: 'VA' },
    { name: 'WASHINGTON', abbreviation: 'WA' },
    { name: 'WEST VIRGINIA', abbreviation: 'WV' },
    { name: 'WISCONSIN', abbreviation: 'WI' },
    { name: 'WYOMING', abbreviation: 'WY' },
  ];

  let selectRef = document.getElementById('province');
  for (let state of usStates) {
    selectRef.innerHTML += `<option value="${state.abbreviation}">${state.name}</option>`;
  }
}
function populateProvinces() {
  let provinces = [
    { plain: 'Alberta', name: 'Alberta', abbr: 'AB' },
    { plain: 'British Columbia', name: 'British Columbia', abbr: 'BC' },
    { plain: 'Manitoba', name: 'Manitoba', abbr: 'MB' },
    { plain: 'New Brunswick', name: 'New Brunswick', abbr: 'NB' },
    { plain: 'Newfoundland &amp; Labrador', name: 'Newfoundland &amp; Labrador', abbr: 'NL' },
    { plain: 'Northwest Territories', name: 'Northwest Territories', abbr: 'NT' },
    { plain: 'Nova Scotia', name: 'Nova Scotia', abbr: 'NS' },
    { plain: 'Nunavut', name: 'Nunavut', abbr: 'NU' },
    { plain: 'Ontario', name: 'Ontario', abbr: 'ON' },
    { plain: 'Prince Edward Island', name: 'Prince Edward Island', abbr: 'PE' },
    { plain: 'Quebec', name: 'Qu&eacute;bec', abbr: 'QC' },
    { plain: 'Saskatchewan', name: 'Saskatchewan', abbr: 'SK' },
    { plain: 'Yukon', name: 'Yukon', abbr: 'YK' },
  ];

  let selectRef = document.getElementById('province');
  for (let pro of provinces) {
    selectRef.innerHTML += `<option value="${pro.abbreviation}">${pro.name}</option>`;
  }
}

if (document.getElementById('country').value === 'US') {
  console.log('Hi');
  populateStates();
} else if (document.getElementById('country').value === 'CA') {
  populateProvinces();
}

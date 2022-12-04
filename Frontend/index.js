const teams = [
  "Arsenal",
  "Aston Villa",
  "Bournemouth",
  "Brentford",
  "Brighton",
  "Burnley",
  "Cardiff",
  "Chelsea",
  "Crystal Palace",
  "Everton",
  "Fulham",
  "Huddersfield",
  "Leeds",
  "Leicester",
  "Liverpool",
  "Man City",
  "Man United",
  "Newcastle",
  "Norwich",
  "Sheffield United",
  "Southampton",
  "Stoke",
  "Swansea",
  "Tottenham",
  "Watford",
  "West Brom",
  "West Ham",
  "Wolves",
];
const inputValues = {};
document.addEventListener("DOMContentLoaded", async () => {
  const element = document.getElementById("teams1");
  const element1 = document.getElementById("teams2");
  teams.forEach((team) => {
    const newElement = document.createElement("option");
    // newElement.className="select-item";
    newElement.value = team;
    const newElement1 = newElement.cloneNode();
    element.appendChild(newElement);
    element1.appendChild(newElement1);
  });

});

const generateOdds = async () => {
    document.getElementById('odds').disabled = true;
    document.getElementsByName("team").forEach((e, i) => {
      e.value = "" ;
    });
    const response = await submitForm();
    alert(response['winner'])

};

const validateForm = () => {
  document.getElementsByName("team").forEach((e, i) => {
    inputValues[`value${i}`] = e.value;
  });
  if(!inputValues["value0"]){
    return 
  }
  if(!inputValues["value1"]){
    return 
  }
  if(inputValues["value0"] === inputValues["value1"]){
    return 
  }
  document.getElementById('odds').disabled = false;
}

const submitForm = async () => {
  var queryUrl = "http://127.0.0.1:8000/submit";
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    value0: inputValues['value0'],
    value1: inputValues['value1'],
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  response = await fetch(queryUrl, requestOptions);
  return response.json();
};

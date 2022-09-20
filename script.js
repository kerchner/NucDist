function compute() {
  let dna = document.getElementById("dna").value;
  dna = dna.toUpperCase();
  dna = dna.replace(/[^A-Z]/g,""); // remove anything other than A-Z
  document.getElementById("dna").value = dna;  // overwrite input value
  
  let lettercounts = {}; // new JSON object
  
  for (let i = 0; i < dna.length; i++) {
    let letter = dna[i];

    if (letter in lettercounts) {
      lettercounts[letter] = lettercounts[letter] + 1;
    } else {
      lettercounts[letter] = 1;
    }
  }

  let keys = Object.keys(lettercounts);   // extract keys from lettercounts
  let vals = Object.values(lettercounts); // extract values from lettercounts
  for (let i = 0; i < vals.length; i++) {
    vals[i] = vals[i] / dna.length;
  }
  let data = [
    {
      labels: keys,
      values: vals,
      type: "pie",
      //x: keys,
      //y: vals,
      //type: 'bar'
    },
  ];

  let layout = {
    title: "Nucleotide Frequency",
    height: 400,
    width: 500
    /*
   font:{
      family: 'Raleway, sans-serif'
    },
    showlegend: false,
    xaxis: {
//      tickangle: -45
    },
    yaxis: {
      zeroline: false,
      gridwidth: 2
    },
 */
    //   bargap :0.05
  };

  Plotly.newPlot("plotDiv", data, layout);
}

function reset() {
  document.getElementById("plotDiv").innerHTML = "";
  document.getElementById("dna").value = "";
}

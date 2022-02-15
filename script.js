function compute() {
  let dna = document.getElementById("dna").value;
  dna = dna.toUpperCase(); // convert everything to uppercase
  dna = dna.replace(/[^A-Z]/g,""); // remove anything other than A-Z
  
  let lettercounts = new Map(); // Map to hold our tallies, e.g. {'A': 4, 'C': 5, ...}
  
  for (let i = 0; i < dna.length; i++) {
    let letter = dna[i];

    if (lettercounts.has(letter)) {
      lettercounts.set(letter, lettercounts.get(letter) + 1);
    } else {
      lettercounts.set(letter, 1);
    }
  }

  let keys = Array.from(lettercounts.keys());
  let vals = Array.from(lettercounts.values());
  for (let i = 0; i < vals.length; i++) {
    vals[i] = vals[i] / dna.length;
  }
  let data = [
    {
      labels: keys,
      values: vals,
      type: "pie",
      // x: keys,
      // y: vals,
      // type: 'bar'
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
}

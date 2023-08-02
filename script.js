function printMultiplicationTables(startNumber) {
    let outputDiv = document.getElementById("output");
    let tablesHtml = "";
  
    for (let i = startNumber; i <= 20; i++) {
      tablesHtml += `<h2 class="mb-3">Multiplication Table of ${i}</h2>`;
      tablesHtml += '<table class="table table-bordered table-striped">';
      tablesHtml += '<thead><tr></tr></thead><tbody>';
      for (let j = 1; j <= 10; j++) {
        tablesHtml += `<tr><td>${i}</td><td>X</td><td>${j}</td><td>=</td><td>${i * j}</td></tr>`;
      }
      tablesHtml += "</tbody></table>";
    }
  
    outputDiv.innerHTML = tablesHtml;
  }
  
  const startNumber = parseInt(prompt("Enter the starting number:"));
  printMultiplicationTables(startNumber);
  
let form = document.getElementById("rollno-form");
let data = "";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let rollno = document.getElementById("rollno-input").value;
  console.log(rollno);
  let xmlDoc

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "data.xml", true);

  xhr.timeout = 2000; // time in milliseconds

  xhr.onload = function () {
    // Request finished. Do processing here.
    xmlDoc = this.responseXML; // <- Here's your XML file
    console.log(xmlDoc.getElementsByTagName("student")[0].textContent)
  };

  xhr.send(null);
});

// function loadXMLDoc() {
//   let xhttp = new XMLHttpRequest();
//   let xmlDoc;
//   xhttp.open("GET", "data.xml", true);
//   xhttp.send();
//   xmlDoc = xhttp.responseText;
//   return xmlDoc;
// }

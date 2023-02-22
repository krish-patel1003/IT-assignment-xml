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
    // console.log(xmlDoc.getElementsByTagName("student")[1].firstElementChild.innerHTML)
    students = xmlDoc.getElementsByTagName("student")
    let flag = false
    for (let i = 0; i < students.length; i++) {
        let stud = students[i]
        data_rollno = stud.firstElementChild.innerHTML
        if(rollno === data_rollno){
            console.log(stud.textContent)
            flag = true
        }
    }
    if(!flag){
        console.log("Data not found");
    }
  };

  xhr.send(null);
});


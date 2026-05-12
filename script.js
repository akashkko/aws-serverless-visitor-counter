const apiURL = "https://d2rqf1sf02.execute-api.ap-southeast-1.amazonaws.com/prod/views";

fetch(apiURL)
.then(response => response.json())
.then(data => {

    document.getElementById("visitor-count").innerText = data.views;

})
.catch(error => {

    console.log("Error:", error);

    document.getElementById("visitor-count").innerText = "Error";

});
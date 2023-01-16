// Use .innerHTML to render a Buy! button inside the div container

const container = document.getElementById("container");
container.innerHTML = "<button onclick='Buy()'>Buy!</button>";

function Buy() {
  container.innerHTML += "<p>Thank you for buying!</p>";
}

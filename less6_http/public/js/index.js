const form = document.getElementById("register_form");
const sendData = (data) => {
  fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then()
    .catch();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  sendData(data);
});

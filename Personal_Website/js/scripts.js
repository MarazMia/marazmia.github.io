document.addEventListener("DOMContentLoaded", () => {
    fetch("/includes/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not find navbar file");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error(error));
});
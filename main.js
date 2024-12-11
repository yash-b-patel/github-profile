function Usearch() {
    const userId = document.getElementById("txtUser").value.trim();
    if (!userId) {
        alert("Please enter a GitHub User ID.");
        return;
    }

    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${userId}`;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                document.getElementById("profile").classList.remove("hidden");
                document.getElementById("avatar").src = data.avatar_url || "Not Available";
                document.getElementById("name").textContent = data.name || "Not Available";
                document.getElementById("bio").textContent = data.bio || "Not Available";
                document.getElementById("company").textContent = data.company || "Not Available";
                document.getElementById("location").textContent = data.location || "Not Available";
                document.getElementById("email").textContent = data.email || "Not Available";
                document.getElementById("repos").textContent = data.public_repos || "0";
                document.getElementById("followers").textContent = data.followers || "0";
                document.getElementById("following").textContent = data.following || "0";
                document.getElementById("created").textContent = data.created_at || "Not Available";
                document.getElementById("updated").textContent = data.updated_at || "Not Available";
            } else if (xhr.status === 404) {
                alert("User not found. Please try again.");
            } else {
                alert("Error fetching user data.");
            }
        }
    };

    xhr.send();
}

window.onload = Usearch();

const userPhotos = document.querySelectorAll(".actor-card img");

userPhotos.forEach(photo => {
    photo.addEventListener("click", () => {
        alert("china");
    });
});

const userName = document.querySelectorAll(".actor-card h2");

userName.forEach(name => {
    name.addEventListener("click", () => {
        alert("china");
    });
});
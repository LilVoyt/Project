const actorCardsContainer = document.querySelector('.actor-cards');

actors.forEach(actor => {
    const actorCard = document.createElement('div');
    actorCard.className = 'actor-card';

    const img = document.createElement('img');
    img.src = actor.profilePicture ? actor.profilePicture : 'customer-photo/default-profile-picture.jpg';
    img.onerror = function() {
        this.src = 'customer-photo/default-profile-picture.jpg';
      };
    img.alt = `${actor.firstName} ${actor.lastName}`;

    const name = document.createElement('h2');
    const fullName = `${actor.firstName} ${actor.lastName}`.trim();
    name.textContent = fullName ? fullName : 'NoName';

    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';

    actor.contacts.forEach(contact => {
        const a = document.createElement('a');
        a.href = contact;
        a.target = "_blank";

        const icon = document.createElement('img');
        icon.src = getSocialIcon(contact);
        icon.alt = contact;

        a.appendChild(icon);
        socialLinks.appendChild(a);
    });

    actorCard.appendChild(img);
    actorCard.appendChild(name);
    actorCard.appendChild(socialLinks);

    actorCardsContainer.appendChild(actorCard);
});

function getSocialIcon(url) {
    if (url.includes("twitter.com")) {
        return "icons/twitter.svg";
    } else if (url.includes("instagram.com")) {
        return "icons/instagram.svg";
    } else if (url.includes("facebook.com")) {
        return "icons/facebook.svg";
    }
    return "icons/default.svg";
}

// const userPhotos = document.querySelectorAll(".actor-card img");

// userPhotos.forEach(photo => {
//     photo.addEventListener("click", () => {
//         alert("china");
//     });
// });

// const userName = document.querySelectorAll(".actor-card h2");

// userName.forEach(name => {
//     name.addEventListener("click", () => {
//         alert("china");
//     });
// });


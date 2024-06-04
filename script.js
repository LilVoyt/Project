const actorCardsContainer = document.querySelector('.actor-cards');

actors.forEach(actor => {
    const actorCard = document.createElement('div');
    actorCard.className = 'actor-card';

    const name = document.createElement('h2');
    const fullName = `${actor.firstName} ${actor.lastName}`.trim();
    name.textContent = fullName ? fullName : 'NoName';

    const img = document.createElement('img');
    img.src = actor.profilePicture ? actor.profilePicture : 'customer-photo/default-profile-picture.jpg';
    img.onerror = function() {
        this.src = 'customer-photo/default-profile-picture.jpg';
      };
    img.alt = `${actor.firstName} ${actor.lastName}`;

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

let actorList = [];

const userPhotos = document.querySelectorAll(".actor-card img");
const userName = document.querySelectorAll(".actor-card h2");
const bottomList = document.querySelector('.bottom-list');
const bottomListUl = bottomList.querySelector('ul');

function addActorToList(actorName) {
    if(actorList.length == 0){
        const textBox = document.querySelector(".bottom-list h2")
        bottomList.removeChild(textBox);
    }

    if (actorList.includes(actorName)) {
        alert('china');
    } else {
        actorList.push(actorName);
        const actorNameLi = document.createElement('li');
        actorNameLi.textContent = actorName;
        bottomListUl.appendChild(actorNameLi);
    }
    console.log(actorList);
}


userPhotos.forEach(photo => {
    photo.addEventListener("click", () => {
        const parentDiv = photo.closest('.actor-card');
        const actorName = parentDiv.querySelector('h2').textContent;
        addActorToList(actorName);
        parentDiv.style.backgroundColor = 'lightblue';
    });
});

userName.forEach(name => {
    name.addEventListener("click", () => {
        const parentDiv = name.closest('.actor-card');
        const actorName = name.textContent;
        addActorToList(actorName);
        parentDiv.style.backgroundColor = 'lightblue';
    });
});


const saveButton = document.getElementById("saveChoose");

saveButton.addEventListener('click', ()=>{
    let actors = actorList.join(', ');
    alert(`You choosed: ${actors}`);
    while (bottomListUl.firstChild) {
        bottomListUl.removeChild(bottomListUl.firstChild);
    }
    actorList.length = 0;
    const boxInnerText = document.createElement('h2');
    boxInnerText.textContent = "You choosed";
    bottomList.appendChild(boxInnerText);
    const actorDivs = document.querySelectorAll('.actor-card');
    actorDivs.forEach(actor => {
        actor.style.backgroundColor = 'white';
    })
    }
);

const deleteButton = document.getElementById('deleteChoose');

deleteButton.addEventListener('click', () => {
    while (bottomListUl.firstChild) {
        bottomListUl.removeChild(bottomListUl.firstChild);
    }
    actorList.length = 0;
    const boxInnerText = document.createElement('h2');
    boxInnerText.textContent = "You choosed";
    bottomList.appendChild(boxInnerText);
    const actorDivs = document.querySelectorAll('.actor-card');
    actorDivs.forEach(actor => {
        actor.style.backgroundColor = 'white';
    })
});
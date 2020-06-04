/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/travisgent")
  .then(response => {
    let newCard = cardMaker(response.data);
    document.querySelector(".cards").appendChild(newCard);
    console.log(response);
  })
  .catch( err => {
    console.log(error);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
let parentDiv = document.querySelector(".cards");
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>

        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(data) {
  let divCard = document.createElement("div");
  divCard.setAttribute("class", "card");
    let userImg = document.createElement("img");
    userImg.src = data.avatar_url;
    divCard.appendChild(userImg);

    let divCardInfo = document.createElement("div");
    divCardInfo.setAttribute("class", "card-info");
    divCard.appendChild(divCardInfo);
      let nameHThree = document.createElement("h3");
      nameHThree.setAttribute("class", "name");
      nameHThree.textContent = `${data.name}`;
      divCardInfo.appendChild(nameHThree);

      let userNameP = document.createElement("p");
      userNameP.setAttribute("class", "username");
      userNameP.textContent = `${data.login}`;
      divCardInfo.appendChild(userNameP);

      let locationP = document.createElement("p");
      locationP.textContent = `Location: ${data.location}`;
      divCardInfo.appendChild(locationP);

      let profileP = document.createElement("p");
      profileP.textContent = `Profile: `;
      divCardInfo.appendChild(profileP);
        let profileLink = document.createElement("a");
        profileLink.textContent = `${data.html_url}`;
        profileLink.href = `${data.html_url}`;
        profileP.appendChild(profileLink);
      
      let followersP = document.createElement("p");
      followersP.textContent = `Followers: ${data.followers}`;
      divCardInfo.appendChild(followersP);

      let followingP = document.createElement("p");
      followingP.textContent = `Following: ${data.following}`;
      divCardInfo.appendChild(followingP);

      let bioP = document.createElement("p");
      bioP.textContent = `Bio: ${data.bio}`;
      divCardInfo.appendChild(bioP);

      return divCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

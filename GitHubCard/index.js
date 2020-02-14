/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/David-Molinari')
    .then( response => {
      console.log(response);
    })

    .catch( error => {
        console.log("Error:", error);
    })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

let cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/David-Molinari')
    .then( response => {
      let comp = componentMaker(response);
      cards.appendChild(comp);
    })

    .catch( error => {
        console.log("Error:", error);
    })

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];


followersArray.forEach( item => {
  let string = 'https://api.github.com/users/' + item;
  axios.get(string)
    .then( response => {
      let comp = componentMaker(response);
      cards.appendChild(comp);
    })

    .catch( error => {
        console.log("Error:", error);
    })

})

// axios.get('https://api.github.com/users/David-Molinari')
//     .then( response => {
//       let comp = componentMaker(response);
//       cards.appendChild(comp);
//     })

//     .catch( error => {
//         console.log("Error:", error);
//     })



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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


function componentMaker (object) {
  let div = document.createElement('div');
  div.classList.add('card');

  let img = document.createElement('img');
  img.src = object.data.avatar_url;

  let div2 = document.createElement('div');
  div2.classList.add('card-info');

  let h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = object.data.name;

  let p = document.createElement('p');
  p.classList.add('username');
  p.textContent = object.data.login;

  let p2 = document.createElement('p');
  p2.textContent = 'Location: ' + object.data.location;

  let p3 = document.createElement('p');
  p3.textContent = 'Profile:';

  let a = document.createElement('a');
  a.href = object.data.html_url;
  a.textContent = object.data.html_url;

  let p4 = document.createElement('p');
  p4.textContent = 'Follower: ' + object.data.followers;

  let p5 = document.createElement('p');
  p5.textContent = 'Following: ' + object.data.following;

  let p6 = document.createElement('p');
  p4.textContent = 'Bio: ' + object.data.bio;

  div.appendChild(img);
  div.appendChild(div2);
  div2.appendChild(h3);
  div2.appendChild(p);
  div2.appendChild(p2);
  div2.appendChild(p3);
  p3.appendChild(a);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);

  return div;

}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

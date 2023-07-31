// const form = document.querySelector("#user-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inputName = document.querySelector("#name");
//   console.log(inputName.value);

//   const inputLastName = document.querySelector("#last-name");
//   console.log(inputLastName.value);

//   const userAge = document.querySelector("#age");
//   console.log(userAge.value);

//   const avatarImg = document.querySelector("#avatar");
//   console.log(avatarImg.value);

//   //----------------------------------------------------------------------------

//   const container = document.querySelector("#card-container");

//   const img = document.createElement("img");
//   const cardBody = document.createElement("div");
//   const cardName = document.createElement("h5");
//   const cardLastName = document.createElement("h5");
//   const cardAge = document.createElement("h5");

//   img.className = "card-img-top";
//   cardBody.className = "card-body";
//   cardName.className = "card-title";
//   cardLastName.className = "card-title";
//   cardAge.className = "card-text";

//   // Add Content
//   img.src = avatarImg.value;
//   cardName.textContent = inputName.value;
//   cardLastName.textContent = inputLastName.value;
//   cardAge.textContent = userAge.value;

//   // positioning nodes
//   container.appendChild(img);
//   container.appendChild(cardBody);
//   cardBody.appendChild(img);
//   cardBody.appendChild(cardName);
//   cardBody.appendChild(cardLastName);
//   cardBody.appendChild(cardAge);
// });


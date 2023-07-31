const button = document.querySelector("#send");

console.log(button);

button.addEventListener("click", (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const birthdate = document.querySelector("#birthdate");
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.querySelector("#country");
  const description = document.querySelector("#description");

  const persona = {
    firstName: firstName.value,
    lastName: lastName.value,
    birthdate: birthdate.value,
    gender: gender.value,
    country: country.value,
    description: description.value,
  };
  console.log(persona);
  // createData(persona) // Call to createData function
});

//------------------Send data to Firebase-----------------------
const createData = async (people) => {
  const dataBase = await fetch(
    "https://kodemia-form-26js-rc-default-rtdb.firebaseio.com/.json",
    {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(people),
    }
  );
};

// -------------fetch data from firebase using GET verb---------------

const getData = async () => {
  const response = await fetch(
    "https://kodemia-form-26js-rc-default-rtdb.firebaseio.com/.json",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  console.log(data);

  // ordered object
  const array = Object.entries(data);
  array.map((item) => {
    const fireBaseObject = {
      id: item[0],
      name: item[1].firstName,
      last_Name: item[1].lastName,
      gender: item[1].gender,
      birthdate: item[1].birthdate,
      country: item[1].country,
      text: item[1].description,
    };
    console.log(fireBaseObject);

    // Infor Card
    const container = document.querySelector("#card-container");
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardName = document.createElement("h5");
    const cardLastName = document.createElement("h5");
    const cardAge = document.createElement("h5");
    const cardGender = document.createElement("h5")

    img.className = "card-img-top ";
    cardBody.className = "card-body";
    cardName.className = "card-title";
    cardLastName.className = "card-title";
    cardAge.className = "card-text";
    cardGender.className = "card-text"

    img.src;
    cardName.textContent = item[1].firstName
    cardLastName.textContent = item[1].lastName
    cardAge.textContent = item[1].birthdate
    cardGender.textContent= item[1].gender

    container.appendChild(img);
    container.appendChild(cardBody);
    cardBody.appendChild(cardName);
    cardBody.appendChild(cardLastName);
    cardBody.appendChild(cardAge);
    cardBody.appendChild(cardGender)
  });
};
getData();

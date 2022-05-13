//Load data clicking the button

//Base URL
const BASE_URL = `https://api.thedogapi.com/v1/breeds`;

// Make Async Function
const loadDog = async () => {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  displayDog(data);
};

const displayDog = dogList => {
  const dogContainer = document.getElementById('dog-contianer');
  const firstTenData = dogList.slice(0, 12);
  console.log(firstTenData);
  firstTenData.forEach(dog => {
    const div = document.createElement('div');
    div.className = 'col-md-6 col-lg-4';
    div.innerHTML = `
      <img style="width: 300px; height: 250px; object-fit:cover; border-radius: 4px; border: 1px solid #ccc; padding: 4px" src="${dog.image.url}">
      <h4>${dog.name}</h4>
      <p><small>${dog.temperament}</small></p>
    `
    dogContainer.appendChild(div)
  });
}

function HouseController(){
    //CONTROLLERS ARE RESPONSIBLE FOR 
      //INTERACTING WITH THE DOM/USER
      //COMMUNICATION WITH THE SERVICE
    
      //PRIVATE
var houseService = new HouseService(drawHouses)

function drawHouses(houses){
    var template = ''
    for (let i = 0; i < houses.length; i++) {
      const house = houses[i];
      template += `
      <div>
        <img src="${house.imgUrl}" alt="">
        <h3>Bedrooms: ${house.bedrooms}</h3>
        <h3>Bathrooms: ${house.bathrooms}</h3>
        <h3>Levels: ${house.levels}</h3>
        <h3>Year: ${house.year}</h3>
        <h3>Price: ${house.price}</h3>
        <p>Description: ${house.description}</p>
        <button onclick="app.controllers.houseController.deleteHouse(${house._id})">Delete</button>
      </div>
    ` 
    }
    document.getElementById('houses').innerHTML = template
  }

//PUBLIC
this.addHouse = function addHouse(e){
    e.preventDefault();
    var data = e.target
    var newHouse = {
      img: data.img.value,
      bedrooms: data.bedrooms.value,
      bathrooms: data.bathrooms.value,
      levels: data.levels.value,
      year: data.year.value,
      price: data.price.value
    }
    houseService.addHouse(newHouse)
    data.reset()
  }

  this.deleteHouse = function deleteHouse(id) {
    houseService.deleteHouse(id)
  }

}
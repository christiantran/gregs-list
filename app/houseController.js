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
      <div class="card mt-4 mb-4" style="width: 30rem;">
        <img class="card-img-top" src="${house.imgUrl}" alt="Card image cap">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Bedrooms: ${house.bedrooms}</li>
        <li class="list-group-item">Bathrooms: ${house.bathrooms}</li>
        <li class="list-group-item">Levels: ${house.levels}</li>
        <li class="list-group-item">Year: ${house.year}</li>
        <li class="list-group-item">Price: ${house.price}</li>
        </ul>
        <div class="card-body">
        <p class="card-text">Description: ${house.description}</p>
        <button class="btn btn-danger" onclick="app.controllers.houseController.deleteHouse('${house._id}')">Delete</button>
      </div>
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
function CarController(){
    //CONTROLLERS ARE RESPONSIBLE FOR 
      //INTERACTING WITH THE DOM/USER
      //COMMUNICATION WITH THE SERVICE
    
      //PRIVATE
      var carService = new CarService(drawCars)
    
      function drawCars(cars){
        var template = ''
        for (let i = 0; i < cars.length; i++) {
          const car = cars[i];
          template += `
          <div class="card mt-4 mb-4" style="width:30rem;">
            <img class="card-img-top" src="${car.imgUrl}" alt="Card image cap">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Make: ${car.make}</li>
            <li class="list-group-item">Model: ${car.model}</li>
            <li class="list-group-item">Year: ${car.year}</li>
            <li class="list-group-item">Price: ${car.price} <button class="btn btn-success" onclick="app.controllers.carController.discountCar('${car._id}',${car.price})">Discount</button></li>
            </ul>
            <div class="card-body">
            <p class="card-text">Description: ${car.description}</p>
            <button class="btn btn-danger" onclick="app.controllers.carController.deleteCar('${car._id}')">Delete</button>
          </div>
          </div>
        ` 
        }
        document.getElementById('cars').innerHTML = template
      }
    
    
      //PUBLIC
      this.addCar = function addCar(e){
        e.preventDefault();
        var data = e.target
        var newCar = {
          img: data.img.value,
          make: data.make.value,
          model: data.model.value,
          year: data.year.value,
          price: data.price.value
        }
        carService.addCar(newCar)
        data.reset()
      }
      this.deleteCar = function deleteCar(id) {
        carService.deleteCar(id)
      }
      this.discountCar = function discountCar(id, price){
        carService.discountCar(id, price)
      }
    
    
    
    }
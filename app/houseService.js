function HouseService(cb){
var baseUrl = "https://bcw-gregslist.herokuapp.com/api/houses"

var houses = []

function House(img, bedrooms, bathrooms, levels, year, price, description) {
    this.imgUrl = img || "//placehold.it/200x200"
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.year = year
    this.price = price
    this.description = description || "No description provided"
}

function loadHouses() {
    $.get(baseUrl).then(res => {
      cb(res.data)
    })
  }
  loadHouses()

//Public

this.addHouse = function addHouse(house) {
    var newHouse = new House(house.img, house.bedrooms, house.bathrooms, house.levels, house.year, house.price)
    $.post(baseUrl, newHouse)
      .then(res => {
        loadHouses()
      })
  }

  this.deleteHouse = function deleteHouse(id) {
    $.ajax({
      method: 'DELETE',
      url: baseUrl + '/' + id
    }).then(res => {
      loadHouses()
    })
  }

}
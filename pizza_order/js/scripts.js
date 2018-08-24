function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
};

//to determine the pizza price

// if(this.size==="Medium"){
//   this.size += this.toppings.lenght
//
// }

Pizza.prototype.price=function(){
  price = 10;

  if(this.size === "Family"){
    price +=3;
  } else if (this.size === "Large"){
    price +=2;
  } else {
    price +=1;
  }
}



$(document).ready(function() {
$("form#pizza-order-form").submit(function(event){
  event.PreventDefault();

  var pizzaSize = $("input:radio[name='size']:checked").val();



});




});

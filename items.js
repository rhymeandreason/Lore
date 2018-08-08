var items = {
  "acorn": "acorn.svg",
  "coin": "coin.svg",
  "red_apple": "527-red-apple.svg",
  "apple": "527-red-apple.svg",
  "pear": "528-pear.svg",
  "strawberry": "531-strawberry-1.svg",
  "lemon": "526-lemon.svg",
  "tangerine": "525-tangerine.svg",
  "tomato": "533-tomato.svg",
  "bread": "536-bread.svg",
  "drumstick": "538-poultry-leg.svg",
  "hamburger": "541-hamburger-3.svg",
  "coffee": "567-hot-beverage-2.svg",
  "soft_serve": "551-soft-ice-cream-1.svg",
  "cherries": "530-cherries.svg",
  "pizza": "543-pizza-1.svg",
  "onigiri": "546-rice-ball.svg",
  "donut": "554-doughnut-1.svg",
  "sushi": "549-sushi.svg",
  "mai-tai": "572-tropical-drink.svg",
  "beer": "577-beer-mug.svg",
  "rice-bowl": "547-cooked-rice.svg",
  "cookie": "556-cookie.svg"
}

//recipes are 2 or 3 items
//for simplicity in v1, recipes have to be 3 different items
var recipes_2 = {
  "strawberry soft_serve": "strawberry_soft_serve",
  "chocolate soft_serve": "chocolate_soft_serve"
}
var recipes_3 = {
  "lemon sugar ice": "lemonade",
  "bacon lettuce tomato": "blt_sandwich",
  "cherries soft_serve chocolate": "classic_sundae"
}

function getRecipe(item1, item2, item3){
  var possible = [];
  var possible2 = [];
  var recipes = Object.keys(recipes_3);
  for(var i in recipes) {
    var test = recipes[i];
    if (test.includes(String(item1))){
      possible.push(recipes[i]);
    }
  }
  if (possible.length > 0){
    for (var i in possible){
      var test = possible[i];
      if (test.includes(String(item2))){
        possible2.push(possible[i]);
      }
    }

    if (possible2.length > 0){
      for (var i in possible){
        var test = possible[i];
        if (test.includes(String(item2))){
          //return test;
          return recipes_3[test];
        }
      }

    } else {
      return false;
    }

  } else {
    return false;
  }

}

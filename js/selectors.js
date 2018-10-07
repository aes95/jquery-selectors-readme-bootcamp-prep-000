// declare your functions here...
function paragraphSelector(){
  return $('p');
}
function lastImageSelector(){
  return $('img:last');
}
function ninjaBabySelector(){
  return $('#baby-ninja');
}
function divSelector(){
  return $('.pics');
}
function firstListItem(){
  const item =  $('#pic-list');
  console.log(item);
}

firstListItem();
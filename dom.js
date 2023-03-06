//console.log(document.domain);
var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
items[i].style.backgroundColor='bold';
}
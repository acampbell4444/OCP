


var aTags = document.getElementsByTagName('a');
var searchText = 'Lead Test';
var found;

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent == searchText) {
    found = aTags[i];
    return found;
  }
}




// pickAsbestos = function()  {
//   var choices = document.getElementsClassName('k-link k-header');

// for (var i = 0; i < choices.length; i++) {
//   if (aTags[i].textContent.contains(searchText)) {
//     found = aTags[i];
//     console.log(found)
//     break;
//   }
// }
// found.click();

// }

// setTimeout(pickAsbestos), 3000));



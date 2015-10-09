//Ellen Thomson week 7 exercise 7.1




// Create an HTML document that contains a DIV with an ID attribute. 
// Use an external JavaScript file to access the DOM and create a 
// heading and a paragraph of text in the DIV. Then, 
// center the paragraph text by setting the alignment attribute with JavaScript.

//create the elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");


//create a text node

var h1Text = document.createTextNode("Nina's Cafe");
var paraText = document.createTextNode("Nina's Cafe is now serving Wine and Beer.");
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

document.getElementById("ninas").appendChild(newHeading);
document.getElementById("ninas").appendChild(newParagraph);

//center the paragraph text
newParagraph.style.textAlign="right"
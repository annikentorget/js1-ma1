// question 1
const cat = {
    complain: function(){
        console.log("Meow!");
    }
}

// question 2
var heading = document.querySelector("h3");

// question 3
 heading.style.fontSize = "2em";

// question 4
heading.classList.add("subheading");
console.log(heading.className);

// question 5
var paragraphs = document.querySelector("p");

// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p> New paragraph </p>`;

// question 7
function catArray(){
    for(let i = 0; i <catArray.length; i++){
        const cats = [
            {
                name: "Blob",
                age: 10
            },
            {
                name: "Harold",
            },
            {
                name: "Blurt",
                age: 21
            }
        ];
        console.log(catArray[i].name);
    }
}

// question 8
function catFunction(catArray) {
    let catsHTML = "";
    for (let i = 0; i < catArray.length; i++) {
        catsHTML += `<h5>${catArray[i].name}</h5>`;
    }
    console.log(catsHTML)

    return catsHTML;
}

// question 9
resultsContainer.innerHTML = catFunction(cats);

// question 10
function catFunction(catArray) {
    catsHTML += `<p>${catArray[i].age}</p>`;
    if(age === false); {
        console.log("Age unknown");
    }
}

const catWrap = `<div>
                    <h5>${catArray[i].name}</h5>
                    <p>${catArray[i].age}</p>
                </div>`;




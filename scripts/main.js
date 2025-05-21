import { database } from "./database.js";



/*
Render all the candy
*/

// Declare variable and set its value to the DOM element with a class of "candy"
const candyArticleRef = document.querySelector(".candy")

// Declaring allSections so that I can build up a single, large string of all sections to be placed into the DOM
let allSections = ""

// Iterate the array of candy objects
for (const piece of database.candy) {

    // Concatenate the `allSections` variable with a new HTML section string
    allSections += `<section>
    <h2>${piece.name}</h2>
    Flavor is ${piece.flavor} and is colored ${piece.color}
    </section>`
}

// Dynamically update the candy DOM element's innerHTML with the giant string that contains all the sections
candyArticleRef.innerHTML = allSections


/*
Render all the clowns
*/
const clownArticleRef = document.querySelector(".clowns")
let allClownSections = ""

for (const clown of database.clowns) {
    allClownSections += `<section>
        <h2>${clown.name}</h2>
        Specialty is ${clown.speciality} and wears size ${clown.shoeSize} shoe
    </section>`
}

clownArticleRef.innerHTML = allClownSections

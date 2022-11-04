// Variables ~~~~~~~~~~~~~~~~~~~~~~~

let count = 0
let countEl = document.getElementById("count-el")

// 1. Grab the save-el paragraph and store it in a variable called saveEL

let saveEL = document.getElementById("save-el")


// ~~~~~ Start Button (Increment on clicks) ~~~~~

// Initialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to increment the new count


function increment() { 
    count += 1    
    console.log(count)
    countEl.textContent = count
}



// ~~~~~ Start Save Button function ~~~~~~~



// 1. Create a function, save(), which logs out the count when it's called


function save() {
    
    // 2. Create a variable that contains both the count and the dash.
    let saved = " " + count + "   -   "

    // 3. Render the variable in the SaveEL using innerText, don't delete the previous saved count entries.
    saveEL.textContent += saved

    // 4. Set the count to 0 after every saved count entries.
    count = 0
    countEl.textContent = count
}



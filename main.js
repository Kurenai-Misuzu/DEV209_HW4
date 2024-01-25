document.addEventListener("DOMContentLoaded", function (event) {
    // the submit button
    let submitButton = document.getElementById("submitButton");

    // the array that the Food objects will be stored in
    let foodArray = [];
    // constructor for the food object
    let Food = function(name, calories){
        this.name = name;                                                
        this.calories = parseFloat(calories);
    };

    // counter for the total amount of calories
    let totalCalories = 0;

    // called when the submit button is clicked
    submitButton.addEventListener("click", function(){
        // declare html elements as varialbes
        let name = document.getElementById("nameInput");
        let calories = document.getElementById("caloriesInput");
        let result = document.getElementById("resultInput");

        // create a new Food object and insert the values from the html into it
        foodArray.push(new Food(name.value, calories.value));
        console.log(foodArray);
        
        // clear the html textboxes
        name.value = "";
        calories.value = "";

        // reset calorie count
        totalCalories = 0;
        // loop that goes through the array and counts all the calories
        for (let i = 0; i < foodArray.length; i++){
            totalCalories += foodArray[i].calories;
        }

        // set the html textbox to print the total calories
        result.value = totalCalories;
    });

});
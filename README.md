# DEV209_HW4

Homework 4 for DEV209

## Calorie Tracking Program

This project contains a simple web application that helps users track their calorie intake.

## Features

- Users can enter a food name along with the number of calories it contains.
- Upon submission, a food object is created and added to an array to keep track of all entries.
- The program outputs the contents of the array to the console for verification.
- The total number of calories consumed is displayed on the screen and updated with each entry.

## Getting Started

To use the application, simply enter the name of the food and the number of calories into the respective fields and click the 'Submit' button.

## Development Notes

- The application starts with an initial state. This is to demonstrate functionality and can be adjusted as needed.
- Each food entry's calorie value is parsed as an integer to ensure accurate calculations.

### Constructor Tip

When creating a new food object, calories are converted to a number using the following line within the constructor:

```javascript
this.calories = parseInt(pCalories);

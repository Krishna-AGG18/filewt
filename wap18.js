// Alert Box Example
alert("This is an alert message box.");

// Confirm Box Example
var userPreference;
if (confirm("Do you want to save changes?")) {
    userPreference = "Data saved successfully!";
} else {
    userPreference = "Save Cancelled!";
}

// Prompt Box Example
var name = prompt("Enter your name:", "John");
if (name) {
    alert("You entered: " + name);
} else {
    alert("You did not enter anything.");
}
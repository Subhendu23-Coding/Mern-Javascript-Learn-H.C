// Switch Statement Syntax:

switch (key) {
    case value:
        // code to be executed if the key matches the value
        break;

    default:
        // code to be executed if no case matches the key
        break;
}

// Using switch with Month

const month = "March";  // The key to be checked in switch

switch (month) {
    case "January":
        console.log("January");
        break;
    case "February":
        console.log("February");
        break;
    case "March":
        console.log("March");  // This will be executed because month is March
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("default case match");  // This will not be executed
        break;
}


// Example 2: Switch Without Break (Fall-Through)

// const day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Start of the week");
//     case "Tuesday":
//         console.log("Second day");
//     case "Wednesday":
//         console.log("Mid-week");
//     case "Thursday":
//         console.log("Almost Friday");
//     case "Friday":
//         console.log("Weekend is coming");
//     default:
//         console.log("Weekend");
// }
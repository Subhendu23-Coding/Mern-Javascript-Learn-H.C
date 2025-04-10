// const tinderUser = new Object() //  singleton object

const tinderUser = {} // non-singleton object

// let tinderUser = {}; // Initialize the tinderUser object

// tinderUser.id = "123asd";
// tinderUser.name = "Subho";
// tinderUser.isLoggedIn = false; // Boolean value, corrected the typo ("isLoggdIn" to "isLoggedIn")

// console.log(tinderUser);




const regulerUser = {
    email : "subhendu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Subhendu",
            lastname: "Majhi"
        }
    }
}

// console.log(regulerUser.fullname);

// console.log(regulerUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};


// console.log(obj1);

const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);

const obj3Spread = {...obj1, ...obj2, ...obj4};
// console.log(obj3Spread);



const users = [
    {
        id: 1,
        email: "subhendu@gmail.com"
    },
    {
        id: 1,
        email: "subhendu@gmail.com"
    },
    {
        id: 1,
        email: "subhendu@gmail.com"
    }
]

// console.log(users[1].email);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // => true
// console.log(tinderUser.hasOwnProperty('isLogged'));   // => false


//Destructuring an Object

const course = {
    courseName: "js-Code",
    price: "999",
    courseInstructor: "Subhendu"
}

// console.log(course.courseInstructor);


const { courseInstructor: instructor } = course;

// console.log(instructor);


// const navbar = ({company}) => {

// }
// navbar(company = "Subhendu");


// {
//     "name": "Subhendu",
//     "courseName": JS-Code,
//     "price": "free"
// }

// [
//     {},
//     {},
//     {},
// ]
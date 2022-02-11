let message = 'Hello!'; // define variable and assign value
alert(message); // prints message variable ... which in this case is Hello!

let user = 'Josh',
    age=25, // Note 25 is a integer so no '' is needed like for a string
    height='152cm'; //here 3 variables have been made with assigned values

var user2='Saki' //var is literally the old method of variable, there are subtle differences to let 
// just use let.

let read = 'troy';
let read = 'rome'; // declare variable only once or you'll get syntax error


//however... in the below instance it would just change the value
let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);

read = message; // here read now = message which is "Hello" this is useful for copying values into new variables

//cannot use - must use _ or camelCase is good for variables

let friends_of_friends = 2;
let JerrysJeepsAreGood = 'Hell yeah jerry' 



//const can be used to ensure a variable is not reassigned
const Name = 'Josh';
alert(Name);


// Constants are often used for difficult to remember bits of code such as colour codes
// CAP LOCKS FOR DIFFICULT TO REMEMBER STUFF ONLY
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// this will say say Hello John! note you must use `` not "" or '' to embed a variable within.
let name = "John";
console.log(`Hello, ${name}!`);

// boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert (isGreater); // will display 'true' because 4 is greater than 1 get it?

let day = null; // null refers to nothing, empty or value unknown so this code would state day is unknown

let month;
alert(month); // assigns month as undefined, possibly useful for later in a project if a lead decided on a variable name.

//Next we have object types which store multiple collections of things so are more complex, string and integers are known as primitive
//symbol type is used to create a unique identifier for objects

//typeof operator returns the type of the argument
typeof 1 // would show "number" because 1 is a number

typeof "josh" // would return "string"

typeof Math // "object" as Math is a library.... (I think) so it's complex not just a string

typeof alert // "function" alert prints what it's told to print that's it's purpose.



//html scripting //
<script>
       function multiply (number) { // function is named multiply and number is the parameter it's just a name it means nothing it could be dog and still produce integer results.
            console.log (number * number) // console log is saying "Whatever number is * by number" so when I've put multiply is (1+1) it's saying ahhh number is 2 so 2 x 2
            // console.log will then present the result in the console//
    }  
     multiply (1+1) 
</script>// multiply's parameter (number)<-- remember could literally be anything. Has been assigned (1+1) so when I put number, it sees 1+1
//html scripting //
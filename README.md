
![Logo](./assignment-quiz/assets/images/quiz-logo.png)

# Homework 4 notes

    1.	Coding quiz doesn’t have to be javascript (can be about anything)
    2.	End game function at end of timer
    3.	Header contains timer and scores
    4.	four or five questions
    5.	Hide div’s - make div’s visible
    6.	Timer keeps running until it gets to 0 or less
    7.	Or, run out of questions if there’s still time left that runs end game function
    8.	timer or end of quiz stops game
    9.

Notes from Zoom: 
- Goal is to create dynamic, interactive webpages.
- Ways to manipulate the DOM using JavaScript: 
    1. Elements, 
    2. Append, 
    3. Query selector, query selector all,
    4. Set attributes, 
    5. Set interval..

How to use JavaScript to react to events. 
Learn to make webpages interactive by listening and responding to events. 

- addEventListener()

# week-4-web-api
Activities 1-10
Document Object Model - "DOM"
Get and append elements into the DOM (browser)
Mental clarity and top focus, doesn't hurt to read the problem out loud to yourself in a quiet room. 

![API's](./assignment-quiz/assets/images/api.png)

All done via JavaScript.'

The mini project is same as the challenge. 

Using conditional statements to add "control flow".

Control the flow of how the actions take place. 

Conditional statements to add decision making to the program. 

AddEventListener() just adds a new layer, need to pass two parameters: 
1. What event to listen for
2. Function which will execute

What is a data attribute? Allows you to store info on an HTML element. 
Example: 

Data Attribute
![Data attribute](./assignment-quiz/assets/images/data-attribute.png)

document.body.children

How can you access a child element? Dot notation.

Access Attributes
setAttribute


Elements:
getElementById
setAttributes
querySelector
querySelectorAll
createElement

append the element so it shows up in the HTML. 

Create an ordered list..



createElement: 
textContent:
appendChild:
setAttribute


At 56 min he does a review..


We use these to access the DOM and post new info on it.



3 web api methods:

1. createElement
2. 

## Event Bubbling
"Handle the boogie man out of the box."
Happens by default in JavaScript.
When an event like a click takes place, it will traverse up the dom tree and create a chain reaction of events. 


currentTarget event property returns element whose event listeners triggered the event. 


"always make it work, then make it work better."

stopPropigation
Stops event from traveling up DOM tree. 

Events = key down, key up (games), click, etc.


Day 3, Local Storage

For storing a few values in variables..
For when you refresh the page, data will stay..

Save data so it persists using client-side storage. 
Store a few key values, not much more.

Recall bits of info like, login, to do list, etc.

Inspect page, go to applications, you will see local stoage. 

Open that. 

"Go to the browser and get me the "count" key."

How to put in local storage? setItem

setItem
getItem

trim function

We need to use json.stringify to convert to string.
Humans read and write.
Computers parse and generate.

Json is text only, not an object.

Language independent.

Render pulls the values from local storage and populate on DOM.

Web API's video #3, 48 minutes in. 

Focus on..

Define your variables up top
Create your functions, even if empty
Add comment on every empty function
Every function does only one thing
Focus on breaking down to multiple steps 

Use local storage
Use set intervals
Validation methods to update the DOM 


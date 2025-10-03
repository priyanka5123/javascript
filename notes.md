JavaScript (the language)	
Describes the logic of the application—how to react to inputs, update the page, talk to external data sources.

The Browser	
Executes your JavaScript. Provides built-in features (called 

APIs
) that your code can use to do real work.
DOM API – lets you talk to the page structure
Fetch API – lets you make network requests
Storage API – lets you save data locally in the browser
And many others...
All of these are part of the Web Platform. You don’t need to install anything—they're already in every modern browser.

As a web developer, you need to interact with the browser’s content.

But how does the browser keep track of everything on the page?
How can we, through JavaScript, select, read, or modify parts of the webpage?

The answer is the DOM—the Document Object Model.
When your HTML page loads, the browser doesn’t just display it—it builds an internal structure based on the HTML.

This structure is called the DOM.

Think of the DOM as a map or blueprint of your webpage.

Node	
Any item in the DOM tree (element, text, comment, etc.)

Element	
A node that represents an HTML tag (like 

<p>, <div>)
DOM Tree	
The hierarchical structure of the page content

API	
A set of tools that belongs to the Browser and you as a JavaScript developer use to interact with the DOM
The DOM is the bridge between your code and what’s shown in the browser.

Without the DOM, JavaScript wouldn’t be able to “see” or change anything on your page.

An API (Application Programming Interface) is a data source that your JavaScript application can communicate with.
You’ll use APIs to:

Show real-time data in your apps (like weather, stock prices, or blog posts)
Allow users to send information (like forms or feedback)
Connect with other services (like Google Maps or Spotify)

An object is a flexible data structure in JavaScript. Unlike arrays, which are ordered and use numbered positions, objects use key-value pairs, which you define yourself.
There are two ways to get values out of an object:

1. Dot Notation
console.log(car.model); // Camry
This is the most common way if you already know the property name.

2. Bracket Notation
console.log(car["model"]); // Camry
Use this when the key is stored in a variable or contains special characters.
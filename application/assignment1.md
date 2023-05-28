// Assignment 1 - React Class

1. What is emmet?
   Emmet is basically a way of writing code in a short cut format to reduce the effort and might also help in coding errors while closing the emmet . For ex-

    <div>
    <h1></h1>
    <h2></h2>
    <h3><ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>            
        </ul>
    </h3>
    </div>

    the above example can be written in a better way using emmet 

    div>h1+h2+h3>ul>li*5 (and hit enter)
    Additionally class name can be added with a '.' and id with '#' in the emmet itself.

2.Difference between library and framework

Library is a lightweight set of reusable code used to perform certain task and reduce the time spend in case if  built from scratch. Carousel container is one such example where library like jQuery is used , navbar custom functionality can also be taken care from such external library, whereas framework on other hand is a complete structured solution to develop certain type of application.

3.What is CDN ? and why do we use it?

CDN stands for "Content Delivery Network".It is basically setup of multiple servers throughout different geographic location that assist in content delivery to the user from the nearest server possible to achieve less latency on the client side.It also caches the static pages of the application resulting in better performance and balancing load at servers.

4. Why is React known as React ?

React is known as react because it reacts depending on the user interaction, change of state and data within application.

5.What is cross origin in script tag?
Cross origin html attribute provide support for cross origin resource sharing which is used by applications to share resources like images , json data which may be stored on another domain.

6. DIfference between React and ReactDOM?
React is a javascript library for creating user interface, creating react elements, can be used for development of other platform beside web ,whereas ReactDOM is used for providing methods for rendering react element on DOM.ReactDOM is responsible for manipulating DOM based on state change and make changes on UI as per the request.DOM contains web specific code not required for other platform

7.What is difference between react.development.JS And react.production.JS

React.development is used for development purpose and is a heavy file which may not be a better option to use on runtime environment React.production is a minified version of react.development.JS which serves the same purpose and is also a light file due to minification.


8.What is async and defer

Async: The async attribute tells the browser to load and execute the JavaScript file asynchronously. This means that the browser will continue to load the page while the JavaScript file is loading. The JavaScript file will not be executed until it has finished loading.
Defer: The defer attribute tells the browser to load the JavaScript file, but not to execute it until the page has finished loading. The JavaScript file will be executed just before the DOMContentLoaded event is fired.

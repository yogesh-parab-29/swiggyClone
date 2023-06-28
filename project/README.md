Swiggy Clone
------------------------

This is a React project that simulates the functionality of Swiggy, a popular online food ordering and delivery platform in India.

Installation
------------------------------



* To run this project, you need to have Node.js and npm installed on your system.

* Clone this repository using git clone https://github.com/yogesh-parab-29/swiggy-clone.git

* Open cmd prompt and "git branch" (it shoudl be "project/EP-02-project-base-stage")

* Go to the project folder using cd swiggy-clone/project

* Install parcel using npm i parcel

* Start the development server using npm start

* Open http://localhost:1234 in your browser to see the app




-----------------
Bug Report
-------------------
*Summary* :-
The cart does not check if the items are from the same restaurant or not.




Steps to Reproduce

1. Add an item (please add only one item) to the cart from any restaurant.
(Possibility certain dishes might fail due to data fetching variables differences, please check again with other restaurant available in that case).

2. Here the cart count(check in navbar) will go to "1" and console will have a 6 digit key which is coming from cartSlice.js(line 14).
//Please check the cart count in navbar because cart page is still not made


3. Adding next item it wont console anything but go to cart which can be again seen in navbar, which is most probably due to cartSlice.js(line 18).


4. Go to another restaurant using ***Navbar by clicking on "Home"*** and add another item to the cart from different restaurant.


5. Observe the cart count and the console log.(It should have gone into cartSlice.js(line 19)else condition, but it gets into line 18 most probably. Here the state.lastItemResId is getting changed which should not be the ideal case.My reseach ends here without any further direction.



Expected Behavior
-------------------
The cart should not allow adding items from different restaurants. It should show an alert message or disable the add button for items from different restaurants.



Actual Behavior
---------
The cart allows adding items from different restaurants. The cart count increases.


Additional Information
-------

* The bug is located in the cartSlice.js file, where the condition to check if the items are from the same restaurant or not fails
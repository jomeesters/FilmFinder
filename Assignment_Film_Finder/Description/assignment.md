Assignment: Film finder

Introduction

You are going to make a film finder! This project will give you an overview of the variety of movies. For now, you don't need to worry too much about the database(yet)! This is already made for you. There are a collection of movies in the database that can be filtered by the user through filter buttons. The picked movie can link the user to the IMDB

Requirements

Your project should satisfy the following:

1. As a user, I want to see the available movies as posters from the movie.
   Check the data: There is a link to the poster for each movie in the database.
2. As a user, I want to filter out the movies with 5 filters in a form of radio buttons. The filter functions will be described as follows.
3. As a user, I can only filter one at a time.
   The current filter will switch to the filter that has been clicked on(radio button). Unless it's a checkbox then there can be more filters selected at the same time.
4. Category 1: As a user, I want to filter all new movies: from the last years, this means 2014 and newer.
5. Category 2: As a user, I want to filter movies with "Avenger" in the title.
6. Category 3: As a user, I want to filter movies with "X-Men" in the title.
7. Category 4: As a user, I want to filter movies with "Princess" in the title.
8. Category 5: As a user, I want to filter movies with "Batman" in the title.
   Use array methods for the filters.
   check if a string is already in another string with .includes()` method.
   The last 4 filters look very alike, Do you need multiple functions for that? Or can it be solved with one function?
9. As a user, I can click on a poster from the movie, which will link me to their IMDB page.
   IMDB works with an id for each film/series in the URL. See for example: https://www.imdb.com/title/tt0944947/. Edit The URL from the IMDB and paste the correct ID behind it.

Design

First focus on the functionality and JavaScript, before you start with the styling. The example below is how our film finder looks like. You can use this design, but you are also free to do it your own way to meet the requirements!

Bonus Requirements

1. As a user, I can type the title of a movie into an input field, when I press enter it will show me the films filtered on the title that has been filled in.

Tips & Tricks

Wait till the page is loaded before you do something with JavaScript. Revisit the lesson on this subject if you need a refresher: "Changing the DOM, wait for the page to load".

Styling suggestions:

You may style your page with CSS-grid.
You may style your page with Flex-box.
You will probably need a switch statement. Check the docs

Where do I start? How do I start?
Check our steps (Caution: the followings are guidelines, they're not facts, they're suggestions. You don't need to follow them precisely):

1. Start with setting up an HTML structure. What do you need?
   Navigation <nav> with more radio buttons that needs to have id, name, value, and type. If you think: huh did I need to know that before? This is all standard template code that belongs to the radio button. You can read more about it in the documentation about radio buttons. See Mozilla.
   The radio buttons all need to have a <label> with a title for the radio button, which in this case are the names of the filters.
   This is an HTML structure: This means the color styling doesn't yet need to be correct. Start with the elements.
   Below <nav> we want to create a <main> or a container <div> where all the movies will be placed. We will make a container because the poster images will be alligned. That means they need to be in their own container.
   Create a <ul> inside the container
   You will soon use JavaScript to add <li> elements to this <ul>, so it's good to already add a suiting id, which you can select later.
   Optional: create a header and a footer in your webpage(This is not required)
2. Create 2 JavaScript files, 1 with the list of all the movies (which you will store in the variable movies) and another 1 for the rest of the script. And add them to the script tags on your HTML page. Caution! The one file uses another file, so the order matters.
3. Check in your script if you can log all the movies in your console. These are all the movies you going to work with. Take a look into the structure of the data, so you can have an idea of what you can use.
4. Okay, let's take a look at which method we can use with Javascript to put all available movies onto the screen(So in the DOM). It will be great to reuse a function that you can use for the filtered movies list. SO: make a function addMoviesToDom that takes 1 argument: The movies. The movies that this function gets as input, will add movies as li onto the ul that you have just made in step 1.

Step 1: get the ul by using the id that you made in your HTML structure.
Step 2: Iterate through all the movies in the movie list. That takes this function as an argument. First, you want to "convert" each movie into a complete <li> element(a Dom node) with a .map function. We then put it into a variable. The result from the .map function will be an array with <li> elements.
Step 3: In the .map function, for each movie, create a li and put the title of the movie as a string temporary in it. We will turn that later into an image.
Step 4: Outside the .map function: place a newly made array with <li> elements in the DOM by adding each li to the ul. Our suggestion: Use a .forEach loop.
Step 5: Check if you got a nice list with all the movie titles in it on your screen.
Step 6: Since you successfully prompted the movies into the DOM, the movie posters will be very easy. Instead of the text that you added as an li, you are going to create an img, which the src will be an attribute movie. Poster. Caution! The data of the movies are in capital letters(you mostly can't do anything about the format you get from the data).
Nice! Since you have all the posters now on your screen, it's time to check how we can filter the movies. But before we begin, it's best practice to already implement this: We are going to add the movie list to the DOM after the content has been loaded. In other words, you want to call addMoviesToDom(movies) after the document has been loaded. Revisit the lesson on this subject if you need a refresher: "Changing the DOM, wait for the page to load".

1. Okay, now we are going to make something really happen after we click on one of the radio buttons. There are 5 different buttons that can be clicked, which an Eventlisterener needs to be connected to. Hmm.... that sounds like very repetitive work.... We don't like that array method! Create all the radio buttons in HTML(there must be in total 5 of them). Give them all a precise and consistent values for the id, name, value, and type. It's useful if they are all in lower-case, e.g."princess-films". This works pretty well. The name in the label tags can be in capital letters.
2. Create a function addEventListeners(). This function will be activated when the content has been loaded, and add an event to each radio button.
   a. Select all radio buttons in your own way. Example because they all got the name film-filter.
   b. Iterate through the elements and connect them to an event.
   c. Which event do you need? You will probably think of the click event, but the radio buttons create an unexpected effect when it's clicked. The click is also registered if you didn't check the circle marker. So: Use the change event. Then there will be an event when the circle of the radio button is checked or unchecked.
   d. Use console.log() to check if your events work.
   e. Create a function handleOnChangeEvent() with as argument the word "event" that fires when there is a change had been made by one of the radio buttons. Ergo: The radio button had been checked.
   f. In the handleOnChangeEvent() function, use console.log(event.target) to find out which of the radio buttons has been clicked on. Use google to search how an event can pass through into a function and what is an event object actually(don't let it overwhelm you by the many possibilities. You want to use event.target, just like you have seen before in the examples online.) Check and verify if this function receives the correct element that you expected when the radio button has been checked.
   g. When the "latest movies" button has been checked, you want to do something, or when 1 of the filters has been checked, you want to do something else. Wow, that sounds like many options... We could solve this with if...else if... else if... That is possible. The cleanest method is to create switch() statements.
   h. Create in the handleOnChangeEvent() function a switch statement that does something depending on which filter has been checked. The subject of the switch can be, for example event.target.value, that is the value attribute from your input field, that you already passed a fine lowercase value with it here above. Create for the 5 different filters, also 5 diverse cases and a default case, for example: "princess-films", " x-men-films", "avenger-films", "batman-films", latest-films". Write for each case a break statement, just a console.log("hey i am {fill in movie name} film"). Also check if your switch works properly and if the output is what you expected.. Click around on your radio buttons.
   i. You feel it coming don't you? Instead of console.logging, you want to do something in your switch statement. Create a function that is named filterMovies with as argument wordInMovie. Start with 1 implementation, for example princess-films. In your switch statement the filterMovies() will activate, with as argument the correct word to filter with. In this case for example filterMovies("Princess").
   j. Write the filterMovies function. We are not going to explain this one throughout, but what you want to do is: check if the word appears in the title of the movie. You will now only have a list of the filtered movies over. As the last step, you want to call this filterMovies, the function from step 4 addMoviestoDom(), but now with your filtered movies list, instead of all the movies list.
   k. Your filter functionalities works. (You already checked) Add the filterMovies() function now with the correct arguments with all the relevant switch statements.
   l. There is still 1 case left namely filtering the latest movies. Create a new function for filterLatestMovies this function does not get any arguments, but at the moment that this one has been called, it will place by default all the movies in the DOM that are from the year 2014 or newer. Follow the same steps as filterMovies(), but only the filter method is different.
   m. You are wondering that there are some small bugs in all sorts of ways, every filtered movie will be added together. You probably want that at the moment of your addMoviesToDom() has been called, the first thing you want to do is to remove all the movies that are now in your ul. And afterward, you add the filtered list to the ul.
   n. Do your filters work? Nice, now only the last requirement: next to <img> tag there will be your posters of the movies wrapped in an <a> with as href the link to the IMDB + the imdbID....Hmm... that would be a very long and unreadable function in the forEach loop... Write a separate function that uses the imdbID from the movie as an argument and returns the correct URL(you can think of a name). You will set this following into the href attribute of the <a>. The hierarchy that we are going to make is: ul > li > a > img`
   o. Done with the functionalities? Now you can start styling! :)

Database

Download an example JavaScript file containing movie data for this project.

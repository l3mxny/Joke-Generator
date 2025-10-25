[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ZdWoisib)
# wk06-hw-joke-generator
In this homework you will be using a Dad Jokes API (https://icanhazdadjoke.com/api) to be able to search for dad jokes with any keyword.

## Setup
The React app has been made for you. You will need to edit/add the following files:

- pages/LandingPage/LandingPage.tsx
- pages/LandingPage/LandingPage.module.css
- pages/ResultsPage/ResultsPage.tsx
- pages/ResultsPage/ReultsPage.module.css
- App.tsx
- components/Joke/Joke.tsx
- components/Joke/Joke.module.css

For styling, we're using CSS modules. This means that each page or component will have its own dedicated CSS file (the module files). So for example, all styling you want for the Landing Page will be in LandingPage.module.css. Remember to import the corresponding CSS file in your .tsx file!

Notice that in our web app, we're working with multiple pages for the first time (before, everything has been in App.jsx or App.tsx). Multiple pages means that we're going to be using React Router. We did not go over it explicitly in class, but everything you need to know about React Router is in the Week 6 bonus slides.

## Landing Page
This will be the home page of the app. The route should be "/". There will be a search bar that you input the keyword into. When you click on the "Search" button, the API should be called (https://icanhazdadjoke.com/api#search-for-dad-jokes), and the page should change to the ResultsPage view. The search bar does not have to be populated when clicking on "Search." An empty search just means you want to see all jokes. Note that you will have to pass the results of the API call to ResultsPage! Hint: you can pass in state through useNavigate (but if you know other React hooks you're welcome to use those as well). The page should look something like the screenshot below. The image is already available to you in the assets folder:
<img width="959" height="410" alt="image" src="https://github.com/user-attachments/assets/dae9ff23-452a-400d-984c-b328f411d1fe" />
<img width="959" height="416" alt="image" src="https://github.com/user-attachments/assets/b2dde119-f1e6-43cb-b2e9-2cab766bed68" />

## Results Page
This will be the page that displays all of the jokes that contain the keyword you specified in the search bar of the Landing Page. The route will be "/results". Each joke should be its own Joke component (consider what props are necessary here). If the API provided no results, then the page should say "No results." If there are results, the search term that was provided in LandingPage should be in the header.

In the LandingPage, if you were the change the URL to /results and hit enter (so you are attempting to switch to the results page without actually searching anything), you should be automatically redirected back to the LandingPage ("/"). Hint: you can do this by using useLocation to access the current state that you passed from LandingPage, and if it is not defined, you navigate back to "/". https://www.dhiwise.com/post/guide-to-implementing-the-uselocation-hook-in-your-react-app might be a helpful resource (you don't need to really do any of the history stuff, just seeing how to access current state through navigation).

There is no need for a back button; you can just go back to the LandingPage using your browser.

<img width="957" height="407" alt="image" src="https://github.com/user-attachments/assets/d03be04d-0b0b-45f9-84cd-8ce1f3886e23" />
<img width="950" height="403" alt="image" src="https://github.com/user-attachments/assets/ab883ebe-94d7-44b7-9cfe-4d92886e91ed" />

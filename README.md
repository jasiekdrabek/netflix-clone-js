# App deploy on firebase

[netflix-clone](https://jan-netflix-clone.netlify.app)

# App overview

This project is based on [Let's build Netflix 2.0 with REACT.JS!(Stripe Checkout & Webhooks, Redux, Firestore, Google Auth)](https://www.youtube.com/watch?v=HW5roUF2RLg&t) tutorial. <br />
App features form tutorial:
- home page with movies
- signup/siginin screen
- profile page, but instead of Stripe Checkout I have edit profile.

Other app features:
- movie/tv screen
- my list screen
- on click "play" move to play screen with trailer for chosen movie/tv series
- searchbar(works for movies, tv series and people)

## Used techonolgy and framewokrs

- **react**
- **tmdb api** to get details about movies.
- **firestore** db to store users.
- **redux** to mange user state.
- **react-router-dom** to navigate though pages
- **axios** to handle api requests.
- **react-youtube** to display youtube trailers.
- **react-infinite-scroller** to load more content when user scroll to end of page.
- **react-responsive-combo-box**   

## App screenshots

![startPage](/screenshots/startPage.png)

![signIn](/screenshots/signIn.png)

![signUp](/screenshots/signUp.png)

Standard login screen.

![homePage](/screenshots/homePage.png)

![moviesPage](/screenshots/moviesPage.png)

![tvSeriesPage](/screenshots/tvSeriesPage.png)

home movies and tvSeries screens are very similar. We have navbar, which can be seen only on hover or when user scroll dawn.
then we have banner, whitch is different every time user enter the page. When user get almost to the bottom new categories are loaded.
Clicking on poster revail details about movie/tv series, where user can click play to watch trailer or add
to/remove from my list.

![myList](/screenshots/myListPage.png)

my list screen.

![profile](/screenshots/profile.png)  

profile screen where user can edit region, watch provider and avatar.

![search](/screenshots/search.png)

Example of search screen when user type: "driver". In results we have movies, tv series and people.
When user clik on person movies with that person apears.

  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

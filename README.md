# Sprint Challenge: Advanced Web Applications - React Bubbles

Topics of Unit 3
1. testing
2. client-side authentication
3. hosting web apps
4. PUT and DELETE requests.

- [Color-Hex](https://www.color-hex.com/)

## Self-Study/Essay Questions

- [ ] Explain what a token is used for.
- [ ] What steps can you take in your web apps to keep your data secure?
- [ ] Describe how web servers work.
- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

## Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step.

### Stage 1 - Authentication

Build a login form to authenticate your users.

- [ ] Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API
- [ ] Save the token to localStorage
- [ ] Build a `axiosWithAuth` module to create an instance of axios with the authentication header
- [ ] Build a `PrivateRoute` component and use it to protect a route that renders the `BubblesPage` component

### Stage 2 - Consuming the API

- [ ] When `BubblePages` renders, make a GET request to fetch the color data for your bubbles.
- [ ] In `ColorList.js`, complete the `saveEdit` and `deleteColor` functions to make AJAX requests to the API to edit/delete data
- [ ] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

### API Documentation

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
  * **[GET]** to `/api/colors`: returns the list of colors and their hex codes.
  * **[POST]** to `/api/colors`: creates a new color object. Pass the color as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `/api/colors/:id`: updates the color using the `id` passed as part of the URL. Send the color object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `/api/colors/123`: removes the color using the `id` passed as part of the URL (123 in example).

## STRETCH PROBLEMS

**HTTP/Axios Stretch Problems**

- [ ] Build a form at the bottom of `ColorList.js` to add new colors to the colors data

**Data Visualization**

- [ ] Look at [Potion JS](https://potion.js.org/). This is the library used to display the color data
- [ ] Play around with the data visualization happening in `Bubbles.js`. Have fun with this! Try different components from the library, or see if you can add props to change the UI a bit.

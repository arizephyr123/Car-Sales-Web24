1. dev dependencies:
    - redux
    - react-redux
    - node-sass

2.  index.js
     a. imported createStore from redux
     b. imported Provider from react-redux
     c. const store = createStore(reducer)
     d. import reducer from ./reducers
     e. wrapped <App/> in <Provider> and passed in store

3. reducers/index.js
    a. 
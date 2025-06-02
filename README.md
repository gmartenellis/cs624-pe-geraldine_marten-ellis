# Input
The program accepts user input through forms in the app’s UI. Users can add cities and countries by filling in fields such as city name, country name, and currency. Inputs are handled via controlled components in React Native, ensuring state updates on every change.

# Process
Once input is submitted, the app processes the data by updating its internal state using React’s setState method. Cities and countries are stored as arrays in the app’s state. For cities, locations can also be added and nested within each city object. The app ensures immutability by creating new arrays and objects when updating state. Navigation between screens allows users to view and manage these data collections seamlessly.

# Output
The updated data is rendered dynamically on various screens, showing the lists of cities and countries. The UI updates in real-time to reflect changes, displaying details like city names, locations, and country currencies, providing users with immediate feedback on their inputs.


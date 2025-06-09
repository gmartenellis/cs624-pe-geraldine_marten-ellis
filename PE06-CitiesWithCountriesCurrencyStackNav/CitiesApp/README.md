# Input
Users interact with the app through a tab-based navigation system. In the Add City and Add Country tabs, users input city and country names respectively. When adding a country, users can also associate a currency with it. The data is entered through form components and passed to the application state.

# Process
The app uses React Navigation with a stack-based navigator for both Cities and Countries. When a city or country is added, the app generates a unique ID and updates the corresponding array in the component state. Countries can also store their currency information, and this data is passed between screens using props. The navigation stack allows users to move from a list view to a detailed view (e.g., from Countries to Country).

# Output
The app displays a list of all added cities and countries, with navigation to their details. It visually confirms successful additions and dynamically updates the lists on screen.
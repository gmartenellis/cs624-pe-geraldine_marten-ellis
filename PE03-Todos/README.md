# Input
The program accepts user input through a text field, where users can type their tasks. This input is captured using a TextInput component and stored in the app’s state as inputValue. When the user presses the “Done” button or taps the submit button, the task is validated (to ensure it's not empty) and then added to the todos array with a unique index.

# Process
The application manages tasks using a state-driven process. When a task is submitted, it’s added to the list with a complete flag set to false. Users can toggle completion status or delete tasks. A filtering mechanism is in place, controlled via tab selection, to show “All,” “Active,” or “Complete” tasks.

# Output
The tasks are rendered on-screen according to the selected filter.


Note: On the mobile version (using Expo), the tabs were not visible, so it wasn’t possible to verify the “Complete” tab functionality. The web version, however, worked as expected.

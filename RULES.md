## Rules

Some rules that should be followed when creating this project.

### 1. Git branch rules

When creating a branch, branch name should be initials of your name / branch-name, example:

Aleksa Svilkic -> as/01-crate-component-2

### 2. Component structure

Components must be named with index.js and **not** Component.js

Export of component should be named export and **not** default, unless it's necessary

### 3.Styling

Styling is done with Styled-Components and module classes.

### 4. Naming variables

Variables should be named using camel case.

### 5. Components

Components should be modularised and independent of each other. If component is dependant on other component, it should be placed in same folder as dependant component.

    /Component
        index.js
        index.module.css	//style of Component
        childComponent.js
        childComponent.js	//style of child component
    /OtherComponent
        index.js

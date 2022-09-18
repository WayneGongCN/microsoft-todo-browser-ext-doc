---
sidebar_position: 2
---

# Build

Before starting, make sure you read the [Requirement](./requirement.md) section.

## Develop build

Enter the project directory, execute **`yarn dev`** to start the development build, the development build will watch the local file modification and rebuild automatically

## Production build

Enter the project directory, execute **`yarn build:<target>`** to start the production build:

- Chrome: `yarn build:chrome`
- Firefox: `yarn build:firefox`
- Edge: `yarn build:edge`
# Template Implementation Instructions

## Overview

This document provides comprehensive instructions for implementing code following the established template structure and best practices. Always use the **Frontend folder located in the parent directory** of this project as a reference template.

## Core Principles

### Think Before You Code
Before implementing any code, always follow this hierarchy of thinking:

1. **Think Hard** - Consider the immediate requirements and implementation approach
2. **Think Harder** - Analyze potential edge cases, error scenarios, and user experience implications
3. **Think Ultrahard** - Evaluate long-term maintainability, scalability, and how the implementation fits into the overall architecture

## Technology Stack

Use the exact same technologies as specified in the template:

### Core Technologies
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.8.3** - Full type safety and modern JavaScript features
- **React Router DOM 6.30.1** - Client-side routing
- **Redux Toolkit 2.8.2** - Modern Redux with RTK Query capabilities
- **Styled Components 6.1.18** - CSS-in-JS styling solution

### Key Libraries
- **Axios** - HTTP client for API calls
- **Formik & Yup** - Form handling and validation
- **React Toastify** - Toast notifications
- **React Select** - Advanced select components
- **Recharts** - Data visualization
- **D3.js** - Advanced data visualization
- **QRCode** - QR code generation
- **React Infinite Scroll** - Infinite scrolling functionality
- **Redux Persist** - State persistence

## Project Structure

Follow the exact folder structure from the template:

```
Frontend/
├── public/                     # Static assets
├── src/
│   ├── api/                    # API service layer
│   ├── assets/                 # Static assets (images, icons)
│   ├── components/             # Reusable UI components
│   ├── constants/              # Application constants
│   ├── containers/             # Container components
│   ├── dispatchers/            # Redux action dispatchers
│   ├── enums/                  # TypeScript enums
│   ├── hooks/                  # Custom React hooks
│   ├── layouts/                # Layout components
│   ├── modals/                 # Modal components
│   ├── pages/                  # Page components
│   ├── routers/                # Routing configuration
│   ├── selectors/              # Redux selectors
│   ├── store/                  # Redux store configuration
│   ├── styles/                 # Global styles and design system
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Utility functions
│   └── index.tsx               # Application entry point
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## Component Architecture

### File Organization
Each component should have its own folder with the following structure:
```
ComponentName/
├── index.tsx      # Component implementation
├── Styles.ts     # Styled components
└── types.ts      # TypeScript types (if needed)
```

### Component Implementation
Follow the template pattern as seen in `src/components/Button/index.tsx`:

1. **Interface Definition** - Define props interface at the top of the file
2. **Functional Component** - Use React functional components with hooks
3. **Styled Components** - Import and use styled components from `Styles.ts`
4. **TypeScript Types** - Use appropriate TypeScript types and interfaces
5. **Default Export** - Export the component as default

### Container Pattern
Place `App.tsx` in the `containers` folder as `src/containers/App/index.tsx` following the template structure.

## State Management

### Redux Store Structure
Organize state using Redux Toolkit slices in `src/store/`:

1. **Slice Files** - Each feature has its own slice file (e.g., `authentication.ts`)
2. **Root Reducer** - Combine all slices in `src/store/index.ts`
3. **State Persistence** - Use Redux Persist for selective state persistence

### Action Dispatchers
Implement action dispatchers in `src/dispatchers/` following the pattern in `src/dispatchers/authentication.ts`:

1. **API Integration** - Import API functions from `src/api/`
2. **Action Dispatching** - Dispatch Redux actions to update state
3. **Async Operations** - Handle asynchronous operations with proper error handling

## API Integration

### Service Layer
Implement API calls in `src/api/` following the pattern in `src/api/authentication.ts`:

1. **Axios Integration** - Use axios for HTTP requests
2. **Type Safety** - Define request/response types in `src/types/api/`
3. **Error Handling** - Implement proper error handling and propagation

## Routing & Navigation

### Layout System
Implement layouts in `src/layouts/`:

1. **Authenticated Layout** - For logged-in users
2. **Unauthenticated Layout** - For public pages
3. **Nested Routing** - Use nested routes with layout components

### Page Structure
Implement pages in `src/pages/` with each feature having its own folder.

## Styling Guidelines

### Design System
Follow the established design system from `src/styles/`:

1. **Color Palette** - Use predefined color constants
2. **Typography** - Follow established font families and sizes
3. **Breakpoints** - Use responsive breakpoints for different device sizes
4. **Component Library** - Reuse existing components when possible

### Styled Components
Implement styles in `Styles.ts` files using the template pattern:

1. **Component Variables** - Define constants for reusable values
2. **Mixins** - Use CSS mixins for shared styling patterns
3. **Theming** - Access theme variables through the styles import

## Best Practices

### Code Organization
1. **Feature-based Structure** - Organize files by feature rather than type
2. **Clear Separation of Concerns** - Separate UI, logic, and data concerns
3. **Consistent Naming** - Follow established naming conventions
4. **Modular Architecture** - Build modular, reusable components

### Performance
1. **Lazy Loading** - Implement code splitting where appropriate
2. **Memoization** - Use React.memo and useMemo for performance optimization
3. **Bundle Optimization** - Minimize bundle size through efficient imports

### Accessibility
1. **ARIA Labels** - Use appropriate ARIA attributes
2. **Keyboard Navigation** - Ensure keyboard accessibility
3. **Screen Reader Compatibility** - Test with screen readers

### Maintainability
1. **TypeScript** - Use TypeScript for type safety
2. **Documentation** - Document complex logic and APIs
3. **Consistent Code Style** - Follow established code style guidelines
4. **Modular Design** - Build components that are easy to understand and modify

## Development Workflow

### Code Quality
1. **ESLint** - Follow Airbnb configuration with TypeScript support
2. **Prettier** - Maintain consistent code formatting
3. **Import Sorting** - Use automatic import organization
4. **Type Checking** - Ensure strict TypeScript configuration

### Testing Strategy
1. **Unit Tests** - Write unit tests for components and utilities
2. **Integration Tests** - Test feature-level integrations
3. **API Mocking** - Use mock service workers for API testing

## Customization Guidelines

### Theming
1. **Centralized Color System** - Use the established color palette
2. **CSS Custom Properties** - Leverage CSS variables for theming
3. **Dark/Light Mode** - Implement theme switching capabilities

### Component Extension
1. **Props-based Customization** - Make components customizable through props
2. **Styled-components Theming** - Use styled-components theme provider
3. **Consistent Design Patterns** - Follow established UI patterns

## Implementation Checklist

Before submitting any implementation, ensure you have:

- [ ] Analyzed requirements thoroughly (Think Hard)
- [ ] Considered edge cases and error scenarios (Think Harder)
- [ ] Evaluated long-term maintainability (Think Ultrahard)
- [ ] Used the correct technology stack from the template
- [ ] Followed the exact folder structure
- [ ] Implemented components using the established patterns
- [ ] Used proper TypeScript types and interfaces
- [ ] Implemented state management following Redux Toolkit patterns
- [ ] Followed styling guidelines and design system
- [ ] Ensured accessibility compliance
- [ ] Written appropriate tests
- [ ] Documented complex logic or APIs
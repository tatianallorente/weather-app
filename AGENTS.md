# Agents for `weather-app`

This document describes how AI agents should work with this project.

## Default Agent

- Assume a **React + TypeScript + Vite** SPA that calls the OpenWeather API via the centralized Axios clients in `src/api/config.ts`.
- Favor **small, focused components** and **strong typing** using the interfaces in `src/api/types.ts`.
- Keep API concerns in `src/api` and view/layout concerns in `src/views` and `src/components`.

### When editing code

- Prefer refactors that:
  - Reduce duplication (e.g. using `CardWrapper`, `LoadingOverlay`, controllers/hooks).
  - Improve type safety (removing `any`, handling `undefined` data safely).
- Do not introduce new external dependencies unless clearly justified.
- Maintain the existing styling approach:
  - Tailwind utilities + `src/styles/utilities.css` classes for layout and theme colors.
  - MUI components where already used (e.g. `Typography`, `Box`).

### When adding new features

- Reuse existing patterns:
  - Controllers (`*.controller.ts`) for data shaping and view logic.
  - Centralized API functions and shared types.
- Ensure new network calls:
  - Use environment variables for URLs/keys.
  - Integrate with the existing Axios clients and error handling.

### Testing and safety

- Run TypeScript checks and linting where available before suggesting large refactors.
- Avoid breaking API contracts defined in `src/api/types.ts` without a clear migration path.


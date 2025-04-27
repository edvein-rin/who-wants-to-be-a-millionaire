<h1 align="center">💸 Who wants to be a millionaire? 💸</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-22.14.0-green" />
  <img src="https://img.shields.io/badge/React-^19-blue" />
  <img src="https://img.shields.io/badge/Next.js-15.3.1-white" />
  <img src="https://img.shields.io/github/license/edvein-rin/who-wants-to-be-a-millionaire.svg?color=blue" />
<p>

<p align="center">
Test your knowledge and climb to victory!<br />
Answer 12 questions correctly to win — but one mistake ends it all.<br />
Ready for the challenge?
</p>

<p align="center">
  ✨ <a href="https://who-wants-to-be-a-millionaire-orcin.vercel.app/">CLICK TO PLAY</a> ✨
</p>

## Stack

- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [CSS modules](https://github.com/css-modules/css-modules)
- **Linting:** [ESLint](https://eslint.org/)
- **Testing:** [vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Playwright](https://playwright.dev/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions), [Husky](https://typicode.github.io/husky/), [lint-staged](https://github.com/lint-staged/lint-staged), [commitlint](https://commitlint.js.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## Requirements

[nvm](https://github.com/nvm-sh/nvm) any version.  
[pnpm](https://pnpm.io/installation) version `>= 10`.

## Installation

```
nvm install
nvm use
pnpm install
```

## Usage

### Development

```bash
pnpm dev
```

### Building

```bash
pnpm build
```

```bash
# Start build locally
pnpm start
```

### Testing

```bash
pnpm test
```

```bash
# Watch for file changes and rerun tests
pnpm test:watch
```

### Linting

```bash
pnpm lint
```

```bash
# Fix what can be fixed automatically
pnpm lint:fix
```

```bash
# Lint staged files only
pnpm lint:staged
```

## Architecture

Module based front-end a little bit inspired by `Nest.js` structure.

### Folder Structure

```
.
├── ...
├── public                  # Public assets
│   └── images
│           └── icons
├── src
│   ├── app                 # Next.js routing (pages)
│   └── modules             # Modules
│           ├── answer
│           ├── game
│           ├── question
│           ├── reward
│           └── shared
└── ...
```

### Modules

**Module** is just a folder that holds similar by meaning components, functions etc.  
Modules provide a **public interface** for interacting with each other.  
By this, **cohesion** and **transparent dependencies** are achieved.

Simple rules:

1. What is not exported from a module can't be imported directly.
2. Entities within a module (`ui`/`libs`) can import each other.

#### Module Structure

```
.
├── ui         # React components
└── lib        # Functions, hooks etc
```

#### Existing Module Dependencies

```mermaid
graph TD;
    game --> shared
    game --> reward
    question --> answer
    game --> answer
    game --> question
    question --> reward
```

---
title: 'My Journey to Create a SvelteKit Library'
date: '2024-10-24'
description: 'Exploring how to maintain a monorepo TypeScript library for SvelteKit'
published: true
---

## Introduction

For a while, I wanted to make an open source library to test my skills and learn new ones in software development and maintaining and contributing to Svelte ecosystem. This opportunity came when I discovered security headers in HTTP response headers. I wanted to test them in my portfolio but was facing poor developer experience (DX) as there was no auto-complete functionality.

## The Inspiration

I found [sveltekit-security-headers](https://github.com/kevinobee/sveltekit-security-headers), a library that had exactly what I wanted but was missing features like handling [Content-Security-Policy directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) and basic type-safety. So, I decided to create my own library with these missing features.

## Development Process

### Research and Planning

Before writing any code, I was interested in maintaining [securekit](https://github.com/islamzaoui/securekit) in a monorepo on GitHub. I needed to understand how to handle version control and deployment to npm.

#### TypeScript Library and Version Control

My research led me to a great video by [Matt Pocock](https://x.com/mattpocockuk) about deploying TypeScript libraries to npm.

{% youtube #eh89VE3Mk5g /%}

This video by [Matt Pocock](https://x.com/mattpocockuk) was great and very helpful to get started.

#### Monorepo Setup

I initially used Bun package manager's [workspaces](https://bun.sh/docs/install/workspaces) to create my monorepo.

### Creating Project Repository

I set up my project and created the monorepo with the **securekit** TypeScript package following the tutorials I had studied. I included a demo SvelteKit app for testing with this structure:

```plaintext
├── package.json
├── LICENSE
├── README.md
├── .gitignore
├── apps
│   └── demo  // demo SvelteKit app
└── packages
    └── securekit // typescript library
```

### Linting and Testing

I created the GitHub action for linting in `.github/workflows/lint.yml` and attempted to deploy the demo SvelteKit app to Vercel. However, it failed because Bun workspace didn't work correctly with Vercel. I had to create a custom script to build the package first, then the demo app.

### Deploying

The initial deployment of **securekit@0.0.1** to npm failed multiple times. After troubleshooting and reading documentation, I realized using Bun as a workspace manager wasn't the ideal solution. This led me to search for better monorepo solutions.

### Monorepo Evolution

#### Pnpm Workspaces

I went to [svelte-markdoc-preprocess](https://github.com/TorstenDittmann/svelte-markdoc-preprocess), the library that I use to turn markdown into what you are reading right now, and found that he is using pnpm workspaces for his monorepo. So I decided to use it.

I had to find and replace bun with pnpm everywhere in my project and add `pnpm-workspace.yaml`. Then after trying, it worked, but just like bun, it didn't work as expected, specifically for the demo sveltekit app that I deployed to Vercel. It was failing to deploy caused by the custom script and failing to build depended on the package before the app. For another time, I had to find an even better monorepo solution.

#### Turborepo

Vercel advertised one of their products, [**Turborepo**](https://turbo.build/). I watched [Fireship's video](https://www.youtube.com/watch?v=9iU_IE6vnJ8) about it, and it was exactly what I needed.

I watched a getting started video by again [mattpocockuk](https://x.com/mattpocockuk):

{% youtube id="hRyU0bN7qhw" /%}

And started immediately using it in my project. I moved back to `bun` package manager for faster installation and deployment, set up `turborepo`, committed, and it instantly worked as expected.

### Next Feature

After resolving monorepo issues, I discovered that SvelteKit already had Content-Security-Policy directives in `sveltekit.config.js`, and my library was overriding these settings. I developed a solution and successfully deployed it as **securekit@1.1.0**.

### Unit and Browser Testing

To improve the testing process, I implemented:

- Package testing using [Bun test](https://bun.sh/docs/cli/test)
- Browser testing with [Playwright](https://playwright.dev/) for header verification
- Integration with Turbo.json and CI workflow

## Conclusion

This project provided valuable learning experiences in:

- Managing monorepos
- Implementing CI/CD workflows
- Maintaining an open-source TypeScript library

These experiences will be invaluable for future projects and help prevent similar mistakes.

## References

- [Matt Pocock](https://x.com/mattpocockuk)
- [sveltekit-security-headers](https://github.com/kevinobee/sveltekit-security-headers)
- [Turborepo](https://turbo.build/)
- [Fireship Monorepos Video](https://www.youtube.com/watch?v=9iU_IE6vnJ8)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Setup project

1. `npx create-next-app [folderName]` to setup project folder
2. `.npmrc` to restrict npm version `.nvmrc` to restrict node version

```
default -> 12.16.0 (-> v12.16.0)
node -> stable (-> v15.4.0) (default)
stable -> 15.4 (-> v15.4.0) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/fermium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.23.0 (-> N/A)
lts/erbium -> v12.20.0 (-> N/A)
lts/fermium -> v14.15.1 (-> N/A)
```

3. add ESLint and Prettier

4. add implement Husky

```
npm i --save-dev husky
npx husky install
npx husky add .husky/pre-commit "npm run lint"
npx husky add .husky/pre-push "npm run build"
```

**For SourceTree**

`export PATH=/usr/local/bin:$PATH`

add to pre-commit should solve 'not find path on source tree'

5. setup debugger on vscode

to solve error on windows

```json
"resolveSourceMapLocation": ["${workspaceFolder}/**", "!**/node_modules/**"]
```

add to launch.json

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

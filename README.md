# mfers client example

> a quick example of grabbing mfers token data from a React app

this example leverages Zora's `@zoralabs/nft-hooks` package, it's quite dope:

- [docs](https://docs.zora.co/docs/developer-tools/nft-hooks/intro)

## to run

this project uses [vite](https://vitejs.dev) for the development environment.

install packages:

```bash
yarn
# or
npm install
```

run the server:

```bash
yarn dev
# or
npm run dev
```

in the browser:

```bash
http://localhost:5173
```

## fafo suggestions

you can change the `MFER_ID` in `src/App.tsx` to see a different token

```javascript
const MFER_ID = '3191' // try putting your own mfer here!
```

also, this could be extended by adding [ethers.js](https://docs.ethers.org/v5) to [lookup the owner's ENS name](https://docs.ethers.org/v5/api/providers/provider/#Provider-lookupAddress) instead of just displaying the address hash

good luck have fun!

You can use this boilerplate to build great cross-chain dApps using [Moralis](http://moralis.io/) development platform.

### `npm install`

To install all the dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### deploy
```
npm run build
cd build
moralis-admin-cli deploy
```

### deploy cloud functions
```
moralis-admin-cli watch-cloud-folder --moralisApiKey [KEY] --moralisApiSecret [SECRET] --moralisSubdomain hoyxzzc62bow.usemoralis.com --autoSave 1 --moralisCloudfolder [PATH] 
```

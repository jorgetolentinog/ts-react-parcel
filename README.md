# Typescript + React + Hot loader + Prettier + Parcel = ❤️

This repository has basic settings for buildling react application in Typescript.

## Built in settings

- React + ReactDOM (16.8+)
- Typescript
- Parcel bundler (1.12+)

## How to set up the project

**Disclaimer**
Since I only use Yarn as my primary package manager, this repository will ignore `package-lock.json` file on commit.
If you prefer npm to Yarn, Please modify `.gitignore` file following your flavor.

```
git clone git@github.com:jorgetolentinog/ts-react-hot-parcel.git
cd ts-react-hot-parcel
npm install
```

## How to start development for the application

    # Transpile only
    npm start

    yarn format //prettier

Execute the command and you can run & test the application on `localhost:1234` in the browser.

## How to build the application

    yarn build

The default output directory is `/dist`. You can change the destination wherever you want.

```
// package.json
// ...
"scripts": {
  // ...
  "build": "... parcel build ./src/index.html -d YOUR_OUTPUT_DIR --public-url '/'" <- Change here
}
// ...
```

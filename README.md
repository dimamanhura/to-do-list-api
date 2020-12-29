# TO-DO List app API 

`NodeAPI` is REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration.

This is updated code that follows [11 шагов как подготовить React Junior Developer к работе в проекте на примере TODO List app](https://aleksandrov.ws/2013/09/12/restful-api-with-nodejs-plus-mongodb) article.

## Running project

You need to have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com) installed.

### Node setup on macOS

```sh
# Update Homebrew before installing all dependencies
brew update

# Install Node (+npm) with Homebrew
brew install node

# Install dependencies in project folder
yarn
```

### MongoDB setup on macOS

```sh
# Install MongoDB with Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Create directory for MongoDB data
mkdir -p ./data/mongo

# Run MongoDB daemon process with path to data directory
mongod --dbpath ./data/mongo
```

### Run server

```sh
yarn start
# alias for
nodemon ./app/index --watch
```

## Author

Created and maintained by Dima Manhura ([@dimamanhura](https://www.linkedin.com/in/dima-manhura-889259144)).


## License

`NodeAPI` is available under the MIT license. See the [LICENSE.md](LICENSE.md) file for more info.


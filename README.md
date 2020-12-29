# TO-DO List app API 

`TO-DO List app API` is REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration.

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

# Installing MongoDB 4.4 Community Edition
brew install mongodb-community@4.4

# Run MongoDB Community Edition
brew services start mongodb-community@4.4
```

### Run server

```sh
yarn start
# alias for
node ./app/index
```

### Web Sockets
| Event Name                | Event Type    | Params (On)    | Response (Emit) |
| ------------------------- | ------------- |--------------  | --------------- |
| ADD_ITEM                  | On            | title: string  |                 |
| ADD_ITEM_SUCCESSFULLY     | Emit          |                | Created TODO    |
| ADD_ITEM_WITH_ERROR Cell  | Emit          |                | Error           |

## Author
Created and maintained by Dima Manhura ([@dimamanhura](https://www.linkedin.com/in/dima-manhura-889259144)).


## License
`TO-DO List app API` is available under the MIT license. See the [LICENSE.md](LICENSE.md) file for more info.


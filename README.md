# TO-DO List app API 

`TO-DO List app API` is REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration. This API can help you create a to-do list app where user can create, update, delete todo and get a list of todos using different parameters. Also, this API makes it possible to register, login and logout a user.  

This is updated code that follows [12 шагов как подготовить React Junior Developer к работе в проекте на примере TODO List app](https://medium.com) article.

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
## API Documentation
Swagger: https://app.swaggerhub.com/apis-docs/dimamanhura/Todos-API/1.0.0#/Todos
 
### Web Sockets
| Event Name                | Event Type    | Parameters (On)          | Response (Emit) |
| ------------------------- | ------------- |------------------------- | --------------- |
| ADD_ITEM                  | On            | title, completed, author |                 |
| ADD_ITEM_SUCCESSFULLY     | Emit          |                          | Created todo    |
| ADD_ITEM_WITH_ERROR Cell  | Emit          |                          | Error           |

## Author
Created and maintained by Dima Manhura ([@dimamanhura](https://www.linkedin.com/in/dima-manhura-889259144)).


## License
`TO-DO List app API` is available under the MIT license. See the [LICENSE.md](LICENSE.md) file for more info.


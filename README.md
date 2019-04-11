# Apollo/GraphQL - Chess Multiplayer Game Server

## Installation

#### 1. Install node_modules

```sh
npm install
```

#### 2. Setup .env file

In order to run server, you have to setup a mongodb and provide a login url through .env
Create .env file in root directory:

```sh
touch .env
```

Add the following environemnt variables to .env:

```
REACT_APP_GRAPHQL_SERVER=[url to apollo graphql server]
REACT_APP_GRAPHQL_SERVER_WS=[url to apollo graphql web sockets]
```

#### 3. Run the server

```sh
npm start
```

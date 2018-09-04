# Split Mongo Databases Sample

## Description
This repo has a simple example of working with mongo, mongoose, node and express in an app with two different databases. One for real data for the real app and another used only for testing purposes.

## Error 1 - Connecting to both databases
If I use the conditional for the test environment the code still connects to the real database
```js
if ( process.env.NODE_ENV !== "test" ) {
  mongoose.connect(...);
}
```
If I test for development environment, it doesn't
```js
if ( process.env.NODE_ENV === "development" ) {
  mongoose.connect(...);
}
```

## Error 2 - Not creating location index in test database
When running the test suite, the user is added to the collection but there is no index for the location, so there is no way to assert the geo location of the user. Running the following:
```
db.users.getIndexes()
```
Returns: 
```json
[
  {
    "v" : 2,
    "key" : {
      "_id" : 1
    },
    "name" : "_id_",
    "ns" : "split_test.users"
  }
]
```
#### System
- Windows 7 64
- Node version: 8.11.4
- NPM version: 5.6.0
- Mongoose: 5.2.12
- Express: 4.16.3
- Supertest: 3.1.0

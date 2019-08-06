const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./schema');
const app = express();

app.get('/', (req, res)=> {
    res.send('Welcome to the App');
});

app.use('/graphiql', graphiqlExpress({
    endpointURL : "/graphql"
}));

app.use('/graphql', express.json(), graphqlExpress({
    schema
})); // Takes a schema as an option

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`app is listening on the port : ${port}`));


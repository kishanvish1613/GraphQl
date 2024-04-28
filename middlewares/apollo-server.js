const {ApolloServer} = require('@apollo/server');

const server = new ApolloServer({
    typeDefs: `
        type Info {
            id: ID!
            title: String!
            body: String!
            userName: String! 
        }

        type Query {
            getInfo: [Info]
        }
    `,
    resolvers: {
        Query: {
            getInfo: () => [{
                id: 1,
                title: 'lolo',
                body: 'body data',
                userName: 'kian'
            }]
        }
    }
});

module.exports = server;
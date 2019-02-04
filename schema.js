const axios = require('axios');
const {GraphQLObjectType, GraphQLInt, GraphQLString,GraphQLList, GraphQLSchema} = require('graphql');

// Blogs type
const BlogType = new GraphQLObjectType({
    name : 'Blog',
    fields: () => ({
        userId: { type : GraphQLInt } ,
        id: { type : GraphQLInt },
        title: { type : GraphQLString },
        body: { type : GraphQLString }
    })
});


const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
        Blogs: {
            type: new GraphQLList(BlogType),
            resolve(parent, args) {
                return axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.data);
            }
        },
        SingleBlog: {
            type: BlogType,
            args: {
                id: { type : GraphQLInt }   
            },
            resolve(parent, args) {
                return axios
                .get(`https://jsonplaceholder.typicode.com/posts/${args.id}`)
                .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
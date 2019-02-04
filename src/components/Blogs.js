import React, { Component, Fragment } from "react";
import gpl from "graphql-tag";
import { Query } from "react-apollo";
import BlogItem from "./BlogItem";

const BLOGQUERY = gpl`
    query Blogs{
        Blogs{
            id
            title
            body
        }
    }
`;

export class Blogs extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <ul className="list-group">
            <Query query={BLOGQUERY}>
              {({ loading, error, data }) => {
                if (loading) return <h2>loading...</h2>;
                if (error) console.log(error);

                return (
                  <Fragment>
                    {data.Blogs.map(Blog => (
                      <BlogItem key={Blog.id} Blog={Blog} />
                    ))}
                  </Fragment>
                );
              }}
            </Query>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Blogs;

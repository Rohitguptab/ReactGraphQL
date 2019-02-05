import React, { Component, Fragment } from "react";
import gpl from "graphql-tag";
import { Query } from "react-apollo";

export default class BlogInner extends Component {
  render() {
    let { id } = this.props.match.params;
    id = parseInt(id);

    const BLOGQUERYSINGLE = gpl`
      query SingleBlog($id: Int!){
          SingleBlog(id : $id){
            id
            title
            userId
            body
          }
      }
  `;
    return (
      <Fragment>
        <div className="container">
          <ul className="list-group">
            <Query query={BLOGQUERYSINGLE} variables={{ id }}>
              {({ loading, error, data }) => {
                if (loading) return <h2>loading...</h2>;
                if (error) console.log(error);
                console.log(data);
                return (
                  <Fragment>
                    <h2>{data.SingleBlog.title}</h2>
                    <p>{data.SingleBlog.body}</p>
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

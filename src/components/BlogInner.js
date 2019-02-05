import React, { Component, Fragment } from "react";
import gpl from "graphql-tag";
import { Query } from "react-apollo";

const DataId = 3;


export default class BlogInner extends Component {
  
  render() {
    console.log(this.props.match.params.id);
    
    return (
      <Fragment>
        <div className="container">
          <ul className="list-group">
            <Query query={BLOGQUERYSINGLE} id='5'>
              {({ loading, error, data }) => {
                if (loading) return <h2>loading...</h2>;
                if (error) console.log(error);

                return (
                  <Fragment>
                    <h2>{data.SingleBlog.title}</h2>
                  </Fragment>
                );
              }}
            </Query>
          </ul>
        </div>
      </Fragment>
    )
  }
}

const BLOGQUERYSINGLE = gpl`
    query SingleBlog{
        SingleBlog(id : 1){
          id
          title
          userId
          body
        }
    }
`;

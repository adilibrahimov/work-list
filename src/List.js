import React, { Component } from 'react'
import Page from "./Page";
import Details from "./Details";
export default class List extends Component {
    render() {
        const { data, handleChenge, pageIndex, posts } = this.props;
        const { deleteObject } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Work</th>
                                    <th scope="col">Details</th>
                                    <th scope="col ">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((data, index) => {

                                        return (
                                            <Page key={index}
                                                posts={posts}
                                                data={data}
                                                index={index}
                                                handleChenge={handleChenge}
                                                deleteObject={deleteObject}
                                            />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 p-2">
                        <Details data={data} pageIndex={pageIndex} posts={posts} />
                    </div>
                </div>
            </div>
        )
    }
}

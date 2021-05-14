import React, { Component } from 'react';

class PageNation extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div id="movie">
                <div>페이지당 영화 갯수:{this.props.moviePerPage}</div>
                <div>총 영화 갯수:{this.props.totalCount}</div>
                
            </div>
        );
    }
}

export default PageNation;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        console.log(this.props);
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title} 
                    className='list-group-item' 
                    onClick={() =>  this.props.selectBook(book)}    
                    >
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul clannName='list-group col-sm-4' >
                {this.renderList()}
            </ul>    
        )
    }
}

// Whatever is returned will show up as a prop inside BookList
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

// Anything returned from this func will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed to all of our reducers0
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container- make 'selectBook' dispatch method available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
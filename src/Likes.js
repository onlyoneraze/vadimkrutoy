import { connect } from 'react-redux';

function Likes(props) {
    console.log(props);
    return (
        <div className='button-controls'>
            <button>💖{props.likes}</button>
            <button>💔{props.dislikes}</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapStateToProps > ', state);
    return {
        likes: state.likes,
        dislikes: state.dislikes
    }
}

export default connect(mapStateToProps)(Likes);
import {connect} from 'react-redux';
import TrackList from './TrackList';

// function mapStateToProps(state) {
//     const tracks = state.track
//     return {tracks}
// }

// export default connect(mapStateToProps)(TrackList)
export default connect(({track}) => ({tracks: track}))(TrackList)
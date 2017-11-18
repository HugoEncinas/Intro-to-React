import React, {Component} from 'react';
import { AlbumList } from '../Album';
// import Photo from '../Photo';
import { Switch, Route } from 'react-router';
import * as api from '../../api'

class Main extends Component {
  state = {
    albums: {},
    photos: {}
  }

  componentWillMount() {
    this.setState({
      albums: api.getAlbums(),
      photos: api.getPhotos()
    });
  }

  render() {
    const { albums, photos } = this.state;
    const notFound = () => <h1>Component not found, sorry</h1>;

    const albumList = () => {
      return (
        <AlbumList
          albums={albums}
          photos={photos}
        />
      );
    }

    return (
      <Switch>
        <Route exact path="/" render={albumList} />
        <Route path="/albums" render={albumList} />
        <Route render={notFound} />
      </Switch>
    );
  }
}


// const Main = () => {
//   return (
//     <div>
//       Main
//       <Album/>
//     </div>
//   );
// }

export default Main;

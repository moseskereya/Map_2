import React, { Component } from 'react';
import { Map, GoogleApiWrapper , Marker} from 'google-maps-react';
import axios from 'axios'
class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             places : []
         }
    }

    componentDidMount = () =>{
        axios.get('https://corona.lmao.ninja/v2/countries')
        .then(res =>{
            console.log(res.data)
            this.setState({places: res.data})
        })
        .catch( error =>{
            console.log(error)
        })
    }


    ShowAll = () => {
        return this.state.places.map((store, index) => {
          return <Marker 
          key={index} 
          id={index} 
          position={{
           lat: store.countryInfo.lat,
           lng: store.countryInfo.long
         }}
         />
        })
      }


    render() { 
        return ( 
            <Map style={styleMedia}
            zoom = {3}
            google = {this.props.google}
            initialCenter = {{lat : -6, lng : 35}}
            >
                {this.ShowAll()}
            </Map>
         );
    }
}
 
export default GoogleApiWrapper({
    apiKey: "AIzaSyBiYs6RzugOo9vR_UuwWP-DSRhggdkdcsQ"
}) (Maps);
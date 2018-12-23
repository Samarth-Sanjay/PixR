import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = { images: [] };

     onSearchSubmit = async (term) =>   {
        const response = await axios.get('https://api.unsplash.com/search/photos',
            {
                params: { query : term,
                page : 1},
                headers: {
                    Authorization : "Client-ID d4994ef03adb8936af4a3078580c7e37566d03408e933e9d594768532873023a"
                }

            });
         console.log(response.data.results);
       // this.setState({images: response.data.results});

    }

    render() {
        return (

            <div className= "ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmitting={this.onSearchSubmit} />
                found {this.state.images};
            </div>
        );
    }
}

export default App;
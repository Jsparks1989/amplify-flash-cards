import React from 'react';
import MenuCards from './MenuCards';
import DrinkCards from './DinkCards';
import { BrowserRouter, Route } from 'react-router-dom';




class App extends React.Component {

    menuCards = () => {
        return(
            <BrowserRouter>
                <Route path='/menu' exact component={MenuCards} />
            </BrowserRouter>
        );
    }

    drinkCards = () => {
        return(
            <BrowserRouter>
                <Route path='/drinks' exact component={DrinkCards} />
            </BrowserRouter>
        );
    }

    render() {
        return(
            <div>


                <button onClick={this.menuCards()}>Menu test</button>
                <button onClick={this.drinkCards()}>Drink test</button>
                {/* <StackOverflow2 /> */}
            </div>
        );
    }
}



export default App;
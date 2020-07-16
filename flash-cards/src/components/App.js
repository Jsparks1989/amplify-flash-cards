import React from 'react';
import MenuCards from './MenuCards';
import DrinkCards from './DrinkCards';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import '../styles/style.css';




class App extends React.Component {

    // menuTest = () => {
    //     return(
    //         <BrowserRouter>
    //             <Route path='/menu' exact component={MenuCards} />
    //         </BrowserRouter>
    //     );
    // }

    // drinkTest = () => {
    //     return(
    //         <BrowserRouter>
    //             <Route path='/drinks' exact component={DrinkCards} />
    //         </BrowserRouter>
    //     );
    // }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <NavLink to="/menu">
                        <button id='menu-button'>Menu test</button>
                    </NavLink>
                    <NavLink to="/drinks">
                        <button id='menu-button'>Drink test</button>
                    </NavLink>
                    <br />
                    <Switch>
                        <Route path="/drinks" exact component={DrinkCards} />
                        <Route path="/menu" exact component={MenuCards} />
                    </Switch>
                </BrowserRouter>
                
            </div>
        );
    }
}



export default App;
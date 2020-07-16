import React from 'react';
import { connect } from 'react-redux';
import '../styles/style.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';







//-- Flip animation is working now. 
//-- Now I need to clean up the code.
//-- I need to figure out how to reset isFlipped (from react-flippy) back to false when next button is clicked.
//   I need the FrontSide visible when Next is clicked.
//-- Possible solution.... react-flippy Github had a version where a button could be clicked to flip the card...
//   Look into what the button does to determine how to reset isFlipped again.







//class FlashCards extends React.Component {
class MenuCards extends React.Component{
    state = {
       randomNumber: 0,
       isFlipped: false
    }

    randomQuestion = (arry=[]) => {
        var num = Math.floor(Math.random() * arry.length);
        this.setState({randomNumber: num});
        //-- Add code that will reset answer.style.display:'none'. 
        //   Have a bug that shows the answer first, not question, sometimes when Next is clicked. 
        // const x = document.getElementById('answer');
        // const y = document.getElementById('question');
        // x.style.display = 'none';
        // y.style.display = 'block';

    }


    // flipDisplay = () => {
    //     const x = document.getElementById("question");
    //     const y = document.getElementById("answer");
    //     if (x.style.display === 'none' && y.style.display === 'block') {
    //       x.style.display = 'block';
    //       y.style.display = 'none'
    //     } else {
    //       x.style.display = 'none';
    //       y.style.display = 'block'
    //     }
    // }

    render() {
        return(
            <div className='ui container'>
                {/* <div style={{ margin: '2em' }} className='ui one column stackable center aligned page grid'>
                        <h1 className='ui header'>Drinks Menu Flash Cards</h1>
        
                        <div className='column twelve wide' id='questionAnswer'>
                            <div id='question'>
                                <h2 id='text' className='ui header'>Question</h2>
                                <div className='ui divider'></div>
                                <p id='text'>{ this.props.drinks[this.state.randomNumber].question }</p>
                            </div>
                            <div id='answer' style={{ display: 'none' }}>
                                <h2 id='text' className='ui header'>Answer</h2>
                                <div className='ui divider'></div>
                                <p id='text'>{ this.props.drinks[this.state.randomNumber].answer }</p>
                            </div>

                            <div>
                                <button id='flip-button' className='fluid ui button' onClick={this.flipDisplay}>Flip</button>
                                <button id='next-button' className='fluid ui button' onClick={() => this.randomQuestion(this.props.drinks)}>Next</button>
                            </div>
                        </div>
                    
                </div> */}


                {/* ========================================================================================================================= */}
                <div style={{ margin: '2em' }} className='ui one column stackable center aligned page grid'>

                    <h1 className='ui header'>Drinks Menu Flash Cards</h1>
                    <div className='column twelve wide'>

                        <Flippy flipOnHover={false} flipOnClick={true} flipDirection='horizontal' ref={(r) => this.flippy = r}>
                            <FrontSide style={{ backgroundColor: 'maroon' }} id='question'>
                                <h2 id='text' className='ui header'>Question</h2>
                                <p id='text'>{ this.props.drinks[this.state.randomNumber].question }</p>
                            </FrontSide>
                            <BackSide style={{ backgroundColor: 'maroon' }} id='answer'>
                                <h2 id='text' className='ui header'>Answer</h2>
                                <p id='text'>{ this.props.drinks[this.state.randomNumber].answer }</p>
                            </BackSide>
                        </Flippy>
                        <button id='next-button' className='fluid ui button' onClick={() => this.randomQuestion(this.props.drinks)}>Next</button>

                    </div>
                    
                </div>
                {/* ========================================================================================================================= */}


            </div>
        );
    }
}




const mapStateToProps = (state) => {
    return {
        drinks: state.drinksReducer
    };
}


export default connect(mapStateToProps)(MenuCards);
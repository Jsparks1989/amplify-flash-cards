import React from 'react';
import { connect } from 'react-redux';
import '../styles/style.css';


//class FlashCards extends React.Component {
class StackOverflow2 extends React.Component{
    state = {
       randomNumber: 0
    }

    randomQuestion = (arry=[]) => {
        var num = Math.floor(Math.random() * arry.length);
        this.setState({randomNumber: num});
        //-- Add code that will reset answer.style.display:'none'. 
        //   Have a bug that shows the answer first, not question, sometimes when Next is clicked. 
        const x = document.getElementById('answer');
        const y = document.getElementById('question');
        x.style.display = 'none';
        y.style.display = 'block';

    }


    flipDisplay = () => {
        const x = document.getElementById("question");
        const y = document.getElementById("answer");
        if (x.style.display === 'none' && y.style.display === 'block') {
          x.style.display = 'block';
          y.style.display = 'none'
        } else {
          x.style.display = 'none';
          y.style.display = 'block'
        }
    }


    render() {
        return(
            //<div className='ui container'>
            <div style={{ margin: '2em' }} className='ui one column stackable center aligned page grid'>
                    <h1 className='ui header'>Menu Flash Cards</h1>
    
                    <div className='column twelve wide' id='questionAnswer'>
                        <div id='question'>
                            <h2 id='text' className='ui header'>Question</h2>
                            <div className='ui divider'></div>
                            <p id='text'>{ this.props.questionAnswer[this.state.randomNumber].question }</p>
                        </div>
                        <div id='answer' style={{ display: 'none' }}>
                            <h2 id='text' className='ui header'>Answer</h2>
                            <div className='ui divider'></div>
                            <p id='text'>{ this.props.questionAnswer[this.state.randomNumber].answer }</p>
                        </div>

                        <div>
                            <button id='flip-button' className='fluid ui button' onClick={this.flipDisplay}>Flip</button>
                            <button id='next-button' className='fluid ui button' onClick={() => this.randomQuestion(this.props.questionAnswer)}>Next</button>
                        </div>
                    </div>
                    

                
            </div>
        );
    }
}




const mapStateToProps = (state) => {
    return {
        questionAnswer: state.questionAnswer
    };
}

//export default connect(mapStateToProps)(FlashCards);
export default connect(mapStateToProps)(StackOverflow2);
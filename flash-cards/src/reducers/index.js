import { combineReducers } from 'redux';



const questionAnswerReducer = () => {
    return [
        {
            question: 'How many sides come with our sirloin?',
            answer: '2'
        },
        {
            question: 'What sizes do our sirloin come in?',
            answer: '6oz, 9oz and 12oz'
        },
        {
            question: 'What are the toppings on our baked potato?',
            answer: 'Butter, sour cream, bacon bits, cheese and chives'
        },
        {
            question: 'Which of our steaks are cooked on the woodfire grill?',
            answer: 'The ribeye and bone-in ribeye'
        },
        {
            question: 'Which of our steaks are cooked on the flat top grill?',
            answer: 'Sirloin, filet, and strip'
        },
        {
            question: 'Does our Outback Burger come with cheese and bacon automatically?',
            answer: 'No'
        },
        {
            question: 'What are the different cheese options available for our burgers?',
            answer: 'American, swiss, cheddar, and provolone'
        },
        {
            question: 'What sizes do our salmon come in?',
            answer: '7oz and 10oz'
        },
        {
            question: 'What two shrimp appitizers do we offer?',
            answer: 'Grilled shrimp on the barbie and gold coast coconut shrimp'
        },
        {
            question: 'What sauce is paired with our bloomin onion?',
            answer: 'Bloom sauce'
        },
        {
            question: 'How many shrimp come with our GSB appitizer?',
            answer: 'Half order: 4, full order: 8'
        },
        {
            question: 'What is the acceptable minimum width for our bloomin onion?',
            answer: '4 inches across'
        },
        {
            question: 'What are the different sauces our kukabura wings can be tossed in?',
            answer: 'Mild, medium, and hot'
        },
        {
            question: 'How many wings come with our kukabura wings appitizer?',
            answer: '5 drums and 5 flats, 10 in total'
        },
        {
            question: 'What are our two premium side salads?',
            answer: 'Blue cheese pecan chop salad, and our blue cheese wedge salad'
        },
        {
            question: 'What are our different salad dressings?',
            answer: 'Ranch, blue cheese, blue cheese vin, honey mustard, mustard vin, caesar, 1000 island, light balsamic vin, and oil & vin'
        },
    ];
}


// const randomNumber = (state=0, action) => {
    
// }



export default combineReducers({
    questionAnswer: questionAnswerReducer
});
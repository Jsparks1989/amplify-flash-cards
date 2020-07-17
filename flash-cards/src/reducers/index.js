import { combineReducers } from 'redux';



const menuReducer = () => {
    return [
        {
            question: 'How many sides come with our sirloin?',
            answer: '2'
        },
        {
            question: 'What sizes do our sirloin come in?',
            answer: 'Sizes are: 6oz, 9oz and 12oz'
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
            question: 'What are the different sauces our kookaburra wings can be tossed in?',
            answer: 'Mild, medium, and hot'
        },
        {
            question: 'How many wings come with our kookaburra wings appitizer?',
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
        {
            question: 'How is a rare cooked steak described?',
            answer: 'Cool red center'
        },
        {
            question: 'How is a medium rare cooked steak described?',
            answer: 'Warm red center'
        },
        {
            question: 'How is a medium cooked steak described?',
            answer: 'Warm pink center with a touch of red'
        },
        {
            question: 'How is a medium well cooked steak described?',
            answer: 'Warm brown with a touch of pink center'
        },
        {
            question: 'How is a well cooked steak described?',
            answer: 'Hot brown center with no pink'
        },
        {
            question: 'What are the ingredients for our three cheese steak dip?',
            answer: 'Blend of steak, gouda, parmesan and jack cheeses, red bell pepper and onions'
        },
        {
            question: 'What is our cheese blend for our cheese fries?',
            answer: 'Monteray jack and cheddar'
        },
        {
            question: 'How many ounces are our burger patties?',
            answer: '8oz'
        },
        {
            question: 'What sauce comes on the Sweet Chook O\' Mine Sandwich?',
            answer: 'Honey Mustard'
        },
        {
            question: 'Which entrees are served with a bowl and a wet nap?',
            answer: 'Drovers and ribs platter'
        },
        {
            question: 'How many ounces is each lobster tail?',
            answer: '4oz'
        },
        {
            question: 'How many bones are in the half order and full order of ribs?',
            answer: '4 and 8'
        },
        {
            question: 'How would you describe the season & seared cooking style to a guest?',
            answer: '17 different bold seasonings on the flat top grill'
        },
        {
            question: 'How would you describe the woodfire cooking style to a guest?',
            answer: 'salt & pepper seasoning over an open flame. Similar to cooking from home on a grill'
        },
        {
            question: 'Describe our Victoria\'s filet',
            answer: 'Most tender; best served medium and below'
        },
        {
            question: 'Describe our Center-Cut Sirloin',
            answer: 'Most lean; best served medium and below'
        },
        {
            question: 'Describe our ribeye',
            answer: 'Juiciest and marbled; best served medium and up'
        },
        {
            question: 'Describe our Bone-in Natural Cut Ribeye',
            answer: 'Extra marbling; best served medium & up'
        },
        {
            question: 'Which grade of steaks do we serve?',
            answer: 'Choice'
        },
        {
            question: 'Which of our steaks has the most marbling?',
            answer: 'Ribeye'
        },
        {
            question: 'Which of our steaks is the most tender?',
            answer: 'Filet'
        },
        {
            question: 'Which of our aussie-tizers are available in both regular and small sizes?',
            answer: 'Coco shrimp, grilled shrimp, and cheese fries'
        },
        {
            question: 'How many rib bones come in the junior ribs?',
            answer: '3'
        },
        {
            question: 'How many chicken tenders come in the kid\'s chicken tender meal?',
            answer: '3'
        },
        {
            question: 'What cheese comes on the kid\'s Boomerang Cheeseburger',
            answer: 'American'
        }
    ];
}


const drinksReducer = () => {
    return [
        {
            question: 'What two tequilas can customers choose from for a top shelf rita?',
            answer: 'Avion and patron'
        },
        {
            question: 'What are the ingredients in our Wallaby Darned?',
            answer: 'Prosecco, Svedka vodka, and peachtree schnapps'
        },
        {
            question: 'What ingredients are in our Aussie Rum Punch?',
            answer: 'Mount Gay rum, Malibu coconut rum, fresh lime, mango & cranberry juice'
        },
        {
            question: 'What tequila is in our Sauza Gold Coast Rita?',
            answer: 'Sauza gold tequila'
        },
        {
            question: 'What ingredients are in our Blood Orange Rita?',
            answer: 'Avion silver tequila, Cointreau Orange liqueur, blood orange mix, and a salt rim'
        },
        {
            question: 'What ingredients are in our Naturally Skinny Rita?',
            answer: 'Blue Agave El Jimador Reposado Tequila, citrus juices, and orange juice'
        },
        {
            question: 'What ingredients are in our Blackberry Sangria?',
            answer: 'Australian Jacob\'s Creek Moscato and Finlandia Raspberry Vodka, blackberry flavor and pineapple juice'
        },
    ];
}

// const randomNumber = (state=0, action) => {
    
// }



export default combineReducers({
    questionAnswer: menuReducer,
    drinksReducer: drinksReducer
});
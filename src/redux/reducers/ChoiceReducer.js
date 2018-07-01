const initialState = {
    title: "Which Marvel Marvel Justice League Character You Are?",
    quizzes: [
        {
            id: 1,
            question: "Pick a type of weather?",
            options: [
                {id: 12, text: "Sunshine"},
                {id: 14, text: "Cloudy"},
                {id: 16, text: "Windy"}
            ],
            selected: {}
        },
        {
            id: 2,
            question: "Pick a soft drink?",
            options: [
                {id: 22, text: "Coca Cola"},
                {id: 24, text: "Root Beer"},
                {id: 26, text: "Apple Cider"},
                {id: 26, text: "Perrier"}
            ],
            selected: {}
        }
    ],
    results: [
        {id: 101, superhero: "Superman"},
        {id: 102, superhero: "Batman"},
        {id: 103, superhero: "Green Lantern"},
        {id: 104, superhero: "Flash"},
        {id: 105, superhero: "Wonder Woman"},
        {id: 106, superhero: "Aquaman"}
    ]
};

export const choiceReducer = (state = initialState, action) => {

    console.log('Got Action ' + action.type, action);

    switch (action.type) {
        case 'SELECT_CHOICE':
            // return Object.assign({}, state, {items: state.items.concat(action.payload)});
            // return {...state, quizzes[0].selected: action.payload };
            return state;
        default:
            return state;
    }
};
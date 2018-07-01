export const initialState = {
  title: "Which Marvel Justice League Character You Are?",
  quizzes: [
    {
      id: 1,
      question: "Pick a type of weather?",
      options: [
        {id: 12, text: "Sunshine"},
        {id: 14, text: "Cloudy"},
        {id: 16, text: "Windy"},
        {id: 18, text: "Rainy"}
      ],
      selected: ""
    },
    {
      id: 2,
      question: "Pick a soft drink?",
      options: [
        {id: 22, text: "Coca Cola"},
        {id: 24, text: "Root Beer"},
        {id: 26, text: "Apple Cider"},
        {id: 28, text: "Perrier"}
      ],
      selected: ""
    },
    {
      id: 3,
      question: "Pick a dessert?",
      options: [
        {id: 32, text: "Pavlova"},
        {id: 34, text: "Creme brulee"},
        {id: 36, text: "Chocolate Souffle"},
        {id: 38, text: "Tiramisu"}
      ],
      selected: ""
    }
  ],
  active: 0,
  results: [
    {id: 101, superhero: "Superman"},
    {id: 102, superhero: "Batman"},
    {id: 103, superhero: "Green Lantern"},
    {id: 104, superhero: "Flash"},
    {id: 105, superhero: "Wonder Woman"},
    {id: 106, superhero: "Aquaman"}
  ]
};
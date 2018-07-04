export const initialState = {
  active: 0,
  title: "Which Marvel Justice League Character You Are?",
  quizzes: [
    {
      id: 1,
      question: "Pick a type of weather?",
      options: [
        {id: 1, text: "Sunshine"},
        {id: 2, text: "Cloudy"},
        {id: 3, text: "Windy"},
        {id: 4, text: "Rainy"}
      ]
    },
    {
      id: 2,
      question: "Pick a soft drink?",
      options: [
        {id: 1, text: "Coca Cola"},
        {id: 2, text: "Root Beer"},
        {id: 3, text: "Apple Cider"},
        {id: 4, text: "Perrier"}
      ]
    },
    {
      id: 3,
      question: "Pick a book?",
      options: [
        {id: 1, text: "The Hobbit"},
        {id: 2, text: "A Song of Ice and Fire"},
        {id: 3, text: "Harry Potter"},
        {id: 4, text: "Citizen Kane"}
      ]
    },
    {
      id: 4,
      question: "Pick a dessert?",
      options: [
        {id: 1, text: "Pavlova"},
        {id: 2, text: "Creme brulee"},
        {id: 3, text: "Chocolate Souffle"},
        {id: 4, text: "Tiramisu"}
      ]
    }
  ],
  results: [
    {id: 101, superhero: "Superman", img: "Superman.jpg"},
    {id: 102, superhero: "Ironman", img: "Ironman.jpg"},
    {id: 103, superhero: "Green Lantern", img: "GreenLantern.jpg"},
    {id: 104, superhero: "Hulk", img: "Hulk.jpg"},
    {id: 105, superhero: "Wonder Woman", img: "WonderWoman.jpg"},
    {id: 106, superhero: "Deredevil", img: "Deredevil.jpg"},
    {id: 107, superhero: "Spiderman", img: "Spiderman.jpg"}
  ],
  selected: []
};
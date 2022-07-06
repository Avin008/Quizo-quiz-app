// type Quizes = {
//   id: string;
//   title: string;
// }

// type Category = {
//   id: string;
//   categoryName: string;
//   questionCount: number;
//   img: string;
//   quizes: Quizes[];
// };

// type Data = {
//   quiz: Category[];
// };

const data = {
  quiz: [
    {
      id: "s456eopi",
      categoryName: "Anime Quiz",
      questionCount: 5,
      img: "https://img.wallpapersafari.com/tablet/768/1024/53/30/WlcwaZ.jpg",
      quizes: [
        { id: "uo768w", title: "Suits" },
        { id: "uo768w", title: "Suits" },
        { id: "uo768w", title: "Suits" },
      ],
    },
    {
      id: "s456ekop",
      categoryName: "Tv Shows Quiz",
      questionCount: 5,
      img: "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/SuitsCompSS_DVD_2Docard_191329123959.webp?itok=tEgRPX-6",
      quizes: [
        { id: "uo768w", title: "Suits" },
        { id: "uo768w", title: "Suits" },
        { id: "uo768w", title: "Suits" },
      ],
    },
    {
      id: "s456edr",
      categoryName: "JavaScript",
      questionCount: 5,
      img: "https://wallpaperaccess.com/full/6234338.png",
      quizes: [
        { id: "uo768w", title: "Suits" },
        { id: "uo768w", title: "Suits" },
        { id: "uo768w", title: "Suits" },
      ],
    },
  ],
};

export { data };

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMoviesDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
const a = prompt('Один из последних просмотров фильмов', ''),
      b = prompt('На сколько вы его оцениваете' , ''),
      c = prompt('Один из последних просмотров фильмов' , ''),
      d = prompt('На сколько вы его оцениваете' , '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;
console.log(personalMoviesDB);
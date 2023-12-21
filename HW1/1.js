"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
const albums = [
  {
    title: "The Black Album",
    artist: "Metallica",
    year: "1991"
  },
  {
    title: "The Miracle",
    artist: "Queen",
    year: "1989"
  },
  {
    title: "Акустический альбом",
    artist: "Король и шут",
    year: "1998"
  }
]
const musicCollection = {
  albums,
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.albums.length) {
          return { done: false, value: this.albums[index++] }
        }
        return { done: true };
      }
    }
  }
  // *[Symbol.iterator](){
  //   for (const el of albums) {
  //     yield el;
  //   }
  // }
};

for (const element of musicCollection) {
  console.log(element)
}



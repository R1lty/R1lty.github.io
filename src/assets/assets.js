import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";

import handeHoh from "./handehoh.jpg";
import solier from "./солдаты.jpg";
import witcherImg from "./witcher.jpg";
import kishImg from "./Король и Шут.jpg";
import miladzeImg from "./Миладзе.jpg";
import gagarinImg from "./Гагарин.jpg";
import gosudarinaImg from "./Государыня.jpg";
import zemfiraImg from "./Земфира.jpg";
import iz412Img from "./Иж-412.jpg";
import noize from "./noize.jpg";
import rukiVerh from "./руки.jpg";
import tsoy from "./цой.jpg";
import netflix from "./netflix.jpg";
import knjaz from "./Князь.jpg";
import pornoFilms from "./Порнофильмы.jpg";
import letov from "./Летов.jpg";
import egor from "./Егор.jpg";
import pizza from "./pizza.jpg";
import akvarium from "./Аквариум.jpg";
import anumalJazz from "./animal jazz.jpg";
import allSongsImg from "./allSongs.jpg";
import noizeAlbum from "./noizeAlbum.jpg";
import kishAlbum from "./кишАльбом.jpg";
import pizzaAlbum from "./pizzaAlbum.jpg";
import akvariumAlbum from "./аквариумАльбольбом.jpg";
import grecka from "./Гречка.jpg"
import bi2 from "./bi2.jpg";


import handeHoch from "./Hände Hoch.mp3";
import soldierSong from "./Асуждаю.mp3";
import witcherSong from "./Ведьмаку Заплатите Чеканой Моентой.mp3";
import vedmaIOsel from "./Вельма и Осёл.mp3";
import vera from "./Вера.mp3";
import gagarinSong from "./Гагарин.mp3";
import gosudarinaSong from "./Государыня.mp3";
import zemfiraSong from "./Жить в твеой голове.mp3";
import iz412Song from "./Иж-412.mp3";
import izOkna from "./Из окна.mp3";
import kroshka from "./Крошка моя.mp3";
import legend from "./Легенда.mp3";
import lesnik from "./Лесник.mp3";
import netflixSong from "./Нетфликс.mp3";
import palevo from "./Палево.mp3";
import radio from "./Песня для радио.mp3";
import pivo from "./Пиво.mp3";
import prostiPoshaiPrivet from "./Прости. Прощай. Привет.mp3";
import skala from "./Прыгну со скалы.mp3";
import soldatamiNeRozdaytsa from "./Солдатами не рождаются.mp3";
import genij from "./Танец злобного гения.mp3";
import vspominayou from "./Тебя я вспоминаю.mp3";
import ulibka from "./Улыбка.mp3";
import fari from "./Фары.mp3";
import kemerov from "./Человек из Кемерова.mp3";
import tsustva from "./Чувства.mp3";
import adelaida from "./Аделаида.mp3"
import nikitaRezanskiy from "./Никита Резанский.mp3"
import devushkaBolna from "./Когда Твоя Девушка Больна.mp3"
import lubiMenaLubi from "./Люби меня люби.mp3"
import soManyLikes from "./soManyLikes.mp3"

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: 0,
    name: "Все треки",
    image: allSongsImg,
    bgColor: "#2a4365",
    songs: [
      {
        id: 0,
        name: "Лайки",
        image: bi2,
        file: soManyLikes,
        desc: "Би-2",
        duration: "3:25",
      },
      {
        id: 1,
        name: "Люби меня люби",
        image: grecka,
        file: lubiMenaLubi,
        desc: "Гречка",
        duration: "2:10",
      },
      {
        id: 2,
        name: "Когда Твоя Девушка Больна",
        image: tsoy,
        file: devushkaBolna,
        desc: "Виктор Цой",
        duration: "3:16",
      },
      {
        id: 3,
        name: "Никита Рязанский",
        image: akvarium,
        file: nikitaRezanskiy,
        desc: "Аквариум",
        duration: "2:59",
      },
      {
        id: 4,
        name: "Жить в твоей голове",
        image: zemfiraImg,
        file: zemfiraSong,
        desc: "Земфира",
        duration: "3:14",
      },
      {
        id: 5,
        name: "Аделаида",
        image: akvarium,
        file: adelaida,
        desc: "Аквариум",
        duration: "3:55",
      },
      {
        id: 6,
        name: "Государыня",
        image: gosudarinaImg,
        file: gosudarinaSong,
        desc: "Аквариум",
        duration: "2:36",
      },
      {
        id: 7,
        name: "Иж-412",
        image: iz412Img,
        file: iz412Song,
        desc: "RADIOTEHNIKA",
        duration: "3:25",
      },
      {
        id: 8,
        name: "Чувства",
        image: anumalJazz,
        file: tsustva,
        desc: "Animal Jazz",
        duration: "3:15",
      },
      {
        id: 9,
        name: "Человек из Кемерова",
        image: akvarium,
        file: kemerov,
        desc: "Аквариум",
        duration: "2:50",
      },
      {
        id: 10,
        name: "Легенда",
        image: tsoy,
        file: legend,
        desc: "Виктор Цой",
        duration: "2:59",
      },
      {
        id: 11,
        name: "Тебя я вспоминаю",
        image: egor,
        file: vspominayou,
        desc: "Егор Мартьянов",
        duration: "2:58",
      },
      {
        id: 12,
        name: "Прости. Прощай. Привет",
        image: pornoFilms,
        file: prostiPoshaiPrivet,
        desc: "ПОРНОФИЛЬМЫ",
        duration: "4:49",
      },
      {
        id: 13,
        name: "Гагарин",
        image: gagarinImg,
        file: gagarinSong,
        desc: "MIA BOYKA",
        duration: "2:14",
      },
      {
        id: 14,
        name: "Вера",
        image: miladzeImg,
        file: vera,
        desc: "Валерий Меладзе",
        duration: "2:22",
      },
      {
        id: 15,
        name: "Асуждаю",
        image: solier,
        file: soldierSong,
        desc: "Солдаты",
        duration: "3:10",
      },
      {
        id: 16,
        name: "Чеканная Монета",
        image: witcherImg,
        file: witcherSong,
        desc: "Лютик",
        duration: "2:46",
      },
      {
        id: 17,
        name: "Ведьма и Осёл",
        image: kishImg,
        file: vedmaIOsel,
        desc: "Король и Шут",
        duration: "2:31",
      },
      {
        id: 18,
        name: "Из окна",
        image: noize,
        file: izOkna,
        desc: "Noize MC",
        duration: "3:24",
      },
      {
        id: 19,
        name: "Палево!",
        image: noize,
        file: palevo,
        desc: "Noize MC",
        duration: "3:07",
      },
      {
        id: 20,
        name: "Песня для радио",
        image: noize,
        file: radio,
        desc: "Noize MC",
        duration: "3:00",
      },
      {
        id: 21,
        name: "Пиво Пиво Пиво!",
        image: knjaz,
        file: pivo,
        desc: "КняZz",
        duration: "1:41",
      },
      {
        id: 22,
        name: "Прыгну со скалы",
        image: kishImg,
        file: skala,
        desc: "Король и Шут",
        duration: "1:34",
      },
      {
        id: 23,
        name: "Солдатами не рождаются",
        image: letov,
        file: soldatamiNeRozdaytsa,
        desc: "Егор Летов",
        duration: "2:44",
      },
      {
        id: 24,
        name: "Танец злобного гения",
        image: kishImg,
        file: genij,
        desc: "Король и Шут",
        duration: "2:30",
      },
      {
        id: 25,
        name: "Улыбка",
        image: pizza,
        file: ulibka,
        desc: "PIZZA",
        duration: "1:18",
      },
      {
        id: 26,
        name: "Фары",
        image: pizza,
        file: fari,
        desc: "PIZZA",
        duration: "0:43",
      },
      {
        id: 27,
        name: "Крошка моя",
        image: rukiVerh,
        file: kroshka,
        desc: "Руки Вверх!",
        duration: "1:13",
      },
      {
        id: 28,
        name: "Лесник",
        image: kishImg,
        file: lesnik,
        desc: "Король и Шут",
        duration: "1:48",
      },
      {
        id: 29,
        name: "Нетфликс",
        image: netflix,
        file: netflixSong,
        desc: "Егор Мартьянов",
        duration: "0:07",
      },
      {
        id: 30,
        name: "Hände Hoch",
        image: handeHoh,
        file: handeHoch,
        desc: "Прогулка по Берлину",
        duration: "1:34",
      }
    ],
  },
  {
    id: 1,
    name: "Именные",
    image: egor,
    bgColor: "#22543d",
    songs: [
      {
        id: 0,
        name: "Нетфликс",
        image: netflix,
        file: netflixSong,
        desc: "Егор Мартьянов",
        duration: "0:07",
      },
      {
        id: 1,
        name: "Тебя я вспоминаю",
        image: egor,
        file: vspominayou,
        desc: "Егор Мартьянов",
        duration: "2:58",
      },
    ],
  },
  {
    id: 2,
    name: "Ноиз",
    image: noizeAlbum,
    bgColor: "#742a2a",
    songs: [
      {
        id: 0,
        name: "Из окна",
        image: noize,
        file: izOkna,
        desc: "Noize MC",
        duration: "3:24",
      },
      {
        id: 1,
        name: "Палево!",
        image: noize,
        file: palevo,
        desc: "Noize MC",
        duration: "3:07",
      },
      {
        id: 2,
        name: "Песня для радио",
        image: noize,
        file: radio,
        desc: "Noize MC",
        duration: "3:00",
      },
    ],
  },
  {
    id: 3,
    name: "Король и шут",
    image: kishAlbum,
    bgColor: "#44337a",
    songs: [
      {
        id: 0,
        name: "Ведьма и Осёл",
        image: kishImg,
        file: vedmaIOsel,
        desc: "Король и Шут",
        duration: "2:31",
      },
      {
        id: 1,
        name: "Прыгну со скалы",
        image: kishImg,
        file: skala,
        desc: "Король и Шут",
        duration: "1:34",
      },
      {
        id: 2,
        name: "Танец злобного гения",
        image: kishImg,
        file: genij,
        desc: "Король и Шут",
        duration: "2:30",
      },
      {
        id: 3,
        name: "Лесник",
        image: kishImg,
        file: lesnik,
        desc: "Король и Шут",
        duration: "1:48",
      },
    ],
  },
  {
    id: 4,
    name: "PIZZA",
    image: pizzaAlbum,
    bgColor: "#234e52",
    songs: [
      {
        id: 0,
        name: "Улыбка",
        image: pizza,
        file: ulibka,
        desc: "PIZZA",
        duration: "1:18",
      },
      {
        id: 1,
        name: "Фары",
        image: pizza,
        file: fari,
        desc: "PIZZA",
        duration: "0:43",
      },
    ],
  },
  {
    id: 5,
    name: "Аквариум",
    image: akvariumAlbum,

    bgColor: "#744210",
    songs: [
      {
        id: 0,
        name: "Никита Рязанский",
        image: akvarium,
        file: nikitaRezanskiy,
        desc: "Аквариум",
        duration: "2:59",
      },
      {
        id: 1,
        name: "Человек из Кемерова",
        image: akvarium,
        file: kemerov,
        desc: "Аквариум",
        duration: "2:50",
      },{
        id: 2,
        name: "Аделаида",
        image: akvarium,
        file: adelaida,
        desc: "Аквариум",
        duration: "3:35",
      },
      
    ],
  },
];

export const songsData = [
  {
    id: 0,
    name: "Лайки",
    image: bi2,
    file: soManyLikes,
    desc: "Би-2",
    duration: "3:25",
  },
  {
    id: 1,
    name: "Люби меня люби",
    image: grecka,
    file: lubiMenaLubi,
    desc: "Гречка",
    duration: "2:10",
  },
  {
    id: 2,
    name: "Когда Твоя Девушка Больна",
    image: tsoy,
    file: devushkaBolna,
    desc: "Виктор Цой",
    duration: "3:16",
  },
  {
    id: 3,
    name: "Никита Рязанский",
    image: akvarium,
    file: nikitaRezanskiy,
    desc: "Аквариум",
    duration: "2:59",
  },
  {
    id: 4,
    name: "Жить в твоей голове",
    image: zemfiraImg,
    file: zemfiraSong,
    desc: "Земфира",
    duration: "3:14",
  },
  {
    id: 5,
    name: "Аделаида",
    image: akvarium,
    file: adelaida,
    desc: "Аквариум",
    duration: "3:55",
  },
  {
    id: 6,
    name: "Государыня",
    image: gosudarinaImg,
    file: gosudarinaSong,
    desc: "Аквариум",
    duration: "2:36",
  },
  {
    id: 7,
    name: "Иж-412",
    image: iz412Img,
    file: iz412Song,
    desc: "RADIOTEHNIKA",
    duration: "3:25",
  },
  {
    id: 8,
    name: "Чувства",
    image: anumalJazz,
    file: tsustva,
    desc: "Animal Jazz",
    duration: "3:15",
  },
  {
    id: 9,
    name: "Человек из Кемерова",
    image: akvarium,
    file: kemerov,
    desc: "Аквариум",
    duration: "2:50",
  },
  {
    id: 10,
    name: "Легенда",
    image: tsoy,
    file: legend,
    desc: "Виктор Цой",
    duration: "2:59",
  },
  {
    id: 11,
    name: "Тебя я вспоминаю",
    image: egor,
    file: vspominayou,
    desc: "Егор Мартьянов",
    duration: "2:58",
  },
  {
    id: 12,
    name: "Прости. Прощай. Привет",
    image: pornoFilms,
    file: prostiPoshaiPrivet,
    desc: "ПОРНОФИЛЬМЫ",
    duration: "4:49",
  },
  {
    id: 13,
    name: "Гагарин",
    image: gagarinImg,
    file: gagarinSong,
    desc: "MIA BOYKA",
    duration: "2:14",
  },
  {
    id: 14,
    name: "Вера",
    image: miladzeImg,
    file: vera,
    desc: "Валерий Меладзе",
    duration: "2:22",
  },
  {
    id: 15,
    name: "Асуждаю",
    image: solier,
    file: soldierSong,
    desc: "Солдаты",
    duration: "3:10",
  },
  {
    id: 16,
    name: "Чеканная Монета",
    image: witcherImg,
    file: witcherSong,
    desc: "Лютик",
    duration: "2:46",
  },
  {
    id: 17,
    name: "Ведьма и Осёл",
    image: kishImg,
    file: vedmaIOsel,
    desc: "Король и Шут",
    duration: "2:31",
  },
  {
    id: 18,
    name: "Из окна",
    image: noize,
    file: izOkna,
    desc: "Noize MC",
    duration: "3:24",
  },
  {
    id: 19,
    name: "Палево!",
    image: noize,
    file: palevo,
    desc: "Noize MC",
    duration: "3:07",
  },
  {
    id: 20,
    name: "Песня для радио",
    image: noize,
    file: radio,
    desc: "Noize MC",
    duration: "3:00",
  },
  {
    id: 21,
    name: "Пиво Пиво Пиво!",
    image: knjaz,
    file: pivo,
    desc: "КняZz",
    duration: "1:41",
  },
  {
    id: 22,
    name: "Прыгну со скалы",
    image: kishImg,
    file: skala,
    desc: "Король и Шут",
    duration: "1:34",
  },
  {
    id: 23,
    name: "Солдатами не рождаются",
    image: letov,
    file: soldatamiNeRozdaytsa,
    desc: "Егор Летов",
    duration: "2:44",
  },
  {
    id: 24,
    name: "Танец злобного гения",
    image: kishImg,
    file: genij,
    desc: "Король и Шут",
    duration: "2:30",
  },
  {
    id: 25,
    name: "Улыбка",
    image: pizza,
    file: ulibka,
    desc: "PIZZA",
    duration: "1:18",
  },
  {
    id: 26,
    name: "Фары",
    image: pizza,
    file: fari,
    desc: "PIZZA",
    duration: "0:43",
  },
  {
    id: 27,
    name: "Крошка моя",
    image: rukiVerh,
    file: kroshka,
    desc: "Руки Вверх!",
    duration: "1:13",
  },
  {
    id: 28,
    name: "Лесник",
    image: kishImg,
    file: lesnik,
    desc: "Король и Шут",
    duration: "1:48",
  },
  {
    id: 29,
    name: "Нетфликс",
    image: netflix,
    file: netflixSong,
    desc: "Егор Мартьянов",
    duration: "0:07",
  },
  {
    id: 30,
    name: "Hände Hoch",
    image: handeHoh,
    file: handeHoch,
    desc: "Прогулка по Берлину",
    duration: "1:34",
  }
];

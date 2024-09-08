import { createDate } from "utils/date_utils";
import RileyHeadshot from "assets/images/riley.jpg";

const dayjs = require("dayjs");

class SongOfTheWeek {
  constructor(startDate, quoteInfo, songInfo, songLinks) {
    this.startDate = startDate;
    this.quoteInfo = quoteInfo;
    this.songInfo = songInfo;
    this.songLinks = songLinks;
  }
}

const attributors = {
  riley: {
    name: "Riley C",
    picture: RileyHeadshot,
  },
  makenzie: {
    name: "Makenzie S",
  },
  jake: {
    name: "Jake R",
  },
};

const songs = [
  new SongOfTheWeek(
    createDate("05/26/2024"),
    {
      quote:
        "This song is one of my favorites to dance to. " +
        "This month's creative expressions class will be working on choreography to this song. " +
        "Absolute banger, and brings back a lot of great memories.",
      attributionInfo: attributors.riley,
    },
    {
      name: "Old School Turntables",
      artist: "Matt DiMona",
      year: "2017",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b2732275c283db198eed78f157cf",
      youtube: "https://www.youtube.com/watch?v=ZxdHJm_ZGQk",
      spotify: "https://open.spotify.com/track/3ijo1UGnywzuH1YIqnSdo3",
    }
  ),
  new SongOfTheWeek(
    createDate("06/10/2024"),
    {
      quote:
        "I saw Dora Jar perform live last year and discovered this song on her debut EP. " +
        "I love everything about it - the grooving bassline, the " +
        "syncopated rhythms, and the whimsical lyrics. Such a fun song to dance to. ",
      attributionInfo: attributors.makenzie,
    },
    {
      name: "Wizard",
      artist: "Dora Jar",
      year: "2021",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b273e90ad23c08b4aa0e3aa8d7a1",
      youtube: "https://www.youtube.com/watch?v=uCmcKuA5r3A",
      spotify: "https://open.spotify.com/track/6q8bIgs9jfJpkM3bJmbDie",
    }
  ),
  new SongOfTheWeek(
    createDate("09/07/2024"),
    {
      quote:
        "This song has a ton of different layers to dance to, with a bunch of " +
        "hits and variation from start to finish. It's groovy and has lots of energy, " +
        "it always gets me in the mood to dance!",
      attributionInfo: attributors.jake,
    },
    {
      name: "BOOM",
      artist: "X Ambassadors",
      year: "2019",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02899fac4febbc464371e54c27",
      youtube: "https://youtu.be/mXLRy1cNMWs?si=x4s1mrCxihOt2a6x",
      spotify: "https://open.spotify.com/track/3V9cM3nCH2G66afoDi0snu",
    }
  ),
  new SongOfTheWeek(
    createDate("09/14/2024"),
    null,
    {
      name: "Young",
      artist: "Vallis Alps",
      year: "2015",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e021fb3115e3b35b94a49d6fe20",
      youtube: "https://youtu.be/yoZPVMEsbeQ?si=bw2zzibpU-cYddpr",
      spotify: "https://open.spotify.com/track/0ad87RTfHWmC2Syh1nOxEd",
    }
  ),
  new SongOfTheWeek(
    createDate("09/21/2024"),
    null,
    {
      name: "Judy You Hung the Moon",
      artist: "HARBOUR",
      year: "2017",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02356628262c803315eece6380",
      youtube: "https://youtu.be/psD04pozpcw?si=BhY5CnJxfjWYte9b",
      spotify: "https://open.spotify.com/track/10oDDj46J0IMYBPSloeJ4Z",
    }
  ),
  new SongOfTheWeek(
    createDate("09/28/2024"),
    null,
    {
      name: "Spooky",
      artist: "Dusty Springfield",
      year: "2018",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b2731482b9376e50c5f8f6f65112",
      youtube: "https://youtu.be/5QT1HjKXvT4?si=A7NIl2abpD2ygbuP",
      spotify: "https://open.spotify.com/track/1683Q5FUEQ4fIG2f87MAW4",
    }
  ),
  new SongOfTheWeek(
    createDate("10/05/2024"),
    null,
    {
      name: "I'll Come Running Back To You",
      artist: "Sam Cooke",
      year: "2002",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b273ecfe3a20789aa24e8ab54bad",
      youtube: "https://youtu.be/yAvJ6cxMrg0?si=oaalePn9BNhf1xFa",
      spotify: "https://open.spotify.com/track/6xNrkmefXamZeNuruDCQn3",
    }
  ),
];

/** Gets the [SongOfTheWeek] with the most recent [startDate] */
function getCurrentSong() {
  let now = dayjs();

  let songsStartingBeforeNow = songs.filter((song) => song.startDate <= now);

  if (songsStartingBeforeNow.length === 0) {
    return null;
  } else {
    return songsStartingBeforeNow[songsStartingBeforeNow.length - 1];
  }
}

export default getCurrentSong;

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
      name: "Vibe",
      artist: "Mullally",
      year: "2020",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02a00b8313075ff51eed734c20",
      youtube: "https://youtu.be/4aA2u7WdERg?si=wRf-H0-mRZQB9D-x",
      spotify: "https://open.spotify.com/track/1pDDhg9lxPMxwC3q6Kngg2",
    }
  ),
  new SongOfTheWeek(
    createDate("10/05/2024"),
    null,
    {
      name: "o shit!",
      artist: "lentra",
      year: "2021",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b27382fd53b257cb44f125f3a2a9",
      youtube: "https://youtu.be/tPp4r8lDFIY",
      spotify: "https://open.spotify.com/track/0RQpg3Q0QOxp6gqDpE8uWH",
    }
  ),
  new SongOfTheWeek(
    createDate("10/13/2024"),
    null,
    {
      name: "What You Wanna Try",
      artist: "Masego",
      year: "2023",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02799cf48c9e6300054dac9467",
      youtube: "https://youtu.be/SkeumKdBQDk",
      spotify: "https://open.spotify.com/track/526fD9LiAEi3KKvhhYfWmm",
    }
  ),
  new SongOfTheWeek(
    createDate("10/20/2024"),
    null,
    {
      name: "Empty Note",
      artist: "Ghostly Kisses",
      year: "2017",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02936214975cb244a6c7ecce3c",
      youtube: "https://youtu.be/AZCzfLMHUQs",
      spotify: "https://open.spotify.com/track/27FYQZ12stiJGFLVD5U4j6",
    }
  ),
  new SongOfTheWeek(
    createDate("10/27/2024"),
    null,
    {
      name: "Spooky",
      artist: "Dusty Springfield",
      year: "2018",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b2731482b9376e50c5f8f6f65112",
      youtube: "https://youtu.be/5QT1HjKXvT4",
      spotify: "https://open.spotify.com/track/1683Q5FUEQ4fIG2f87MAW4",
    }
  ),
  new SongOfTheWeek(
    createDate("11/03/2024"),
    null,
    {
      name: "I'll Come Running Back To You",
      artist: "Sam Cooke",
      year: "2002",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b273ecfe3a20789aa24e8ab54bad",
      youtube: "https://youtu.be/yAvJ6cxMrg0",
      spotify: "https://open.spotify.com/track/6xNrkmefXamZeNuruDCQn3",
    }
  ),
  new SongOfTheWeek(
    createDate("11/16/2024"),
    null,
    {
      name: "Be Like That - feat. Swae Lee & Khalid",
      artist: "Kane Brown",
      year: "2020",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b273b670be86ddfa9d49caa56971",
      youtube: "https://youtu.be/GEAy7eXb2lo",
      spotify: "https://open.spotify.com/track/5f1joOtoMeyppIcJGZQvqJ",
    }
  ),
  new SongOfTheWeek(
    createDate("11/23/2024"),
    null,
    {
      name: "Quantum Physics",
      artist: "Ruby Waters",
      year: "2020",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e0283d9f42d869f4c3914094571",
      youtube: "https://youtu.be/p4m3hyr5gus",
      spotify: "https://open.spotify.com/track/5ZEq9YuBdFgwAnYmjafWu3",
    }
  ),
  new SongOfTheWeek(
    createDate("11/30/2024"),
    null,
    {
      name: "Feel Good",
      artist: "Charlotte Cardin",
      year: "2023",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02422d93f6da874ae67ab4aa61",
      youtube: "https://youtu.be/_eUYB7M4EDE",
      spotify: "https://open.spotify.com/track/6PcVlezWXunO2Bh78iEq0W",
    }
  ),
  new SongOfTheWeek(
    createDate("12/7/2024"),
    null,
    {
      name: "Memory",
      artist: "Kane Brown",
      year: "2021",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e022a0806c429ec46624d028435",
      youtube: "https://youtu.be/fPziOGGqEpw",
      spotify: "https://open.spotify.com/track/34chhNX59Wo9HMFCsI3K8Y",
    }
  ),
  new SongOfTheWeek(
    createDate("12/14/2024"),
    null,
    {
      name: "Skyline",
      artist: "Khalid",
      year: "2022",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b273b25a6f8bac702391f3e59129",
      youtube: "https://youtu.be/Z-0tTi7GaPg",
      spotify: "https://open.spotify.com/track/1QxIFMs4M8qd5cbJJu80v4",
    }
  ),
  new SongOfTheWeek(
    createDate("12/21/2024"),
    null,
    {
      name: "Take You Dancing",
      artist: "Jason Derulo",
      year: "2020",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b273d9ddaea6ccea73f812f8afbc",
      youtube: "https://youtu.be/s0-f5RncxcA",
      spotify: "https://open.spotify.com/track/59qrUpoplZxbIZxk6X0Bm3",
    }
  ),
  new SongOfTheWeek(
    createDate("12/28/2024"),
    null,
    {
      name: "Raindrops",
      artist: "Katja Krasavice",
      year: "2021",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e0296addfaa8bbd3c386ebffad9",
      youtube: "https://youtu.be/n67XgKzDYpY",
      spotify: "https://open.spotify.com/track/3sZOiHgkXpDcilUBtHSixK",
    }
  ),
  new SongOfTheWeek(
    createDate("01/04/2025"),
    null,
    {
      name: "Something Blue",
      artist: "VOILÀ",
      year: "2024",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02dca6f7951ff1beee9a8af7f1",
      youtube: "https://youtu.be/pEFbuV90bUw",
      spotify: "https://open.spotify.com/track/1XQecFY99zarSryU7dS1RN",
    }
  ),
  new SongOfTheWeek(
    createDate("01/11/2025"),
    null,
    {
      name: "After Midnight",
      artist: "Chappell Roan",
      year: "2023",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e0296fa88fb1789be437d5cb4b6",
      youtube: "https://youtu.be/-KE8NmtTlPk",
      spotify: "https://open.spotify.com/track/4rlQza35DE4Prh5yonxnCs",
    }
  ),
  new SongOfTheWeek(
    createDate("01/18/2025"),
    null,
    {
      name: "Be There Soon",
      artist: "Elderbrook",
      year: "2015",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02ed44590584beb5f595c15b95",
      youtube: "https://youtu.be/ymDl74eFb_U",
      spotify: "https://open.spotify.com/track/7fbB70umrxlRbbh0mYCAHG",
    }
  ),
  new SongOfTheWeek(
    createDate("01/25/2025"),
    null,
    {
      name: "Attitude",
      artist: "Aaron Carpenter",
      year: "2019",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02557162135c6ea6eb9e0914b6",
      youtube: "https://youtu.be/ZVrvfezMf5c",
      spotify: "https://open.spotify.com/track/1ia7yo4yHzBkoU6Xn214QG",
    }
  ),

  new SongOfTheWeek(
    createDate("02/01/2025"),
    null,
    {
      name: "Twenty One",
      artist: "Greyson Chance",
      year: "2018",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d00001e02a09af84fd61b57fdb3a2e3fc",
      youtube: "https://youtu.be/AhuVnrJqVHs",
      spotify: "https://open.spotify.com/track/4i9gqxFLh72VHOWLfEMmJJ",
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

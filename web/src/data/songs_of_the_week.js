import { createDate } from "../utils/date_utils";
const dayjs = require("dayjs");

class SongOfTheWeek {
  constructor(startDate, quoteInfo, songInfo, songLinks) {
    this.startDate = startDate;
    this.quoteInfo = quoteInfo;
    this.songInfo = songInfo;
    this.songLinks = songLinks;
  }
}

const songs = [
  new SongOfTheWeek(
    createDate("05/26/2024"),
    {
      quote:
        "This song is one of my favorites to dance to. \
This month's creative expressions class will be working on choreography to this song. \
Absolute banger, and brings back a lot of great memories.",
      attributor: "Riley",
    },
    {
      name: "Old School Turntables",
      artist: "Matt DiMona",
      year: "2017",
      songLength: "4:24",
    },
    {
      albumCoverImage:
        "https://i.scdn.co/image/ab67616d0000b2732275c283db198eed78f157cf",
      youtube: "https://www.youtube.com/watch?v=ZxdHJm_ZGQk",
      spotify: "https://open.spotify.com/track/3ijo1UGnywzuH1YIqnSdo3",
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

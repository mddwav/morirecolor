import Head from "next/head";
import Calendar from "../components/Calendar";
import Theme from "../components/Theme";
import { darkGrey } from "../constants";
import { yearsAndWeeksSinceDate } from "../utils/years";

const yearsToLive = 80;
const enteredBirthDate = new Date(1992, 7, 25);
const yearsAndWeeksSinceBirth = yearsAndWeeksSinceDate(enteredBirthDate);

export default function CalendarPage() {
  return (
    <Theme>
      <Head>
        <title>Memento Mori Calendar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
      </Head>
      <h1>MEMENTO MORI</h1>
      <Calendar
        yearsToLive={yearsToLive}
        yearsAndWeeksSinceBirth={yearsAndWeeksSinceBirth}
      />
      <style jsx>
        {`
          h1 {
            letter-spacing: 0.4em;
            color: ${darkGrey};
          }
        `}
      </style>
    </Theme>
  );
}

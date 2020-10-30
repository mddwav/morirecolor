import Head from "next/head";
import Calendar from "../components/Calendar";
import Theme from "../components/Theme";
import { darkGrey } from "../constants";
import { validateAge, yearsAndWeeksSinceDate } from "../utils/years";
import { NextPageContext } from "next";
import isValid from "date-fns/isValid";
import parseISO from "date-fns/parseISO";

type CalendarPageProps = {
  age: number;
  dob: string;
};

export default function CalendarPage({ age, dob }: CalendarPageProps) {
  const yearsAndWeeksSinceBirth = yearsAndWeeksSinceDate(new Date(dob));

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
      <h2>MEMENTO MORI</h2>
      <Calendar
        yearsToLive={age}
        yearsAndWeeksSinceBirth={yearsAndWeeksSinceBirth}
      />
      <style jsx>
        {`
          h2 {
            letter-spacing: 0.4em;
            color: ${darkGrey};
          }
        `}
      </style>
    </Theme>
  );
}

CalendarPage.getInitialProps = async (ctx: NextPageContext) => {
  const age = validateAge(Number(ctx.query.age), 1, 125);
  const dob = parseISO(ctx.query.dob?.toString());

  return {
    dob: isValid(dob) ? dob : parseISO("1994-01-01"),
    age,
  };
};

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
      <h1>MEMENTO MORI</h1>
      <Calendar
        yearsToLive={age}
        yearsAndWeeksSinceBirth={yearsAndWeeksSinceBirth}
      />
      <style jsx>
        {`
          h1 {
            letter-spacing: 0.4em;
            color: ${darkGrey};
            text-align: center;
            font-weight: normal;
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

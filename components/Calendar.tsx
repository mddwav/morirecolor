import { cellSpacing } from "../constants";
import WeekRow from "./WeekRow";

type CalendarProps = {
  yearsToLive: number;
  yearsAndWeeksSinceBirth: [number, number];
};

function getFillIndex(yearIndex: number, weekIndex: number, index: number) {
  if (index > yearIndex) return 0;

  if (index < yearIndex) return 52;

  return weekIndex;
}

export default function Calendar({
  yearsToLive,
  yearsAndWeeksSinceBirth: [yearIndex, weekIndex],
}: CalendarProps) {
  return (
    <div className="calendar">
      {[...Array(yearsToLive)].map((_, index) => {
        const year = index + 1;
        const label = year % 5 === 0 ? year : undefined;
        const fillIndex = getFillIndex(yearIndex, weekIndex, index);

        return (
          <div className="week-row" key={index}>
            <WeekRow label={label} fillIndex={fillIndex} />
          </div>
        );
      })}
      <style jsx>{`
        .week-row:nth-child(10n) {
          margin-bottom: ${cellSpacing};
        }

        .calendar {
          padding-bottom: 16px;
        }
      `}</style>
    </div>
  );
}

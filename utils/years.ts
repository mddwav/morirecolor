import differenceInWeeks from "date-fns/differenceInWeeks";
import startOfToday from "date-fns/startOfToday";

export function yearsAndWeeksSinceDate(date: Date): [number, number] {
  const weeksSince = differenceInWeeks(startOfToday(), date);
  const yearIndex = Math.trunc(weeksSince / 52);
  const weekIndex = weeksSince % 52;
  return [yearIndex, weekIndex];
}

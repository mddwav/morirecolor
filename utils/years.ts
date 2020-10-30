import differenceInWeeks from "date-fns/differenceInWeeks";
import startOfToday from "date-fns/startOfToday";
import startOfDay from "date-fns/startOfDay";

export function yearsAndWeeksSinceDate(date: Date): [number, number] {
  const weeksSince = differenceInWeeks(startOfToday(), startOfDay(date));
  const yearIndex = Math.trunc(weeksSince / 52);
  const weekIndex = weeksSince % 52;
  return [yearIndex, weekIndex];
}

export function validateAge(num: number, min: number, max: number) {
  const age = Math.min(Math.max(Math.floor(num), min), max);

  if (!age) {
    return 80;
  }

  return age;
}

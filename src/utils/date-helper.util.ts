import { DateTime } from 'luxon';

interface IYearWeekEntry {
  weekNumber: number;
  startDate: DateTime;
  endDate: DateTime;
}

export const newDateTimeInstance = (date: Date): DateTime => {
  return DateTime.fromJSDate(date);
};

export const formatDate = (date: string) => {
  const dt = DateTime.fromISO(date, { locale: 'nl' });
  if (dt.isValid) {
    return dt.toLocaleString(DateTime.DATE_MED);
  }
};

export const getWeeksOfYear = (year: number | string) => {
  const data: IYearWeekEntry[] = [];

  for (let weekNumber = 1; weekNumber <= 54; weekNumber++) {
    const fromDate = DateTime.fromObject({ weekYear: Number(year), weekNumber: weekNumber }).setLocale('nl');
    const toDate = fromDate.plus({ day: 6 });

    if (fromDate.isValid) {
      data.push({
        weekNumber,
        startDate: fromDate,
        endDate: toDate,
      });
    }
  }

  return data;
};

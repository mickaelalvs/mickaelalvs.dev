export const formatDateRange = (startDate: Date, endDate?: Date): string => {
  const formatter = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long' });

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  const start = capitalize(formatter.format(startDate));

  if (!endDate) {
    return `Depuis ${start}`;
  }

  const end = endDate ? capitalize(formatter.format(endDate)) : null;

  return `${start} - ${end}`;
};
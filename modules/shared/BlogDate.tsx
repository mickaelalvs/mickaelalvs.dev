import {parseISO, format} from 'date-fns';

interface BlogDateProps {
  dateString?: string;
  readingTime?: string;
}

export default function BlogDate({dateString, readingTime}: BlogDateProps) {
  if (!dateString) return <div />;

  const date = parseISO(dateString);
  return (
    <>
      <time dateTime={dateString}>{format(date, 'LLL	d, yyyy')}</time>
      {readingTime && (
        <>
          <span aria-hidden="true">{' · '}</span>
          <span>{readingTime}</span>
        </>
      )}
    </>
  );
}

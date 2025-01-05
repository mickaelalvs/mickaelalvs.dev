import { slugify } from '../../seo/slugify';
import {Speaking} from '../../../config/speaking/speaking';

const SPEAKING_DELIMITER = '-s_';
export const slugElementTitle = (element: Speaking) => `${slugify(element.title)}${SPEAKING_DELIMITER}${element.id}`;

const parsingRegexp = /-s_(?<talkId>\d+)([\/?])?/;

export const parserElementIdFromSlug = ({slug}: {slug: string}) => {
  const match = slug.match(parsingRegexp);

  return match?.groups?.talkId;
};
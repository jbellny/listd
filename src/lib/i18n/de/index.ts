import type { Translation } from '../i18n-types';
import en from '../en';

const de = {
	...(en as Translation),
	message: 'Hallo Welt'
} satisfies Translation;

export default de;

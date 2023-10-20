import type { Translation } from '../i18n-types';
import en from '../en';
const it = {
	...(en as Translation),
	message: 'Ciao Mundo'
} satisfies Translation;

export default it;

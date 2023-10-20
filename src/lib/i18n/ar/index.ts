import type { Translation } from '../i18n-types';
import en from '../en';

const ar = {
	...(en as Translation),
	message: 'مرحبا بالعالم'
} satisfies Translation;

export default ar;

import type { Translation } from '../i18n-types';
import en from '../en';
const es = {
	...(en as Translation),
	tagline: 'Bienvenido a listd.tv',
	message: 'Halo Mundo'
} satisfies Translation;

export default es;

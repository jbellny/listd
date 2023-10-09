import i18next from 'i18next';

// TODO: use namespaces https://www.i18next.com/principles/namespaces

const en_common = {
	message: 'hello world'
};
const es_common = {
	message: 'hola mundo'
};

export const defaultNS = 'common';

export const resources = {
	en: {
		common: en_common
	},
	es: {
		common: es_common
	}
} as const;

i18next.init({
	lng: 'es',
	fallbackLng: 'en',
	debug: true,
	ns: [defaultNS],
	defaultNS,
	resources
});

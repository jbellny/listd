import type { BaseTranslation } from '../i18n-types';

const en = {
	tagline:
		"Presenting the ultimate YouTube experience. Whether you're looking for new content to watch or want to share your own curated list with friends, our app has got your covered.",
	message: 'Hello World',
	messages: {
		onboarding: {
			main: "Welcome to listd! Let's setup your profile.",
			avatar: 'Upload your avatar',
			final: "That's all! Let's get started!"
		}
	},
	labels: {
		onboarding: {
			username: 'Username',
			uploadAvatar: 'Upload your avatar',
			uploadFile: 'Upload File',
			final: "Let's Go!"
		}
	},
	signUp: 'Sign in with YouTube'
} satisfies BaseTranslation;

export default en;

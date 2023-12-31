// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'ar'
	| 'de'
	| 'en'
	| 'es'
	| 'it'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * P​r​e​s​e​n​t​i​n​g​ ​t​h​e​ ​u​l​t​i​m​a​t​e​ ​Y​o​u​T​u​b​e​ ​e​x​p​e​r​i​e​n​c​e​.​ ​W​h​e​t​h​e​r​ ​y​o​u​'​r​e​ ​l​o​o​k​i​n​g​ ​f​o​r​ ​n​e​w​ ​c​o​n​t​e​n​t​ ​t​o​ ​w​a​t​c​h​ ​o​r​ ​w​a​n​t​ ​t​o​ ​s​h​a​r​e​ ​y​o​u​r​ ​o​w​n​ ​c​u​r​a​t​e​d​ ​l​i​s​t​ ​w​i​t​h​ ​f​r​i​e​n​d​s​,​ ​o​u​r​ ​a​p​p​ ​h​a​s​ ​g​o​t​ ​y​o​u​r​ ​c​o​v​e​r​e​d​.
	 */
	tagline: string
	/**
	 * H​e​l​l​o​ ​W​o​r​l​d
	 */
	message: string
	messages: {
		onboarding: {
			/**
			 * W​e​l​c​o​m​e​ ​t​o​ ​l​i​s​t​d​!​ ​L​e​t​'​s​ ​s​e​t​u​p​ ​y​o​u​r​ ​p​r​o​f​i​l​e​.
			 */
			main: string
			/**
			 * U​p​l​o​a​d​ ​y​o​u​r​ ​a​v​a​t​a​r
			 */
			avatar: string
			/**
			 * T​h​a​t​'​s​ ​a​l​l​!​ ​L​e​t​'​s​ ​g​e​t​ ​s​t​a​r​t​e​d​!
			 */
			final: string
		}
	}
	labels: {
		onboarding: {
			/**
			 * U​s​e​r​n​a​m​e
			 */
			username: string
			/**
			 * U​p​l​o​a​d​ ​y​o​u​r​ ​a​v​a​t​a​r
			 */
			uploadAvatar: string
			/**
			 * U​p​l​o​a​d​ ​F​i​l​e
			 */
			uploadFile: string
			/**
			 * L​e​t​'​s​ ​G​o​!
			 */
			final: string
		}
	}
	/**
	 * S​i​g​n​ ​i​n​ ​w​i​t​h​ ​Y​o​u​T​u​b​e
	 */
	signUp: string
}

export type TranslationFunctions = {
	/**
	 * Presenting the ultimate YouTube experience. Whether you're looking for new content to watch or want to share your own curated list with friends, our app has got your covered.
	 */
	tagline: () => LocalizedString
	/**
	 * Hello World
	 */
	message: () => LocalizedString
	messages: {
		onboarding: {
			/**
			 * Welcome to listd! Let's setup your profile.
			 */
			main: () => LocalizedString
			/**
			 * Upload your avatar
			 */
			avatar: () => LocalizedString
			/**
			 * That's all! Let's get started!
			 */
			final: () => LocalizedString
		}
	}
	labels: {
		onboarding: {
			/**
			 * Username
			 */
			username: () => LocalizedString
			/**
			 * Upload your avatar
			 */
			uploadAvatar: () => LocalizedString
			/**
			 * Upload File
			 */
			uploadFile: () => LocalizedString
			/**
			 * Let's Go!
			 */
			final: () => LocalizedString
		}
	}
	/**
	 * Sign in with YouTube
	 */
	signUp: () => LocalizedString
}

export type Formatters = {}

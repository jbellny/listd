<script lang="ts">
	import { enhance } from '$app/forms';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { FileButton } from '@skeletonlabs/skeleton';
	let username: string;
</script>

<p class="text-2xl">
	{$LL.messages.onboarding.main()}
</p>
<form
	method="POST"
	use:enhance={({ formElement, formData, action, cancel, submitter }) => {
		// `formElement` is this `<form>` element
		// `formData` is its `FormData` object that's about to be submitted
		// `action` is the URL to which the form is posted
		// calling `cancel()` will prevent the submission
		// `submitter` is the `HTMLElement` that caused the form to be submitted

		return async ({ result, update }) => {
			// `result` is an `ActionResult` object
			// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
		};
	}}
>
	<label class="py-5 flex flex-col items-start" for="username">
		<span>{$LL.labels.onboarding.username()}</span>
		<input class="text-black" type="text" bind:value={username} id="username" />
	</label>
	<p class="my-4">{$LL.messages.onboarding.avatar()}</p>

	<FileButton name="files" button="btn variant-filled-primary"
		>{$LL.labels.onboarding.uploadFile()}</FileButton
	>
	<p class="text-center text-2xl mt-10 mb-5">{$LL.messages.onboarding.final()}</p>
	<div class="flex justify-center">
		<button class="btn variant-filled-tertiary">{$LL.labels.onboarding.final()}</button>
	</div>
</form>

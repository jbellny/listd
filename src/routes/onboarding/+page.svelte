<script lang="ts">
	import { enhance } from '$app/forms';
	import { FileButton } from '@skeletonlabs/skeleton';
	let username: string;
</script>

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores quidem amet commodi
	nostrum odio excepturi accusamus numquam soluta tempora!
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
		<span>Username</span>
		<input class="text-black" type="text" bind:value={username} id="username" />
	</label>
	<FileButton name="files" button="btn variant-filled-primary">Upload</FileButton>
</form>

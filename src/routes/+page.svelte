<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte.js';
</script>

<div
	class="card variant-ghost-surface flex flex-col gap-4 p-4 rounded-sm max-w-lg items-center mx-auto"
>
	<!-- <p>{ $LL.message() }</p> -->
	<p>{$LL.message()}</p>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt earum enim ipsa odio
		consequuntur quos architecto, nostrum ducimus. Ratione ex aspernatur quam nisi laborum quibusdam
		eveniet voluptatem praesentium aliquam ducimus.
	</p>
	<!-- <button class=" w-fit"> -->
	<a href="/onboarding" class="flex gap-2 items-center btn btn-md variant-filled-primary">
		<iconify-icon icon="ph:youtube-logo-light" height={36} />
		Sign in with YouTube
	</a>
	<!-- </button> -->
</div>

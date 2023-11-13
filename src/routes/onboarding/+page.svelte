<script lang="ts">
    import { LL } from '$lib/i18n/i18n-svelte.ts'
    import { FileButton } from '@skeletonlabs/skeleton'

    let username: string
    // fix the $app/form error with eslint
    // eslint-disable-next-line import/no-unresolved, import/extensions
    import { enhance } from '$app/forms'
</script>

<p class="text-2xl">
    {$LL.messages.onboarding.main()}
</p>
<form method="POST" use:enhance={() => async () => {}}>
    <label class="flex flex-col items-start py-5" for="username">
        <span>{$LL.labels.onboarding.username()}</span>
        <input class="text-black" type="text" bind:value={username} id="username" />
    </label>
    <p class="my-4">{$LL.messages.onboarding.avatar()}</p>

    <FileButton name="files" button="btn variant-filled-primary"
        >{$LL.labels.onboarding.uploadFile()}</FileButton
    >
    <p class="mb-5 mt-10 text-center text-2xl">{$LL.messages.onboarding.final()}</p>
    <div class="flex justify-center">
        <button class="variant-filled-tertiary btn">{$LL.labels.onboarding.final()}</button>
    </div>
</form>

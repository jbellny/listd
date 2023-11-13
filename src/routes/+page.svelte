<script lang="ts">
    import { LL } from '$lib/i18n/i18n-svelte.ts'
    import type { PageData } from './$types'

    export let data: PageData
    console.log(data.users)

    // [(1, 2, 3)].reduce((sum, value) => value + sum)
</script>

<div
    class="card variant-ghost-surface flex flex-col gap-4 p-4 rounded-sm max-w-lg items-center mx-auto"
>
    <!-- <p>{$LL.message()}</p> -->
    <p class="my-4 text-center">{$LL.tagline()}</p>
    <!-- <button class=" w-fit"> -->
    <a href="/onboarding" class="flex gap-2 items-center btn btn-md variant-filled-primary">
        <iconify-icon icon="ph:youtube-logo-light" height={36} />
        {$LL.signUp()}
    </a>
    <!-- </button> -->
</div>

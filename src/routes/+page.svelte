<script lang="ts">
    import { signIn } from '@auth/sveltekit/client'
    import { LL } from '$lib/i18n/i18n-svelte.ts'
    import type { PageData } from './$types'

    // eslint-disable-next-line import/no-unresolved, import/extensions
    import { page } from '$app/stores'

    export let data: PageData
    console.log(data.users)

    // [(1, 2, 3)].reduce((sum, value) => value + sum)
</script>

<div
    class="card variant-ghost-surface mx-auto flex max-w-lg flex-col items-center gap-4 rounded-sm p-4"
>
    <!-- <p>{$LL.message()}</p> -->
    <p class="my-4 text-center">{$LL.tagline()}</p>
    {#if $page.data.session}
        <p>{$page.data.session.user?.name ?? 'User'} logged in</p>
    {:else}
        <!-- <button class=" w-fit"> -->
        <button
            on:click={() => signIn('google')}
            class="variant-filled-primary btn btn-md flex items-center gap-2"
        >
            <iconify-icon icon="ph:youtube-logo-light" height={36} />
            {$LL.signUp()}
        </button>
        <!-- </button> -->
    {/if}
</div>

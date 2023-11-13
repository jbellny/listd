<script lang="ts">
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton'
	import 'iconify-icon'
	import '../app.postcss'
	import { setLocale } from '$lib/i18n/i18n-svelte'
	import type { LayoutData } from './$types'
	export let data: LayoutData
	setLocale(data.locale)
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar shadow="shadow-md">
			<svelte:fragment slot="lead"><a href="/">listd.tv</a></svelte:fragment>

			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="py-16 max-w-lg mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- (footer) -->
</AppShell>

<style>
</style>

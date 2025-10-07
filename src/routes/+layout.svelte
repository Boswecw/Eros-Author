<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import AgeGate from '$lib/components/AgeGate.svelte';
	import ToastContainer from '$lib/components/ToastContainer.svelte';
	import { ageVerified } from '$lib/stores/ageVerification';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
	let isLoading = $state(true);

	$effect(() => {
		// Initialize age verification store
		ageVerified.init();
		isLoading = false;
	});

	function handleAgeConfirm() {
		ageVerified.verify();
	}

	function handleAgeReject() {
		ageVerified.reject();
		if (browser) {
			window.location.href = 'https://www.google.com';
		}
	}
</script>

<svelte:head>
	<!-- Favicon -->
	<link rel="icon" type="image/x-icon" href={favicon} />

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Great+Vibes:wght@400&family=Lora:wght@400;500;600&family=Montserrat:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>

	<!-- FontAwesome -->
	<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin="anonymous" />
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
		rel="stylesheet"
		integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
		crossorigin="anonymous"
	/>

	<!-- Performance -->
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
	<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
	<link rel="preconnect" href="https://firebasestorage.googleapis.com" crossorigin="anonymous" />
	<link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
</svelte:head>

{#if !isLoading}
	{#if $ageVerified}
		{@render children?.()}
	{:else}
		<AgeGate onConfirm={handleAgeConfirm} onReject={handleAgeReject} />
	{/if}
{/if}

<!-- Toast notifications -->
<ToastContainer />
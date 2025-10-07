<script lang="ts">
	import { browser } from '$app/environment';

	let { onConfirm, onReject } = $props<{
		onConfirm: () => void;
		onReject: () => void;
	}>();

	function handleConfirm() {
		if (browser) {
			localStorage.setItem('eros_age_ok', '1');
		}
		onConfirm();
	}

	function handleReject() {
		if (browser) {
			localStorage.removeItem('eros_age_ok');
		}
		onReject();
	}
</script>

<div class="age-gate">
	<div
		class="age-card"
		role="dialog"
		aria-modal="true"
		aria-labelledby="age-title"
		aria-describedby="age-desc"
	>
		<h2 id="age-title">Are you 18 or older?</h2>
		<p id="age-desc">
			This site includes adult-only content. By entering, you confirm you are 18+ (or the age of
			majority in your jurisdiction).
		</p>
		<div class="age-actions">
			<button class="btn-primary" onclick={handleConfirm}>Yes, enter</button>
			<button class="btn-outline" onclick={handleReject}>No, leave</button>
		</div>
		<small class="age-note"
			>No minors. Consent-forward stories. <a href="#notes">Read content notes</a>.</small
		>
	</div>
</div>
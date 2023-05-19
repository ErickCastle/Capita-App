<script lang="ts">
	const handleClick = () => {
		location.href = '/form';
	};
</script>

<div class="h-full flex justify-center items-center">
	<button
		class="btn-lg rounded-full variant-filled-primary font-bold"
		on:click={handleClick}>Start Demo</button
	>
</div>

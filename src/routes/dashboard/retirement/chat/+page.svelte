<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	// import type { SubmitFunction } from './$types.js';
	import type { SubmitFunction } from '../../../form/$types.js';
	import { enhance } from '$app/forms';

	export const getCurrentTimestamp = (): string => {
		return new Date().toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		});
	};

	export let data;

	$: messageFeed = data.messageFeed;

	let elemChat: HTMLElement;
	let currentMessage: string = '';

	const scrollChatButton = (behavior?: ScrollBehavior): void => {
		elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
	};

	const addMessage: SubmitFunction = () => {
		console.log('PRUEBA DE LOG EN page.svelte');

		const newUserMessage = {
			id: messageFeed.length,
			host: true,
			avatar: 48,
			name: 'User',
			timestamp: `Today @ ${getCurrentTimestamp()}`,
			message: currentMessage,
			color: 'variant-soft-primary'
		};
		messageFeed = [...messageFeed, newUserMessage];

		return async (options) => {
			console.log(options.result);

			const newAssistantMessage = options.result.data.assistantMessage;

			messageFeed = [...messageFeed, newAssistantMessage];

			// console.log(Object.fromEntries(options.));

			currentMessage = '';

			setTimeout(() => {
				scrollChatButton('smooth');
			});
		};
	};
</script>

<div class="grid grid-rows-[1fr_auto]">
	<!-- Conversation -->
	<section
		bind:this={elemChat}
		class="max-h-[500px] p-4 overflow-y-auto space-y-4"
	>
		{#each messageFeed as bubble}
			{#if bubble.host === true}
				<div class="grid grid-cols-[auto_1fr] gap-2">
					<Avatar
						src="https://i.pravatar.cc/?img={bubble.avatar}"
						width="w-12"
					/>
					<div class="card p-4 variant-soft rounded-tl-none space-y-2">
						<header class="flex justify-between items-center">
							<p class="font-bold">{bubble.name}</p>
							<small class="opacity-50">{bubble.timestamp}</small>
						</header>
						<p>{bubble.message}</p>
					</div>
				</div>
			{:else}
				<div class="grid grid-cols-[1fr_auto] gap-2">
					<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
						<header class="flex justify-between items-center">
							<p class="font-bold">{bubble.name}</p>
							<small class="opacity-50">{bubble.timestamp}</small>
						</header>
						<p>{bubble.message}</p>
					</div>
					<Avatar
						src="https://i.pravatar.cc/?img={bubble.avatar}"
						width="w-12"
					/>
				</div>
			{/if}
		{/each}
	</section>
	<!-- Prompt -->
	<section class="border-t border-surface-500/30 p-4">
		<form method="POST" use:enhance={addMessage}>
			<div
				class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token"
			>
				<button class="input-group-shim">+</button>
				<textarea
					bind:value={currentMessage}
					class="bg-transparent border-0 ring-0"
					name="prompt"
					id="prompt"
					placeholder="Write a message..."
					rows="1"
				/>
				<button class={currentMessage ? null : null} type="submit">
					<i class="fa-solid fa-paper-plane" />
				</button>
			</div>
		</form>
	</section>
</div>

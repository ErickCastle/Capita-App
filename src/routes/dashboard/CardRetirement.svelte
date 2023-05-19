<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import avatar from '$lib/assets/avatar.png';
	import card_image from '$lib/assets/card_image.jpg';
</script>

<div class="variant-filled-primary m-8 rounded-lg">
	<a
		class="card bg-initial card-hover overflow-hidden"
		href="/dashboard/retirement/chat"
	>
		<header>
			<img
				src={card_image}
				class="bg-white w-full aspect-[21/9] rounded-t-lg object-cover"
				alt="Post"
			/>
		</header>
		<div class="p-4 space-y-4 bg-amber-200">
			<h3 class="h3 font-bold" data-toc-ignore>Retirement Calculator</h3>
			<article>
				<p>
					<!-- cspell:disable -->
					Click here for accessing to our retirement AI specialist, who is going
					to provide some calculations about the necessary savings you have to make
					from the present, as well as some guidance based on your unique data!
					<!-- cspell:enable -->
				</p>
			</article>
		</div>
		<hr class="opacity-50" />
		<footer class="p-4 flex justify-start items-center space-x-4">
			<Avatar src={avatar} width="w-8" />
			<div class="flex-auto flex justify-between items-center">
				<h6 class="font-bold">Cápita AI</h6>
			</div>
		</footer>
	</a>
</div>

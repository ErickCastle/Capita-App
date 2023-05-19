<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<!-- <div class="card bg-initial flex justify-center items-center m-auto w-1/2 p-2">

    <header class="w-full bg-initial">
        <figure>
            <img src="retirement_symbol.png" class="bg-white aspect-[21/9] rounded-2xl w-64 h-64" alt="">
        </figure>
    </header>

    <div class="p-4 space-y-4 bg-slate-400 rounded-xl w-full">
        <h6 class="h6">RETIREMENT CALCULATOR</h6>
    </div>
    
</div> -->

<div class="m-auto w-1/2 p-2">
	<a
		class="card bg-initial card-hover overflow-hidden"
		href="/dashboard/retirement/chat"
	>
		<header>
			<img
				src="https://source.unsplash.com/vjUokUWbFOs/400x175"
				class="bg-black/50 w-full aspect-[21/9]"
				alt="Post"
			/>
		</header>
		<div class="p-4 space-y-4">
			<h6 class="h6">Announcements</h6>
			<h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>
			<article>
				<p>
					<!-- cspell:disable -->
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur
					provident eveniet eligendi cumque consequatur tempore sint nisi sapiente.
					Iste beatae laboriosam iure molestias cum expedita architecto itaque quae
					rem.
					<!-- cspell:enable -->
				</p>
			</article>
		</div>
		<hr class="opacity-50" />
		<footer class="p-4 flex justify-start items-center space-x-4">
			<Avatar src="https://source.unsplash.com/YOErFW8AfkI/32x32" width="w-8" />
			<div class="flex-auto flex justify-between items-center">
				<h6 class="font-bold">By Alex</h6>
				<small>On {new Date().toLocaleDateString()}</small>
			</div>
		</footer>
	</a>
</div>

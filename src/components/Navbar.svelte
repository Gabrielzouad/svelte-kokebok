<script>
	export let navbar;
</script>
 
<header class="w-full border-b-4 border-b-gray-100 h-24 shadow-xs">
    <div class="container h-full mx-auto flex items-center justify-between">
        <a href="/">
            <h1 class="text-slate-900 text-2xl font-bold">Gabriels Kokebok</h1>
        </a>
        {#if navbar}
            <nav>
                <ul class="flex space-x-8 text-lg font-bold">
                    {#each navbar as blok}
                        <li class="hover:text-[#50b0ae]">
                            <a href={`/${blok.link.story.slug === 'home' ? '' : blok.link.story.slug ?? ''}`}>{blok.link.story.name}</a>
                        </li>
                    {/each}
                </ul>
            </nav>
        {/if}
    </div>
</header>
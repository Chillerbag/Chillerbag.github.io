<script lang="ts">
    import { page } from '$app/state'; 
    import { base } from '$app/paths';
    import {GradientButton, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Card, Button} from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { GithubSolid, LinkedinSolid, DownloadSolid } from 'flowbite-svelte-icons';
</script>

<div class="container mx-auto px-4 max-w-4xl">
    <header>
        <Navbar color='primary'>
            <NavBrand href="{base}/">
                <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ethan Hawkins</span>
            </NavBrand>
            <NavHamburger />
            <NavUl class="p-2 rounded-lg shadow-lg">
                <NavLi href="{base}/" class="text-black hover:text-gray-600">Home</NavLi>
                <NavLi href="{base}/projects" class="text-black hover:text-gray-600">Projects</NavLi>
                <NavLi href="{base}/blog" class="text-black hover:text-gray-600">Blog</NavLi>
                <NavLi href="{base}/employment" class="text-black hover:text-gray-600">Employment</NavLi>
            </NavUl>
        </Navbar>
    </header>

    <main class="mt-8">
        <div class="bg-yellow-100 rounded-lg p-8 shadow-md">
            <h2 class="text-2xl font-bold mb-4">Blog</h2>
            <div class="flex flex-col items-center space-y-4">
                <Card>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SQL as Code</h5>
                    <h5 class="mb-2 italic tracking-tight text-gray-900 dark:text-white">2025-03-27</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">To make writing SQL feel less miserable I want to talk about how it can feel more like code.</p>
                    <GradientButton class="w-fit" color="greenToBlue" href="{base}/blog/sql-code">
                        Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
                    </GradientButton>
                </Card>
            </div>
        </div>
    </main>
</div>
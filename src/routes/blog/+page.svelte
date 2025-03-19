<script lang="ts">
    import { page } from '$app/state'; 
    import { base } from '$app/paths';
    import { GradientButton, Navbar, NavBrand, NavLi, NavUl, NavHamburger} from 'flowbite-svelte';
    import { GithubSolid, LinkedinSolid, DownloadSolid } from 'flowbite-svelte-icons';
</script>

<div class="container mx-auto px-4 max-w-4xl">
    <header>
        <Navbar color='primary'>
            <NavBrand href="{base}/">
                <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ethan Hawkins</span>
            </NavBrand>
            <NavHamburger />
            <NavUl class="bg-primary-700 text-white p-2 rounded-lg">
                <NavLi href="{base}/" class="text-white hover:text-primary-200">Home</NavLi>
                <NavLi href="{base}/projects" class="text-white hover:text-primary-200">Projects</NavLi>
                <NavLi href="{base}/blog" class="text-white hover:text-primary-200">Blog</NavLi>
                <NavLi href="{base}/employment" class="text-white hover:text-primary-200">Employment</NavLi>
            </NavUl>
        </Navbar>
    </header>

    <main class="mt-8">
        <div class="bg-yellow-100 rounded-lg p-8 shadow-md">
            <h2 class="text-2xl font-bold mb-4">Blog</h2>
            <p class="mb-4">
                Coming soon!
            </p>
        </div>
    </main>
</div>
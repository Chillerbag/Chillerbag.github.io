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
            <NavUl>
                <NavLi href="{base}/">Home</NavLi>
                <NavLi href="{base}/projects">Projects</NavLi>
                <NavLi href="{base}/blog">Blog</NavLi>
                <NavLi href="{base}/employment">Employment</NavLi>
            </NavUl>
        </Navbar>
    </header>

    <main class="mt-8">
        <div class="bg-yellow-100 rounded-lg p-8 shadow-md">
            <h2 class="text-2xl font-bold mb-4">About Me</h2>
            <p class="mb-4">
                Hi there! I'm Ethan Hawkins. I'm a super passionate programmer always looking to build weird new things in new languages.
                I recently graduated from the University of Melbourne in Dec 2024, and have spent all the time I'm not at work learning more about 
                programming.
            </p>
            <p class="mb-4">
                My technical skills include TypeScript / JavaScript, Rust, Haskell, C, C#, Java, SQL, Python, and a lot more!
                I'm a huge language enthusiast, who likes studying programming language design and paradigms. I particularly enjoy
                functional programming and low-level programming, but I also enjoy the rigor of OOP. 
                <br><br>
                I'm always on the hunt for new projects! If you wanna collaborate, please message me :).
            </p>
            <p class="mb-8">
                If I'm not coding, you may find me rollerblading or playing games!
            </p>
            <div class="flex flex-col items-center space-y-4">
                <GradientButton href="https://github.com/Chillerbag" color="greenToBlue">
                    Check out my Github <GithubSolid class="w-5 h-5 ms-2" />
                </GradientButton>
                <GradientButton href="https://www.linkedin.com/in/ethan-hawkins-24486a244/" color="cyanToBlue">
                    Add me on Linkedin <LinkedinSolid class="w-5 h-5 ms-2" />
                </GradientButton>
                <GradientButton href="{base}/Ethan_Hawkins_Resume.pdf" color="purpleToBlue">
                    Download my resume! <DownloadSolid class="w-5 h-5 ms-2" />
                </GradientButton>
            </div>
        </div>
    </main>
</div>
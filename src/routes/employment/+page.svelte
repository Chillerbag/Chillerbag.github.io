<script lang="ts">
    import { page } from '$app/state'; 
    import { base } from '$app/paths';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Timeline, TimelineItem } from 'flowbite-svelte';
    import { QuestionCircleSolid } from 'flowbite-svelte-icons';
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
            <Timeline order="vertical">
                <TimelineItem title="Tech Intern" date="Jun 2023 - Nov 2024">
                  <svelte:fragment slot="icon">
                    <span class="flex absolute -start-3 justify-center items-center w-8 h-8">
                        <img src="{base}/altis.png" class="w-8 h-8 mr-2" alt="altis" />
                    </span>
                  </svelte:fragment>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Mostly did work on ETL for a very large client, and built internal tools for DevOps processes. Probably doesn't look good that I was an intern for this long, but they just wanted to keep me around until I graduated as a part timer hehe</p>
                </TimelineItem>
                <TimelineItem title="Graduate Consultant" date="Nov 2024 - Present">
                  <svelte:fragment slot="icon">
                    <span class="flex absolute -start-3 justify-center items-center w-8 h-8">
                        <img src="{base}/altis.png" class="w-8 h-8 mr-2" alt="altis" />
                    </span>
                  </svelte:fragment>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">Built a Streamlit (Python) app to manage offboarding and security of customers for a client needing to meet complex ACCC requirements. Building more ETL, and ETL tools!</p>
                </TimelineItem>
                <TimelineItem title="Who Knows?" date="??? - ???">
                    <svelte:fragment slot="icon">
                      <span class="flex absolute -start-3 justify-center items-center w-8 h-8">
                        <QuestionCircleSolid class="w-10 h-10 text-primary-600 dark:text-primary-400" />
                      </span>
                    </svelte:fragment>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">What interesting software engineering opportunities await?</p>
                </TimelineItem>
              </Timeline>
        </div>
    </main>
</div>
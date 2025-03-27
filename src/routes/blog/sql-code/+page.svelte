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
            <h2 class="text-2xl font-bold mb-4">Feeling like a programmer</h2>
            <p class="mb-4">
                Sometimes when doing "software engineering" or "data engineering" things it doesn't feel like I'm really an engineer.
                I think this is due to a particular disparity between code in university and work.
                For example, when working on this site I kept refactoring it to different web frameworks because what I find particularly
                dissatisfying about HTML and CSS is how detached from what "code" is in my mind. Obviously, these are not programming
                languages (well, CSS is turing complete I think but still), but it brings into question what code even really means to me.
                The first thing that I really value is beauty. I don't think its controversial to say HTML and CSS is not beautiful. The indentation 
                and nesting just feels disgusting. The other thing is logic. I feel like with HTML and CSS I am just primarily copying other people's examples
                until it looks how I want. I don't have to really stretch my brain for that. With webdev, there are ways to make it more code oriented through things like jquery and actually interacting with the DOM, but I haven't found a "satisfying" code experience. Its all just plug and play in a way that backend code isn't.
                <br><br>
                At uni, I was really understanding the language design; the fundamental tools I was working with. And that informs your ability to choose the tools, and therefore solve problems better. The drive of an engineer after all should be to solve problems better!
                With modern DBMS systems and webdev its more like a hostage situation. Welp, we are too far into this React project to turn around and use Svelte. Goddamnit, we have already invested so much in CockroachDB to admit we just wanted postgres.
            </p>
            <p class="mb-4">
                The things I work on mostly fall into this kind of category. There is so much abstraction that the logic and cleanliness I want disappears. For example, I work with an ELT tool that dumps pipelines as these massive JSON files to describe its drag and drop system. Why. 
                It just makes you feel like your brain is melting. If I'm even working on Python scripts I feel much more like my brain is actually being used. For an engineer, the inability to get into the guts of development just leads to burnout, in my (short) experience.
                <br><br>
                SQL feels like this too, but because of how far it is stretched to script (see Snowflake SQL Scripting) or act as a traditional codebase through linting and code generation masked as imperative logic (dbt) I think there is hope to avoid burnout as a data engineer.
                <br><br>
                We're long past accepting that SQL is so far beyond it's original purpose. You can do insane stuff with it in a lot of DBMS flavours (more on this later), so let's make it a good developer experience if we're going the way of JavaScript!
                <br><br>
                I think the most important thing is setting up a proper project with niceties that make your developers think about SQL as code. Everyone wants to make beautiful work, so SQL oriented repos for database migration (eg projects based around flyway) should not be seen as a dumping ground.
                First, I think it would be nice to use an <b>Auto-formatter</b> like <a href="https://sqlfluff.com/"><b><u>sqlfluff</u></b></a> integrated into the CICD so everyone's code is compliant and feels nice, like code you can be proud of and read!.
                I think second is using a <b>migration tool</b> like <a href="https://www.red-gate.com/products/flyway/get-started"><b><u>Flyway</u></b></a>. That way you are doing proper, organised deployments, its inherently satisfying, at least to me.
                A testing framework is a nice developer tool, but I never enjoy writing tests. Still, I just wanted to write about how to make SQL feel more like a programming language. It also just saves long term dread. I have made a few object that down the line table data or view logic isn't what was expected. There's not a great type system or sense of compilation that stops this. Testing is just nice. <a href="https://pgtap.org/"><u><b>pgTAP</b></u></a> is a good one. 
                I also think too often SQL code isn't modular enough. Developers can definitely have fun with stored procedures to make logic reusable, and also use real code! All of this makes for really good CICD I think. SQL is just boring and headachey.
                <br><br>
                I don't know. As I write this I realise this is just giving more work to myself and others for some sense of being a "real" developer. I don't know if that's a good thing, but it feels like it is.
                I guess part of the pain is that different SQL dialects appear to exist just for vendor lock in. Translating certain functions like with TSQL feels deliberately hard.
                Code should be open, free, readable, and reusable in the community right? I mean most of my knowledge comes from what others have shared online and I mean with the advent of this LLM junk, none of that would exist without public data.
                But i'm ok with getting more work if it means I can have a stack and "production line" I'm proud of. I think <b><a href="https://www.getdbt.com/product/what-is-dbt"><u>dbt</u></a></b> goes a long way to do this, but my problem is with jinja also being another means of lock in. I don't know, at least it compiles to your source database.
                The other thing is that dbt is just all done for me! I want to build cicd, bots that comment on people's PRs, I want to write standards so we're all making beautiful code!
                But it seems like data engineering wants to remove the engineer out of the equation as much as possible. Lots of stuff ends up half-thought-through as a result. The space is polluted by non-engineers who want to deliver something that works rather than something that is beautiful.
                I don't think time is the problem here to be honest. SQL doesn't take long to write.
                <br><br>
                Ok this is getting crazy but worth reading this paper: <b><a href="https://www.cidrdb.org/cidr2024/papers/p48-neumann.pdf"><u>Click Here</u></a></b>
                <br><br>
                It's a bit about how SQL has gone out of control, how non-standardisation ruins the developer experience, and soforth. Even if SQL is silly, it's a nice feeling to be amazing at the vendor's implementation of it. It's just a shame that developer expertise is tied to the "product" (the DBMS) and NOT the language. 
                It should definitely be the other way round. I don't know. This blog lost all direction a while ago.
                <br><br>
                Here's some amazing open source packages that are doing god's work of unifying sql and making it really about the developer. Because let's be real, most of the time the "business" who uses the output of it, isn't really using it. It's about the developer.
                So let's make it good for developers! libsql is of particular note. Its time to admit you just needed an open source extended sqllite all along ;)
            </p>
            <div class="flex flex-col items-center space-y-4">
                <ul>
                    <li><a href="https://sqlparse.readthedocs.io/en/latest/"><u>sqlparse</u></a></li>
                    <li><a href="https://github.com/tobymao/sqlglot"><u>sqlglot</u></a></li>
                    <li><a href="https://github.com/dbeaver/dbeaver"><u>dbeaver</u></a></li>
                    <li><a href="https://github.com/tursodatabase/libsql"><u>libsql</u></a></li>
                </ul>
            </div>
        </div>
    </main>
</div>
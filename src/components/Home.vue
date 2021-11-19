<template>
    <div class="min-h-screen bg-white dark:bg-gray-800">
        <!-- Page Heading -->
        <nav class="sticky border-b-2 dark:border-gray-600 top-0 z-20 bg-white dark:bg-gray-700">
            <!-- Primary Navigation Menu -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <a href="https://laravelianbd.com">
                            <img id="zz" class="object-cover w-1/2" src="https://laravelianbd.com/storage/images/logoWhite.png" alt="layouts.nav-menu.LaravelianBD_Logo">
                        </a>
                    </div>
                    <div class="w-1/4 relative hidden md:block">
                        <input id="search" autocomplete="off" name="search" placeholder="Search..." type="text" class="h-9 block dark:placeholder-gray-300 mt-1 w-full border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <button id="Xbutton" onclick="SearchClose()" class="focus:outline-none absolute right-0 top-0 mt-3.5 mr-2 text-blue-500 hover:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path>
                            </svg>
                        </button>
                        <div id="searchResultBad">
                        </div>
                    </div>
                    <div class="hidden sm:flex sm:items-center sm:ml-6">
                        <div id="switchTheme" class="rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-100 p-2 ml-4">
                            <div id="nightMode"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg></div>
                        </div>
                                            <form action="https://laravelianbd.com/language/bn" method="GET">
                                <input type="hidden" name="_token" value="pXD7PgW8SwsxgTp64kV9gOcRBscCZnmOour1Qc4e">                        <button type="submit" class="focus:outline-none rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-100 p-2 ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16">
                                        <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"></path>
                                    </svg>
                                </button>
                            </form>
                                        <a href="https://laravelianbd.com/post/create" class="inline-flex rounded-md ml-1">
                            <button type="button" class=" inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-300 font-bold bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-700 focus:outline-none transition">
                                Share Post
                            </button>
                        </a>
                        <a href="https://laravelianbd.com/screenshort/upload" class="inline-flex rounded-md ml-1 mr-1">
                            <button type="button" class=" inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-300 font-bold bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-700 focus:outline-none transition">
                                Upload SS
                            </button>
                        </a>
                                        <a href="https://laravelianbd.com/login" class=" inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-300 font-bold bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-700 focus:outline-none transition">
                            Login
                        </a>
                                        <!--Dropdown -->
                        <div class="ml-3 relative">
                            <div class="relative">
            <div>
                <span class="inline-flex rounded-md">
                                            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-300 font-bold bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-700 focus:outline-none transition">
                                                Hi, Guest!
                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </span>
            </div>

            <div class="absolute z-50 mt-2 w-48 rounded-md shadow-lg origin-top-right right-0 " style="display: none;">
                <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white dark:bg-gray-600">
                    <a href="https://laravelianbd.com/post/index" class="block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-500 transition">
                                        Posts
                                    </a>
                                    <div class="border-t border-gray-100 dark:border-gray-500"></div>
                                    <a href="https://laravelianbd.com/comment/index" class="block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-500 transition">
                                        Comments
                                    </a>
                </div>
            </div>
        </div>
                        </div>
                    </div>
                    <!-- Hamburger -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:bg-gray-600 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-600 focus:text-gray-500 dark:focus:text-gray-400 transition">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                <path class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="mb-1 relative w-full md:hidden">
                    <input id="search2" autocomplete="off" name="search2" placeholder="Search..." type="text" class="h-9 block dark:placeholder-gray-300 mt-1 w-full border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <button onclick="SearchClose2()" class="focus:outline-none absolute right-0 top-0 mt-2 mr-2 text-blue-500 hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path>
                        </svg>
                    </button>
                    <div id="searchResult2">
                    </div>
                </div>
            </div>
            <!-- Responsive Navigation Menu -->
            <div class="hidden sm:hidden">
                <div class="flex border-t p-2 border-gray-200 dark:border-gray-500">
                    <div id="switchTheme2" class="rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-100 p-2 ml-4">
                        <div id="nightMode2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg></div>
                    </div>
                                    <form action="https://laravelianbd.com/language/bn" method="GET">
                            <input type="hidden" name="_token" value="pXD7PgW8SwsxgTp64kV9gOcRBscCZnmOour1Qc4e">                    <button type="submit" class="focus:outline-none rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-100 p-2 ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16">
                                    <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"></path>
                                </svg>
                            </button>
                        </form>
                            </div>
                <!-- Responsive Settings Options -->
                <div class="pb-1 border-t border-gray-200 dark:border-gray-500">
                    <div class="">
                        <a href="https://laravelianbd.com/post/create" class=" block pl-3 pr-4 py-2 text-base font-medium focus:outline-none dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                            Share Post
                        </a>
                        <div class="border-t border-gray-100 dark:border-gray-500"></div>
                        <a href="https://laravelianbd.com/screenshort/upload" class=" block pl-3 pr-4 py-2 text-base font-medium focus:outline-none dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                            Upload SS
                        </a>
                        <div class="border-t border-gray-100 dark:border-gray-500"></div>
                                        <a href="https://laravelianbd.com/login" class=" block pl-3 pr-4 py-2 text-base font-medium focus:outline-none dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                            Login
                        </a>
                                        <div class="border-t border-gray-100 dark:border-gray-500"></div>
                        <!--Dropdown -->
                        <div class="relative">
                            <div class="relative">
            <div>
                <span class=" block pl-3 pr-4 py-2 text-base font-medium focus:outline-none dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                                            <button type="button" class="flex">
                                                Hi, Guest!
                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </span>
            </div>

            <div class="absolute z-50 mt-2 w-48 rounded-md shadow-lg origin-top-left left-0 " style="display: none;">
                <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white dark:bg-gray-600">
                    <a href="https://laravelianbd.com/post/index" class=" block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-500 transition">
                                        Posts
                                    </a>
                                    <div class="border-t border-gray-100 dark:border-gray-500"></div>
                                    <a href="https://laravelianbd.com/comment/index" class=" block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-500 transition">
                                        Comments
                                    </a>
                </div>
            </div>
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Page Content -->
        <main>
            <div class="w-full">
                <div class="m-2">
                    <div class="flex items-center justify-center">
                        <img class="relative w-full h-full lg:h-1/2" src="https://laravelianbd.com/storage/images/banner.png" alt="LaravelianBD Banner">
                        <div class="absolute text-center">
                            <div class="text text-xl lg:text-6xl text-gray-100 dark:text-white font-black">
                                LaravelianBD Is A Problem Fixing Platform !!
                            </div>
                            <a href="https://laravelianbd.com/post/create">
                                <button type="button" class="mt-4 text rounded dark:text-white text-white border-gray-500 lg:border-gray-600 dark:border-gray-300 font-bold focus:outline-none border-2 p-2 text-center hover:bg-gray-500 dark:hover:bg-gray-500 hover:text-white transition">
                                    Share Your Problem !
                                </button>
                            </a>
                        </div>
                    </div>
                    <!-- OverView  -->
                    <div class="border-2 border-gray-100 dark:border-gray-700">
                        <div class="w-full items-center">
                            <div class="container my-2 mx-auto px-2">
                                <div class="flex flex-wrap justify-center -mx-1 lg:-mx-4">
                                    <div class="my-1 px-1 w-full lg:w-1/2 lg:my-4 lg:px-4">
                                        <div class="bg-white dark:bg-gray-700 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                                            <div class="flex justify-center">
                                                <img class="w-2/5" src="https://laravelianbd.com/storage/images/problems.png" alt="">
                                            </div>
                                            <div class="text-center leading-tight p-2 md:p-4">
                                                <div class="dark:text-gray-300 text-md font-bold">
                                                                                                    6
                                                                                            </div>
                                                <div class="text-gray-600 dark:text-gray-300 inilne-flex justify-center text-lg font-extrabold">Problems</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-1 px-1 w-full lg:w-1/2 lg:my-4 lg:px-4">
                                        <div class="bg-white dark:bg-gray-700 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                                            <div class="flex justify-center">
                                                <img class="w-2/5" src="https://laravelianbd.com/storage/images/solved.png" alt="">
                                            </div>
                                            <div class="text-center leading-tight p-2 md:p-4">
                                                <div class="dark:text-gray-300 text-md font-bold">
                                                                                                    6
                                                                                            </div>
                                                <div class="text-gray-600 dark:text-gray-300 inilne-flex justify-center text-lg font-extrabold">Solved</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Problems  -->
                    <div class="w-full mt-2 p-2 border-2 border-gray-100 dark:border-gray-700">
                        <div class="font-bold text-center text-gray-600 dark:text-gray-300 border-b-2 border-gray-100 dark:border-gray-700 p-2 px-2 text-lg">
                            Recent Problems
                        </div>
                        <div class="w-full">
                            <div class="container my-2 mx-auto px-2">
                                                            <div>
                                        <div class="flex flex-wrap">
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="লারাভেল অথেনটিকেশন নিয়ে জানতে চাচ্ছি!!" title="লারাভেল অথেনটিকেশন নিয়ে জানতে চাচ্ছি!!" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716775420292688.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/question/14">
                                                                    লারাভেল অথেনটিকেশন নিয়ে জানতে চাচ্ছি!!
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            27
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="Why show this error when i validate my $request data??" title="Why show this error when i validate my $request data??" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716579390463686.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/problem/13">
                                                                    Why show this error when i validate my $request data??
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            12
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="Laravel Migration Problem! Please Help me" title="Laravel Migration Problem! Please Help me" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716578013718374.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/problem/12">
                                                                    Laravel Migration Problem! Please Help me
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            8
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="ফ্রন্ট-এন্ড বনাম ব্যাক-এন্ড ডেভেলপার!!" title="ফ্রন্ট-এন্ড বনাম ব্যাক-এন্ড ডেভেলপার!!" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716562950987542.png">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/tips-n-tricks/web-development/11">
                                                                    ফ্রন্ট-এন্ড বনাম ব্যাক-এন্ড ডেভেলপার!!
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            11
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="ওয়েব ডেভেলপার হওয়ার জন্য কোন প্রোগ্রামিং লেঙ্গুয়েজ শিখলে ভালো হয়?" title="ওয়েব ডেভেলপার হওয়ার জন্য কোন প্রোগ্রামিং লেঙ্গুয়েজ শিখলে ভালো হয়?" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716562586839418.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/peoples-ask/web-development/10">
                                                                    ওয়েব ডেভেলপার হওয়ার জন্য কোন প্রোগ্রামিং লেঙ্গুয়েজ শিখলে ভালো হয়?
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            16
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="How To Configure  Web Mail In .env  File??" title="How To Configure  Web Mail In .env  File??" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716556874309473.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/question/9">
                                                                    How To Configure  Web Mail In .env  File??
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            6
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="How To Use Laravel Boilerplate in My Project??" title="How To Use Laravel Boilerplate in My Project??" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716556010338879.png">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/question/8">
                                                                    How To Use Laravel Boilerplate in My Project??
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            12
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="Laravel 7 Image Upload Problem!!" title="Laravel 7 Image Upload Problem!!" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716502177620306.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/problem/7">
                                                                    Laravel 7 Image Upload Problem!!
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            9
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="Which app is best for practicing JavaScript on mobile?" title="Which app is best for practicing JavaScript on mobile?" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716469594357707.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/peoples-ask/web-development/6">
                                                                    Which app is best for practicing JavaScript on mobile?
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            6
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="আউট পুট থেকে শুধু 2021-11-14 এই টুকু নিব কিভাবে ?" title="আউট পুট থেকে শুধু 2021-11-14 এই টুকু নিব কিভাবে ?" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716459303201879.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/problem/5">
                                                                    আউট পুট থেকে শুধু 2021-11-14 এই টুকু নিব কিভাবে ?
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            13
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="How to pass json data from blade to controller and save to database?" title="How to pass json data from blade to controller and save to database?" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716402829291936.png">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/problem/4">
                                                                    How to pass json data from blade to controller and save to database?
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            11
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="Git Repo ক্লোন করার পর প্রোজেক্ট ওপেন হচ্ছে না!" title="Git Repo ক্লোন করার পর প্রোজেক্ট ওপেন হচ্ছে না!" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716401063536708.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/problem/3">
                                                                    Git Repo ক্লোন করার পর প্রোজেক্ট ওপেন হচ্ছে না!
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            6
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                                    <div class="relative my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <div class="overflow-hidden rounded-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow">
                                                        <div>
                                                            <img alt="Laravel বনাম Codeigniter, কোনটি ভাল পিএইচপি ফ্রেমওয়ার্ক?" title="Laravel বনাম Codeigniter, কোনটি ভাল পিএইচপি ফ্রেমওয়ার্ক?" class="block h-48 w-full" src="https://laravelianbd.com/storage/problem/1716398049816786.jpg">
                                                        </div>
                                                        <header class="flex items-center text-center justify-between leading-tight p-2 md:p-4">
                                                            <div class="w-full text-center">
                                                                <a class="text-md font-normal text-blue-600 dark:text-blue-300 text-center no-underline hover:underline" href="/article/laravel/question/1">
                                                                    Laravel বনাম Codeigniter, কোনটি ভাল পিএইচপি ফ্রেমওয়ার্ক?
                                                                </a>
                                                            </div>
                                                        </header>
                                                    </div>
                                                    <div class="absolute top-0 right-0 mr-6 mt-2">
                                                        <div class="flex rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-white font-bold px-2 text-xs">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                                            </svg>
                                                            <div class="ml-1">
                                                                                                                            27
                                                                                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                            </div>
                                    </div>
                                                        <div class="flex justify-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Categories  -->
                    <div class="w-full mt-2 p-2 border-2 border-gray-100 dark:border-gray-700">
                        <div class="font-bold text-center text-gray-600 dark:text-gray-300 dark:text-gray-300 border-b-2 border-gray-100 dark:border-gray-700 p-2 px-2 text-lg">
                            Categories
                        </div>
                        <div class="w-full">
                            <div class="container my-2 mx-auto px-2">
                                                            <div class="flex flex-wrap">
                                                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                <div class="overflow-hidden bg-white rounded-t-2xl dark:bg-gray-700 border border-gray-600 shadow duration-100 transform flex flex-col">
                                                    <div class="flex justify-center items-center p-2 pb-6 space-x-4 text-gray-300 dark:text-gray-300 bg-gray-800 dark:bg-gray-700 duration-200 transform group">
                                                        <h3 class="mb-1 text-xl font-semibold leading-snug">
                                                                                                                    Laravel
                                                                                                            </h3>
                                                    </div>

                                                    <div class="overflow-hidden relative flex-shrink-0 -mt-4 bg-white dark:bg-gray-600 rounded-t-2xl flex flex-col justify-between flex-1">
                                                        <ul>
                                                                                                                                                                                <li>
                                                                        <a href="/category/laravel/problem" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    1.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                Problem
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    6
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                            <li>
                                                                        <a href="/category/laravel/tips" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    2.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                Tips
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    0
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                            <li>
                                                                        <a href="/category/laravel/question" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    3.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                Question
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    4
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                <div class="overflow-hidden bg-white rounded-t-2xl dark:bg-gray-700 border border-gray-600 shadow duration-100 transform flex flex-col">
                                                    <div class="flex justify-center items-center p-2 pb-6 space-x-4 text-gray-300 dark:text-gray-300 bg-gray-800 dark:bg-gray-700 duration-200 transform group">
                                                        <h3 class="mb-1 text-xl font-semibold leading-snug">
                                                                                                                    VueJs
                                                                                                            </h3>
                                                    </div>

                                                    <div class="overflow-hidden relative flex-shrink-0 -mt-4 bg-white dark:bg-gray-600 rounded-t-2xl flex flex-col justify-between flex-1">
                                                        <ul>
                                                                                                                                                                                <li>
                                                                        <a href="/category/vuejs/problem" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    1.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                Problem
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    0
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                            <li>
                                                                        <a href="/category/vuejs/tips" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    2.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                Tips
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    0
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                            <li>
                                                                        <a href="/category/vuejs/question" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    3.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                Question
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    0
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                <div class="overflow-hidden bg-white rounded-t-2xl dark:bg-gray-700 border border-gray-600 shadow duration-100 transform flex flex-col">
                                                    <div class="flex justify-center items-center p-2 pb-6 space-x-4 text-gray-300 dark:text-gray-300 bg-gray-800 dark:bg-gray-700 duration-200 transform group">
                                                        <h3 class="mb-1 text-xl font-semibold leading-snug">
                                                                                                                    People’s Ask
                                                                                                            </h3>
                                                    </div>

                                                    <div class="overflow-hidden relative flex-shrink-0 -mt-4 bg-white dark:bg-gray-600 rounded-t-2xl flex flex-col justify-between flex-1">
                                                        <ul>
                                                                                                                                                                                <li>
                                                                        <a href="/category/peoples-ask/web-development" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    1.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                Web Development
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    2
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                            <li>
                                                                        <a href="/category/peoples-ask/github" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    2.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                Github
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    0
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                <div class="overflow-hidden bg-white rounded-t-2xl dark:bg-gray-700 border border-gray-600 shadow duration-100 transform flex flex-col">
                                                    <div class="flex justify-center items-center p-2 pb-6 space-x-4 text-gray-300 dark:text-gray-300 bg-gray-800 dark:bg-gray-700 duration-200 transform group">
                                                        <h3 class="mb-1 text-xl font-semibold leading-snug">
                                                                                                                    Tips N Tricks
                                                                                                            </h3>
                                                    </div>

                                                    <div class="overflow-hidden relative flex-shrink-0 -mt-4 bg-white dark:bg-gray-600 rounded-t-2xl flex flex-col justify-between flex-1">
                                                        <ul>
                                                                                                                                                                                <li>
                                                                        <a href="/category/tips-n-tricks/web-development" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    1.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                Web Development
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    1
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                                                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                <div class="overflow-hidden bg-white rounded-t-2xl dark:bg-gray-700 border border-gray-600 shadow duration-100 transform flex flex-col">
                                                    <div class="flex justify-center items-center p-2 pb-6 space-x-4 text-gray-300 dark:text-gray-300 bg-gray-800 dark:bg-gray-700 duration-200 transform group">
                                                        <h3 class="mb-1 text-xl font-semibold leading-snug">
                                                                                                                    Components
                                                                                                            </h3>
                                                    </div>

                                                    <div class="overflow-hidden relative flex-shrink-0 -mt-4 bg-white dark:bg-gray-600 rounded-t-2xl flex flex-col justify-between flex-1">
                                                        <ul>
                                                                                                                                                                                <li>
                                                                        <a href="/category/components/with-tailwindcss" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    1.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                With TailwindCss
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    0
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                            <li>
                                                                        <a href="/category/components/with-bootstrap" class="flex justify-between items-center py-3 px-4 space-x-2 font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-500  duration-200 transform hover:bg-gray-200 dark:hover:bg-gray-500">
                                                                            <div class="flex flex-1">
                                                                                <div class="flex-shrink-0 mr-2">
                                                                                                                                                                    2.
                                                                                                                                                            </div>
                                                                                <div>
                                                                                                                                                                With Bootstrap
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-sm">
                                                                                (
                                                                                                                                                                    0
                                                                                                                                                            )
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                                                                                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                                                    </div>
                                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- Page Footer -->
        <footer class="py-4 px-5 bg-white border-t-2 border-b-2 dark:border-gray-600 dark:bg-gray-700">
            <div class="flex flex-col justify-between items-center mx-auto space-y-4 w-full max-w-7xl md:flex-row md:space-y-0">
                <div class="text-lg text-gray-500 font-semibold dark:text-gray-300">
                    © LaravelianBD 2021
                </div>
                <div class="flex items-center sm:flex-row">
                    <a href="mailto:laravelianbd@gmail.com" target="" class="p-1 px-2 text-sm font-bold bg-gray-200 hover:bg-gray-100 text-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-300 rounded">
                        E-mail
                    </a>
                    <a href="https://facebook.com/laravelianbd" target="__blank" class="p-1 px-2 ml-1 text-sm font-bold bg-gray-200 hover:bg-gray-100 text-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-300 rounded">
                        Facebook
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
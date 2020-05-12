<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" :to="{name: 'home'}">Home</router-link>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </nav>

        <router-link :to="{name: 'second'}">Second</router-link>
        <router-view></router-view>
    </div>
</template>

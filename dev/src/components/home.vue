<template>
<body>
    <header>
        <nav>
            <ul class="nav__links">
                <li><a href="#">First</a></li>
                <li><a href="#">Second</a></li>
                <li><a href="#">Third</a></li>
            </ul>
        </nav>
    <a class="cta" href="#"><button>Contact</button></a>
    </header>
</body>
</template>

<script setup></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@500&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color:#24252A ;
}

li,a,button {
    font-family: "Edu+VIC+WA+NT+Beginner" sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
}

heder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
}

</style>

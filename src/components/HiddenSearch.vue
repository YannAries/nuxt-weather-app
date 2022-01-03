<template>
    <div class="search-container">
        <div class="container">
            <div class="close-bar">
                <button type="submit">
                    <img src="@/assets/svg/close_white_18dp.svg" alt="Close" />
                </button>
            </div>
            <!-- <form action="" class="search-bar"> -->
            <!-- <form class="search-bar" @submit.prevent="submitForm">
                <div class="">
                    <span>
                        <img src="@/assets/svg/search_black_18dp.svg" alt="search" />
                    </span>
                    <input id="" type="text" name="" placeholder="Enter a location" />
                </div>
                <button type="submit">Search</button>
            </form> -->
            <p class="empty-message">No Locations founded</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HiddenSearch',
};
</script>

<style lang="scss" scoped>
.search-container {
    background-color: #1e213a;
    display: none;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
}

@media (min-width: 768px) {
    .search-container {
        width: 31%;
        position: fixed;
    }
}

.container {
    position: relative;
    width: 90%;
    margin: auto;
}

.close-bar {
    text-align: right;
    padding: 10px 15px;
    box-sizing: border-box;
    margin-bottom: 20px;
}

@media (min-width: 768px) {
    .close-bar {
        text-align: right;
        padding: 15px 20px;
    }
}

@media (min-height: 768px) {
    .close-bar {
        padding: 15px 20px;
    }
}

.close-bar button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    transition: all 0.3s ease-in-out;
}

.search-bar {
    width: 100%;
    display: flex;
}

.search-bar div {
    width: 75%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 44px;
    border: 1px solid #e7e7eb;
    transition: all 0.3s ease-in-out;
}

.search-bar span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    min-width: 35px;
}

.search-bar input {
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 12px 0;
    font-size: 1em;
    color: #e7e7eb;
    flex-shrink: 1;
}

.search-bar button {
    border: none;
    outline: none;
    font-size: 1em;
    background: #3c47e9;
    border: 1px solid #3c47e9;
    color: #fff;
    cursor: pointer;
    padding: 12px 0;
    width: 23%;
    margin-left: 2%;
    transition: all 0.3s ease-in-out;
}

.empty-message {
    color: #e7e7eb;
    margin-top: 35px;
}
</style>

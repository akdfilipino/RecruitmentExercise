<template>
    <div class="login-component">
        <slot></slot>
    </div>
</template>

<style>
    .login-component{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
    }
    .login-holder {
        border: 3px solid black;
        padding: 35px;
    }
    .username-holder {
        margin-bottom: 10px;
    }
    .password-holder {
        margin-bottom: 10px;
    }
    .button-holder {
        display: flex;
        justify-content: right;
    }
</style>
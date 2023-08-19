<script setup>
import LoginComponent from '../components/LoginComponent.vue';
import { ref, inject} from 'vue'
import router from '../routes/index.js'
const url = `${import.meta.env.VITE_BE_ENDPOINT}/Account/SignIn`

const { updateIsLoggedIn } = inject('isLoggedIn')

const credentials = ref({
    username: ref(),
    password: ref()
})

const createRequest = async () => {

    let formBody = [];
    for (const property in credentials.value) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(credentials.value[property]);
        formBody.push(encodedKey + '=' + encodedValue);
    }

    formBody = formBody.join('&');

    const requestOptions = {
        method : 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    }

    const res = await fetch(url, requestOptions)
    
    if(res.status === 200)
    {
        updateIsLoggedIn()
        router.push({ name: 'home'})
    }
}

</script>

<template>
    <LoginComponent>
        <div class='login-holder'>
            <div class='form-holder'>
                <div class='username-holder'>
                    <label class="username">Username</label>
                    <div class='username-input'>
                        <input v-model='credentials.username' placeholder='Type your username'>
                    </div>
                </div>
                <div class='password-holder'>
                    <label class="password">Password</label>
                    <div class='password-input'>
                        <input v-model='credentials.password' type="password" placeholder='Type your password'>
                    </div>
                </div>
                <div class='button-holder'>
                    <button @click='createRequest'>Login</button>
                </div>
            </div>
        </div>
    </LoginComponent>
</template>
<script setup lang="ts">
definePageMeta({
    layout: "default"
})

const router = useRouter()

function login() {
    router.push({path: "/dashboard"})
}
</script>

<template>
    <div>
        <div>
            Clement
        </div>
        <form class="flex flex-col">
            <label for="email">Email</label>
            <Input id="email" type="email" />
            <label for="password">Password</label>
            <Input id="password" type="password" />
            <div>
            <Button @click.prevent="login">Sign in</Button>
            <Button @click.prevent>Sign up</Button>
            </div>
        </form>
    </div>
</template>
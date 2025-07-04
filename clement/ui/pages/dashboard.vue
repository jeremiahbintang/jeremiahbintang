<script setup lang="ts">
definePageMeta({
    middleware: "auth",
    layout: "app"
})

const start = ref(0);
const end = ref(6);
const todoCalendar = reactive<TodoCalendar>({})

function formatDateToID(str : string){
    const date = new Date(str)
    return date.toISOString().split('T')[0]
}

function addDates() {
    for (let i = start.value; i <= end.value; i++) {
        const date = new Date()
        date.setDate(date.getDate() + i)
        todoCalendar[date.toISOString().split('T')[0]] = []
    }
}

function getTodoList(){
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + start.value)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + end.value)


    fetch(`/api/todos?start=${startDate.toISOString().split('T')[0]}&end=${endDate.toISOString().split('T')[0]}`)
        .then(r => r.json())
        .then((r : TodoAPI[]) => {
            addDates()
            r.map((el) => {
                const date = formatDateToID(el.deadline)
                todoCalendar[date].push(el)
            })
        })
}

function addOneWeek() {
    start.value = start.value + 7;
    end.value = end.value + 7;
    getTodoList()
}
 
onMounted(() => {
    getTodoList()
})

</script>
<template>
    <div>
        Dashboard
    </div>
    <div class="flex flex-col">
        <div v-for="(todoList, key) in todoCalendar" :key="key">{{ key }}
            <UCheckbox v-for="todo in todoList" :key="`todo-${todo.id}`" :label="todo.title" />
        </div>
    </div>
    <button @click="addOneWeek" class="btn">More</button>
</template>
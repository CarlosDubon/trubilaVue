<template>
    <div>
        <h2 class='text-muted'>Tareas</h2>
        <full-calendar :events="events"></full-calendar>
    </div>
</template>

<script>
    import { FullCalendar } from 'vue-full-calendar'
    import "fullcalendar/dist/fullcalendar.min.css";
    export default {
        data(){
            return{
                events:[
                    {
                        title: 'Primer Encuentro',
                        start: '2019-04-25',
                        end:'2019-04-25',
                    }
                ]
            }
        },
        components: {
            FullCalendar,
        },
    }
</script>

<style lang="scss" scoped>

</style>
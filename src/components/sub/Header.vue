<script setup>
import { ref } from "vue"

const date = new Date()
const time = ref(date.getHours().toString().padStart(2, '0')+":"+date.getUTCMinutes().toString().padStart(2, '0'))
</script>

<template>
    <div class="content ">
       <div class="cont px-1">
            <div class="d-flex justify-content-between align-items-center top ">
                <span>{{ time }}</span>
                <span class="d-flex align-items-center">
                    <i class="material-icons">wifi_tethering</i>
                    <i class="fa-solid fa-signal px-1"></i>
                    <i class="fa-solid fa-signal px-1"></i>
                    100%<i class="material-icons">battery_full</i>
                </span>
            </div>
    
            <div class="d-flex justify-content-between align-items-center middle px-1">
                <h5>WhatsApp</h5>
                <i class="material-icons">wifi</i>
                <i class="material-icons">brightness_7</i>
                <i class="fa fa-search"></i>
                <i class="material-icons">camera_alt</i>
                <i class="fas fa-ellipsis-v fa-lg"></i>
                
            </div>

            <div class="d-flex justify-content-between bottom  align-items-center my-1">
                <!-- <i class="fas fa-users"></i> -->
                <span class="active">Chats <sup class="border rounded-circle ">3</sup></span>
                <span>Groups  <sup class="border rounded-circle ">4</sup></span>
                <span>Status <sup class="border rounded-circle ">1</sup></span>
                <span>Calls <sup class="border rounded-circle ">2</sup></span>

            </div>
        </div>
       </div>
</template>

<style lang="sass" scoped>
    @import '../../assets/main'
    .content
        height: 150px
        background-color: lighten($bg, 10 )
        // border: 1px solid red
        .cont
            height: 100%
            display: flex
            flex-direction: column
            justify-content: space-between
            .top
                i
                    padding: 5px 0
            .middle
                flex-grow: 1.5
            .bottom
                .active
                    border-bottom: 3px solid green
                span
                    // scale: .9
                    padding: 10px 5px
                    // border: 1px solid red
                    cursor: pointer
                    
                    sup
                        padding: 1px 5px
                        background-color: $primary
                        color: $bg
                        font-size: 10px
                        
        
            
</style>

<script setup>

</script>

<template>
  <div>
    <header_ />
    <section class="one">
        <div class="user d-flex align-items-center justify-content-between p-1 mt-1" v-for="(x, index) in 10" :key="index"> 
            <div class="imgs ">
                <img src="/img/user.png" alt="">
            </div>
            <div class="content d-flex flex-column justify-content-between h-100 py-1 ms-3">
                <p class="text-light">+234 806 198 2520</p>
                <small class="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Omnis quam repellendus cupiditate vitae obcaecati dignissimos, aperiam quasi. Veniam, 
                    beatae accusantium.</small>
            </div>
            <div class="added">
                <span class="">Today</span><br>
                <small class="text-secondary">online</small>
            </div>
        </div>
    </section>

    <div class="floating-bar">
        <button ><i class="fas fa-plus"></i></button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/main'
section
    font-family: Arial, Helvetica, sans-serif
    height: calc( 100vh - 165px )
    overflow-y: scroll
    .user
        width: 100%
        height: 70px
        cursor: pointer
        &:hover
            background-color: lighten($bg,5 )
            
        .imgs
            width:  60px
            height: 60px
            // border: 1px solid red
            position: relative
            &::before
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                border-radius: 50%
                content: ''
                background-color: transparentize($bg, .9 )
            img
                width: 100%
                height: 100%
                border-radius: 50%
        .content
            width: calc( 100% - 110px )
            p
                padding: 0
                margin: 0
            .lorem
                overflow: hidden
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 1
                text-overflow: ellipsis
                white-space: normal
                
        .added
            width: 50px
            // align-self: flex-start

.floating-bar
    width: 350px
    position: fixed
    bottom: 5%
    z-index: 999
    

    button
        float: right
        margin-right: 30px
        width: 60px
        height: 60px
        border-radius: 50%
        background-color: transparentize(green, .2)
        outline: none
        border: none
        &:hover
            background-color: lighten(transparentize(green, .2), 10)

@media screen and (max-width: 464px)
    .floating-bar
        
        width: 100%
        
           
</style>

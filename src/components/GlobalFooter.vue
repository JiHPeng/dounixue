<template>
    <div class="footer-fixed">
        <div class="footer-flex">
            <div class="footer-flex-inner">
                <img src="../assets/logo.png" alt="">
                <span>首页</span>
            </div>
            <div class="footer-flex-inner">
                <img src="../assets/logo.png" alt="">
                <span>课程</span>
            </div>
            <div class="footer-flex-inner">
                <img src="../assets/logo.png" alt="">
                <span>我的</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "globalFooter"
    }
</script>

<style lang="scss">
    .footer-fixed {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        .footer-flex {
            display: flex;
            justify-content: space-around;
            .footer-flex-inner {
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    height: 40px;
                }
            }
        }
    }
</style>
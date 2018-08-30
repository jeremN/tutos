<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-local-on:click.color="'red'">Hey click me !</p>
                <button v-customOn:click="clicked" class="btn btn-primary">Click me</button>
                <hr>
                <button class="btn btn-primary"
                        v-customOn:mouseenter="mouseEnter"
                        v-customOn:mouseleave="mouseLeave">Click me</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-on': {
                bind(el, binding, vnode) {
                    if(binding.arg == 'click') {
                        el.addEventListener('click', (e) => {
                            //alert('clicked');
                            if(binding.modifiers['color']) {
                                el.style.backgroundColor = binding.value;
                            }
                            else {
                                el.style.color="turquoise";
                            }
                        });
                    }
                }
            },
            customOn: {
                bind(el, binding) {
//                    el.onclick = function() {
//                        binding.value();
//                    }
                        const type = binding.arg;
                        const fn = binding.value;
                        el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked() {
                alert('clicked');
            },
            mouseEnter() {
                console.log('mouse entered');
            },
            mouseLeave() {
                console.log('mouse leave');
            }
        }
    }
</script>

<style>
</style>

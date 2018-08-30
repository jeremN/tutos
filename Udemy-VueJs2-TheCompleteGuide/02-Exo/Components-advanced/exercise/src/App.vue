<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" 
                        @click="selectedApp = 'appBlue'">
                    Load Blue Template
                </button>

                <button class="btn btn-success" 
                        @click="selectedApp = 'appGreen'">
                    Load Green Template
                </button>

                <button class="btn btn-danger" 
                        @click="selectedApp = 'appRed'">
                    Load Red Template
                </button>

                <hr>

                <component :is="selectedApp">
                    <h2>title</h2>
                </component>
                <!--app-blue>
                </app-blue>

                <app-green>
                    <h2>Green div title</h2>
                </app-green>
                
                <app-red>
                    <h2 slot="title">Blue div title</h2>
                    <p>This is red div !</p>                    
                </app-red-->

            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedApp: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>

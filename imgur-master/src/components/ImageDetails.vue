<template>
    <b-row class="justify-content-center">
        <b-col cols="8" class="text-center mb-2">
            <b-card-group deck>
                <b-card
                        header=""
                        header-tag="header"
                        :footer="desc"
                        footer-tag="footer"
                        :title="imageTitle"
                >
                    <b-card-text class="text-center">
                        <img :src="image.link" class="img-fluid" alt=""/>
                        <h3>score: {{score}}</h3>
                        <h3><i class="far fa-thumbs-up"></i>{{votes.up}}</h3>
                        <h3><i class="fas fa-thumbs-down"></i> {{votes.down}}</h3>
                    </b-card-text>
                </b-card>
            </b-card-group>
        </b-col>

    </b-row>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "imageDetails",
        data(){
            return{
                image:{},
                votes:{
                    up:0,
                    down:0
                },
                imageTitle:'',
                score: 0
            }
        },
        methods:{
            getImageDetails(){
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': "Client-ID e3453d3a4c55237",
                    'Accept': 'application/json'
                }
                axios.get(process.env.VUE_APP_IMAGE + `/${this.$route.params.id}`,{headers: headers})
                    .then((response)=> {
                        this.image = response.data.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created() {
            this.$emit('viralSwitchShow',false)
            this.$emit('paginationShow',false)
            this.$emit('navigationShow',false)
            this.$emit('filterShow',false)
            this.getImageDetails();
            this.votes.up = this.$route.query.ups ? this.$route.query.ups : 0;
            this.votes.down = this.$route.query.downs ? this.$route.query.downs : 0;
            this.score = this.$route.query.score ? this.$route.query.score : 0;
            this.imageTitle = this.$route.query.title ? this.$route.query.title : "NO TITLE";
        },
        computed: {
            title() {
                if(this.image.title){
                    return this.image.title;
                }else {
                    return "NO TITLE";
                }
            },
            desc() {
                if(this.image.description){
                    return this.image.description;
                }else {
                    return "NO DESCRIPTION";
                }
            },
            vote(){
                if(this.image.vote){
                    return this.image.vote;
                }else {
                    return 0;
                }
            }
        }
    }
</script>


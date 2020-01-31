<template>
    <b-card-group columns>
        <b-card  v-for="image in images" :key="image.id"  @click="showDetails(image)"  :img-src="image.link" img-alt="Image" class="cursor-hand">
            <b-card-text>
                {{image.desc}}
            </b-card-text>
        </b-card>
    </b-card-group>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Home",
        data() {
            return {
                images:[],
            }
        },
        props:['isViral','currentPage', 'section', 'sortedImages'],
        methods:{
            showDetails(image){
                this.$router.push({name: 'imageDetails', params: { id: image.id },query: { ups: image.ups, downs: image.downs, title: image.title, score: image.score }})
            },

            getImages(){
                this.images = [];
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': "Client-ID e3453d3a4c55237",
                    'Accept': 'application/json'
                }
                axios.get(process.env.VUE_APP_GET_IMAGES + `/${this.section}` + '/top/day' + `/${this.$store.state.page}` ,{headers: headers, params:{showViral: this.isViral}})
                    .then((response)=> {
                        response.data.data.map( (item) =>{

                            if (item.images){
                                if (item.images[0].type === 'image/jpeg'){
                                    let title = item.title ? item.title : 'NO TITLE';
                                    let desc = item.images[0].desc ? item.images[0].description : 'NO DESCRIPTION';
                                    this.images.push({
                                        link: item.images[0].link,
                                        title: title,
                                        desc: desc,
                                        id: item.images[0].id,
                                        datetime: item.images[0].datetime,
                                        views: item.images[0].views,
                                        ups: item.ups,
                                        downs: item.downs,
                                        score: item.score,
                                    })
                                }

                            }else {
                                // console.log("else")
                                // console.log(item)

                            }
                        })
                        this.$store.commit('saveCurrentImages',this.images)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        watch:{
            isViral(){
                this.getImages();
            },
            currentPage(){
                this.getImages();
            },
            section(){
                this.getImages();
            },
            sortedImages(){
                this.images = this.sortedImages
            }
        },
        created(){
            this.$emit('viralSwitchShow', true)
            this.$emit('navigationShow', true)
            this.$emit('paginationShow', true)
            this.$emit('filterShow', true)
            this.getImages();

        }
    }
</script>

<style scoped>
    .card img{
        max-height: 200px;
        min-height: 200px;
        background-color:beige;
    }
</style>
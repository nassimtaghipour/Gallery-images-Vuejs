<template>
    <div>
        <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">iMGUR SAMPLE</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-show="navigationShow">
                    <b-nav-item @click="setSection('hot',0)" v-bind:class="[activeIndex === 0 ? 'active'  : '']">hot</b-nav-item>
                    <b-nav-item @click="setSection('top',1)" v-bind:class="[activeIndex === 1 ? 'active'  : '']">top</b-nav-item>
                    <b-nav-item @click="setSection('user',2)" v-bind:class="[activeIndex === 2 ? 'active' : '']">user</b-nav-item>
                    <b-tooltip target="waterfall" triggers="hover">
                        <b>waterfall</b>
                    </b-tooltip>
                    <b-tooltip target="uniform" triggers="hover">
                        <b>uniform</b>
                    </b-tooltip>
                    <b-nav-item id="waterfall" @click="waterFallThumbnail()"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"></rect><g><g><g id="svg_10"><polygon points="6.178707122802734,0 1.1573245525360107,0 0.15306150913238525,0 0.15306150913238525,1.2756938815360286 0.15306150913238525,7.654227611753868 0.15306150913238525,8.929917633937634 1.1573245525360107,8.929917633937634 6.178707122802734,8.929917633937634 7.182987213134766,8.929917633937634 7.182987213134766,7.654227611753868 7.182987213134766,1.2756938815360286 7.182987213134766,0 "></polygon></g></g><g><g id="svg_34"><polygon points="6.278707504272461,12.099999867934457 1.25732421875,12.099999867934457 0.25306129455566406,12.099999867934457 0.25306129455566406,12.804268837391646 0.25306129455566406,16.325651648036 0.25306129455566406,17.029918670654297 1.25732421875,17.029918670654297 6.278707504272461,17.029918670654297 7.282987594604492,17.029918670654297 7.282987594604492,16.325651648036 7.282987594604492,12.804268837391646 7.282987594604492,12.099999867934457 "></polygon></g></g><g><g id="svg_38"><polygon points="15.978708267211914,8.100003717719119 10.957324981689453,8.100003717719119 9.953062057495117,8.100003717719119 9.953062057495117,9.361411389385012 9.953062057495117,15.66851682793822 9.953062057495117,16.929922103881836 10.957324981689453,16.929922103881836 15.978708267211914,16.929922103881836 16.982988357543945,16.929922103881836 16.982988357543945,15.66851682793822 16.982988357543945,9.361411389385012 16.982988357543945,8.100003717719119 "></polygon></g></g><g><g><polygon points="15.878707885742188,-0.10000000149011612 10.857324600219727,-0.10000000149011612 9.85306167602539,-0.10000000149011612 9.85306167602539,0.6185544841542594 9.85306167602539,4.2113652655988005 9.85306167602539,4.929918346846392 10.857324600219727,4.929918346846392 15.878707885742188,4.929918346846392 16.88298797607422,4.929918346846392 16.88298797607422,4.2113652655988005 16.88298797607422,0.6185544841542594 16.88298797607422,-0.10000000149011612 "></polygon></g></g></g></svg></b-nav-item>
                    <b-nav-item id="uniform" @click="uniformThumbnail()"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="17" height="17"><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"></rect><g><g><g><polygon points="6.17870715566179,0 1.1573245256338325,0 0.15306144952774048,0 0.15306144952774048,1.0042672515679527 0.15306144952774048,6.0256540079346905 0.15306144952774048,7.02991762439467 1.1573245256338325,7.02991762439467 6.17870715566179,7.02991762439467 7.18298727747689,7.02991762439467 7.18298727747689,6.0256540079346905 7.18298727747689,1.0042672515679527 7.18298727747689,0 "></polygon></g></g><g><g><polygon points="6.278707504272461,10 1.25732421875,10 0.25306129455566406,10 0.25306129455566406,11.004266738891602 0.25306129455566406,16.025653839111328 0.25306129455566406,17.029918670654297 1.25732421875,17.029918670654297 6.278707504272461,17.029918670654297 7.282987594604492,17.029918670654297 7.282987594604492,16.025653839111328 7.282987594604492,11.004266738891602 7.282987594604492,10 "></polygon></g></g><g><g><polygon points="15.978708267211914,9.900003053247929 10.957324981689453,9.900003053247929 9.953062057495117,9.900003053247929 9.953062057495117,10.90426979213953 9.953062057495117,15.925656892359257 9.953062057495117,16.929921723902225 10.957324981689453,16.929921723902225 15.978708267211914,16.929921723902225 16.982988357543945,16.929921723902225 16.982988357543945,15.925656892359257 16.982988357543945,10.90426979213953 16.982988357543945,9.900003053247929 "></polygon></g></g><g><g><polygon points="15.878707885742188,-0.10000000149011612 10.857324600219727,-0.10000000149011612 9.85306167602539,-0.10000000149011612 9.85306167602539,0.9042667374014854 9.85306167602539,5.925653837621212 9.85306167602539,6.929918669164181 10.857324600219727,6.929918669164181 15.878707885742188,6.929918669164181 16.88298797607422,6.929918669164181 16.88298797607422,5.925653837621212 16.88298797607422,0.9042667374014854 16.88298797607422,-0.10000000149011612 "></polygon></g></g></g></svg></b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="filter" right v-show="filterShow">
                        <b-dropdown-item @click="sortToNewest(0)" v-bind:class="[activeIndexSort === 0 ? 'bg-secondary'  : '']">newest</b-dropdown-item>
                        <b-dropdown-item @click="popularSort(1)" v-bind:class="[activeIndexSort === 1 ? 'bg-secondary'  : '']">popular</b-dropdown-item>
                        <b-dropdown-item @click="randomSort(2)" v-bind:class="[activeIndexSort === 2 ? 'bg-secondary'  : '']">random</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-form>
                        <b-form-checkbox class="text-light" v-show="viralSwitchShow" v-model="isViral" switch size="lg">show viral images</b-form-checkbox>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-container>
            <router-view :isViral="isViral"
                         :currentPage="currentPage"
                         :sortedImages="sortedImages"
                         @paginationShow="paginationToggleShow($event)"
                         @viralSwitchShow="viralSwitchToggleShow($event)"
                         @filterShow="filterToggleShow($event)"
                         @navigationShow="setNavigationShow($event)"
                         :section="section"
            />
            <b-row class="justify-content-center">
                <b-col cols="6" class="d-flex justify-content-center">
                    <b-pagination-nav
                            v-show="paginationShow"
                            v-model="page"
                            :link-gen="linkGen"
                            :number-of-pages="numberOfPages"
                            use-router
                    ></b-pagination-nav>
                </b-col>
            </b-row>

        </b-container>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                isViral: false,
                viralSwitchShow: true,
                paginationShow: true,
                navigationShow: true,
                filterShow: true,
                section: '',
                page: 1,
                currentPage: 0,
                numberOfPages:5,
                sortedImages:'',
                activeIndex:1,
                activeIndexSort:''
            }
        },
        methods:{
            sortToNewest(activeIndex){
                this.activeIndexSort = activeIndex;
                this.sortedImages = this.$store.state.currentImages.sort((a,b) =>{
                    return  b.datetime - a.datetime
                } );
            },
            popularSort(activeIndex){
                this.activeIndexSort = activeIndex;
                this.sortedImages = this.$store.state.currentImages.sort((a,b) =>{
                    return  b.views - a.views
                } );
            },
            randomSort(activeIndex){
                this.activeIndexSort = activeIndex;
                this.sortedImages = this.$store.state.currentImages.sort( () => Math.random() - 0.5);
            },
            waterFallThumbnail(){
                let card = document.getElementsByClassName('card');
                for (let [, value] of Object.entries(card)) {
                    value.querySelector('img').style.maxHeight = 'initial';
                }
            },
            uniformThumbnail(){
                let card = document.getElementsByClassName('card');
                for (let [, value] of Object.entries(card)) {
                    value.querySelector('img').style.maxHeight = '200px';
                }
            },
            linkGen (pageNum) {
                return pageNum === 1 ? '?' : `?page=${pageNum}`
            },
            viralSwitchToggleShow(status){
                this.viralSwitchShow = status;
            },
            paginationToggleShow(status){
                this.paginationShow = status;
            },
            filterToggleShow(status){
                this.filterShow = status;
            },
            setSection(section, flag){
                this.section = section
                this.activeIndex = flag
            },
            setNavigationShow(status){
                this.navigationShow = status;
            }
        },
        watch: {
            page (param) {
                this.currentPage = param
                this.$store.commit('setPage',param)
            },
        },
        created() {}
    }
</script>
<style lang="scss">
    body {
        padding-top: 70px;
        background-color: #2e3035 !important;
    }
    .cursor-hand{
        cursor: pointer;
    }
    .dropdown-item:hover{
        background-color: #007bff !important;
    }
</style>

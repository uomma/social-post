'use strict'

/* console.log('hoal');

const title = document.querySelector('h1');
console.log(title);
title.innerHTML = 'cambio di testo';


const button = document.getElementById('testo');
console.log(button);


button.addEventListener('input', function(event){
 console.log(event.target.value);
 title.innerHTML=event.target.value;
}) */



const { createApp } = Vue
//option API
const vm = createApp({
    data() {
        return {
            activeImg: 0,
            pageTitle: 'sono il titolo della pagina',

            movie: {
                imgaes: [
                    'https://leganerd.com/wp-content/uploads/2013/04/20130425-083038.jpg',
                    'https://pad.mymovies.it/filmclub/2012/06/004/locandina.jpg',
                    'https://www.filmtv.it/imgbank/GALLERYXL/red/iron_man_3_poster_ita_2.jpg'], title: 'Ironman 3',
                category: 'action',
                length: '150',
            }
            /* nLoops: 23,
            message: 'Hello Vue!',
            subtitle: 'sotto titolo!',
            friends: ['carlo', 'marco ', 'luca'],
            awesome: true,
            lista: [{
                nome: 'patrick',
                eta: 300,
                faDomande: true
            }, {
                nome: 'mr crab',
                eta: 90,
                faDomande: false
            },
            ],
            mode: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Apple_logo_Think_Different_vectorized.svg/1920px-Apple_logo_Think_Different_vectorized.svg.png',
            showImg: true */
        }
    },
    methods: {
        nextImg() {
            this.activeImg++;
            if (this.activeImg > this.movie.imgaes.length - 1) {
                this.activeImg = 0;
            }
        },

        prevImg() {

            this.activeImg--;
            if (this.activeImg < 0) {
                this.activeImg = this.movie.imgaes.length - 1;
            }
        },

        selectimg(index, event) {
            this.activeImg = index;
            
        }




        /* greetings : function(){
            return 'ciao'
        } */

        /*    generateRandom() {
               return Math.floor(Math.random() * 10) + 1;
           },
           greetings() {
               console.log('ho cliccato sul bottone')
               this.message = 'nuovo messaggio';
               this.friends.push(this.generateRandom(1, 100))
               console.log(this.friends)
           } */

    },
}).mount('#app')
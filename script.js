'use strict';

class Clock {
    constructor({div,deadline,styleCount} = obj) {
        this.div = document.querySelector(div);
        this.deadline = deadline;
        this.styleCount = styleCount;
        this.res = document.querySelector(div);
        this.Complect01 = [
            'free-png.ru-158.png',
            'free-png.ru-157-700x700.png',
            'free-png.ru-156-700x700.png' ,
            'free-png.ru-155.png' ,
            'free-png.ru-154-700x700.png' ,
            'free-png.ru-152-700x700.png' ,
            'free-png.ru-151-700x700.png',
            'free-png.ru-150-700x700.png',
            'free-png.ru-149-700x700.png',
            'free-png.ru-148-700x700.png'
        ];
        this.Complect02 = [
            'free-png.ru-66-700x700.png',
            'free-png.ru-683x700.png',
            'free-png.ru-1-683x700.png' ,
            'free-png.ru-2-683x700.png' ,
            'free-png.ru-3-683x700.png' ,
            'free-png.ru-4-683x700.png' ,
            'free-png.ru-5-683x700.png',
            'free-png.ru-6-683x700.png',
            'free-png.ru-7-683x700.png',
            'free-png.ru-8-683x700.png'
        ];
        this.second = this.div.querySelector('.seconds');
        this.minute = this.div.querySelector('.minutes');
        this.hour = this.div.querySelector('.hours');
        }
            hourTime(){
                let d = new Date();
                    // let hour = d.getHours();
                    // let minute = d.getMinutes();
                    // let second = d.getSeconds();

                    const dead = new Date(this.deadline);

                    let differ = dead - d;
                    let deadhour = differ > 0 ? Math.floor(differ / 1000 / 60 / 60 / 24) : 0;
                    let deadminute = differ > 0 ? Math.floor(differ / 1000 / 60 / 60) : 0;
                    let deadsecond = differ > 0 ? Math.floor(differ / 1000 % 60) : 0;

                    // let deadhour = Math.floor(differ / 1000 / 60 /60)  % 24;
                    // let deadminute = Math.floor(differ / 1000 / 60) % 60;
                    // let deadsecond = Math.floor(differ / 1000)  % 60;      

                    // if (diff>0) {
                    //     const days = Math.floor(diff / 1000 / 60 / 60 / 24);
                    // } else {
                    //     const days = 0;
                    // }

                    // this.res = `${this.formateZero(deadhour)}:${this.formateZero(deadminute)}:${this.formateZero(deadsecond)}`;
                    // this.div.textContent = this.res;

                this.formateZero(deadsecond , this.second);
                this.formateZero(deadminute , this.minute);
                this.formateZero(deadhour , this.hour);
                // this.formateZero(deadsecond , this.second);
                setTimeout(this.hourTime.bind(this), 1000);
            }

            formateZero(c,place){
               console.log(c);
                if(c < 10) {
                    let g = document.createElement('img');
                    if (this.styleCount == 1)
                        g.setAttribute('src', 'Complect01' + '/'+this.Complect01[0]);
                    else {
                        g.setAttribute('src', 'Complect02' + '/'+this.Complect02[0]);
                    }
                    let g1 = document.createElement('img');

                    if (this.styleCount == 1)
                        g1.setAttribute('src', 'Complect01' + '/'+this.Complect01[c]);
                    else {
                        g1.setAttribute('src', 'Complect02' + '/'+this.Complect02[c]);
                    }
                     
                    place.innerHTML = '';
                    place.append(g);
                    place.append(g1);
                } else {
                    // let g = document.createElement('img');
                    // g.setAttribute('src', this.styleCount + '/' +this.styleCount[Math.floor(c/10)]);
                    // let g1 = document.createElement('img');
                    // g1.setAttribute('src', this.styleCount + '/' +this.styleCount[c % 10]);
                    let g = document.createElement('img');
                    if (this.styleCount == 1)
                        g.setAttribute('src', 'Complect01' + '/'+this.Complect01[Math.floor(c/10)]);
                    else {
                        g.setAttribute('src', 'Complect02' + '/'+this.Complect02[Math.floor(c/10)]);
                    }
                    let g1 = document.createElement('img');

                    if (this.styleCount == 1)
                        g1.setAttribute('src', 'Complect01' + '/'+this.Complect01[c % 10]);
                    else {
                        g1.setAttribute('src', 'Complect02' + '/'+this.Complect02[c % 10]);
                    }
                    place.innerHTML = '';
                    place.append(g);
                    place.append(g1);
                }
            }

            
    init() {
        console.dir(this);
        this.hourTime();
    }

}

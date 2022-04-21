'use strict';

class Clock {
    constructor({div} = obj) {
        this.div = document.querySelector(div);
        this.res;
        }
            hourTime(){
                let d = new Date();
                    let hour = d.getHours();
                    let minute = d.getMinutes();
                    let second = d.getSeconds();

                    const dead = new Date('Apr 21 2022 12:00:00');

                    let differ = dead - d;

                    let deadhour = Math.floor(differ / 1000 / 60 /60) % 24;
                    let deadminute = Math.floor(differ / 1000 / 60) % 60;
                    let deadsecond = Math.floor(differ / 1000 ) % 60;
                    // console.log(deadhour);
                    // console.log(deadminute);
                    // console.log(deadsecond);

                this.res = `Осталось: ${this.formateZero(deadhour)}:${this.formateZero(deadminute)}:${this.formateZero(deadsecond)}`;
                
                this.div.textContent = this.res;

                setInterval(this.hourTime.bind(this), 1000);
            }

            formateZero(c){
                if(c < 10) {
                return '0' + c;
                } else {
                return c;
                }
            }

            // inversion()
    
    init() {
        console.dir(this);
        this.hourTime();
    }

}

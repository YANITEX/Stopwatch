const result = document.getElementById("time");
let isrunnig = false
class temp {
    id ;
   constructor()
   {
    this.hours = 0;
    this.minuts = 0;
    this.secend = 0;
    this.milisecend = 0; 
   }
}
const time = new temp() ;







function increment (){

        time.milisecend+= 1;
        if(time.milisecend>=100){
            time.secend++ ;
            time.milisecend -= 100 ;
        }
        if (time.secend>=60) {
            time.minuts++ ;
            time.secend -= 60 ;
        }
        if (time.minuts>=60) {
            time.hours++ ;
            time.minuts -= 60 ;
        }

        result.textContent = `${time.hours.toString().padStart(2,0)} : ${time.minuts.toString().padStart(2,0)} : ${time.secend.toString().padStart(2,0)} : ${time.milisecend.toString().padStart(2,0)}`;
        isrunnig = true ; 

}

function reset() {
    stop();
    time.hours = 0;
    time.minuts = 0;
    time.secend = 0;
    time.milisecend = 0;
    result.textContent = `${time.hours.toString().padStart(2,0)} : ${time.minuts.toString().padStart(2,0)} : ${time.secend.toString().padStart(2,0)} : ${time.milisecend.toString().padStart(2,0)}`;
    
}

function start() {
    if (!isrunnig) {
        let idd =  setInterval(increment,10);
        time.id = idd ;
        isrunnig = true ;
    }
    
    
}

function stop () {
    isrunnig = false ;
    clearInterval(time.id) ;
}


   

 



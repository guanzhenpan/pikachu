import string from './css.js'
let n=1
 demo.innerText =string.substr(0,n)
 demo2.innerHTML =string.substr(0,n)

let time=100
const play =() =>{
    return setInterval(run,time)
}
const pause =() =>{
    window.clearInterval(id)
}

const run=() =>{
    n+=1
    if(n> string.length){
        window.clearInterval(id)
        return
    }
    demo.innerText =string.substr(0,n)
    demo2.innerHTML =string.substr(0,n)
    demo.scrollTop =demo.scrollHeight
}

let  id= play()

btnPause.onclick =() =>{
    pause()

}
btnPlay.onclick =() =>{
    id=setInterval(run,time)
}
btnSlow.onclick =() =>{
    pause()
    time=300
    id=setInterval(run,time)
}
btnSlow.onclick =() =>{
    pause()
        time=100
        id=setInterval(run,time)
    }
btnFast.onclick =() =>{
    pause()
        time=0
        id=setInterval(run,time)
    }
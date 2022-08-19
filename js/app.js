


//function for random pin

const randomPin = ()=>{
    const  pin = Math.round(Math.random() * 10000);
    const  pinStr = pin+'' 

    if (pinStr.length === 4) {
        return pin
    }else{
        
        return randomPin()
    }
    
    
}

// set pin number in input fileld

document.getElementById('genarate').addEventListener('click',()=>{

    const pin = randomPin()

   document.getElementById('display-pin').value = pin
})
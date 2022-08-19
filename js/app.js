


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
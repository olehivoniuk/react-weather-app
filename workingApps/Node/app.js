let count = 1; 

setInterval(function() {
    let date = new Date()
    if(date){
        console.log(count++);
    }
	
}, 1000);
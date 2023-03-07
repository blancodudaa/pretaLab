for(let j = 2; j <= 400; j++){
    let primo = true;
    for (let i = 2; i<j; i++) {
        if(j%i ===0){
            primo = false
        }
    }
    if (primo ===true){
        console.log(j)
    }
}
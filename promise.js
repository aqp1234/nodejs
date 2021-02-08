function getData(){
    return new Promise((res, rej) =>{
        let data = 100;
        res(data);
    });
};

getData()
    .then((fd) => {
    console.log(fd);
    })
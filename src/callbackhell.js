var x, y, i, n, a, b, l,e,t;
    
function first(q){
    x = +prompt('введите число')
    q();
}
function second(a,k,c){
    i=(a+k);
    console.log(i);
    y = +prompt('введите число');
    c();
    setTimeout(function(){console.log('где я?! какой сегодня год? почему я последний?!..')}, 4000);
}
function third(d){
    b = +prompt('введите число');
    d();
}
function fourth(r){
    l= +prompt('введите число');
    r();
    setTimeout(function(){console.log('почему я не последний?!..что происходит?!')}, 2000);
}
function fifth(j){
    e = +prompt('введите число');
    j();
}

first(()=>{
    second(x, 6, ()=>{ 
        n=(y+i);
        console.log(n);
        third(()=>{
            a=(b+n);
            console.log(a);
            fourth(()=>{
                b=(a+l);
                console.log(b);
                fifth(()=>{
                    t = (b+e);
                    console.log(t);
                    console.log('калбекхел - возможность создания асинхронного в синхронном. Используется\использовалось для создания асинхронного выполнения кода')
                })
            })
        });
    });
});



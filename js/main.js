// address form

const addressbtn = document.querySelector('#address-form');
const addressclose = document.querySelector('#address-close');

addressbtn.addEventListener('click', function(){
    document.querySelector('.address-form').style.display = 'inline-block';
});


addressclose.addEventListener('click', function(){
    document.querySelector('.address-form').style.display = 'none';
});


// container

var i = document.querySelectorAll('#item');

// console.log("index là: ",i);

//  Ẩn tất cả img có index = 2 trở lên

for(var j = 2; j < i.length; j++){
    Object.assign(i[j].style,{
        display: 'none',
    })
}

var start = 1;

// Lấy ra phần tử tiếp theo

var btn_right = document.querySelector('.btn-right');

btn_right.onclick = function(PointerMouse){
    // console.log(PointerMouse.target);
    start += 1;
    if(start == 2){
        // nếu start = 2 thì item 0 và 1 bị ẩn
        Object.assign(i[0].style,{
            display:'none',
        })
        
        Object.assign(i[1].style,{
            display:'none',
        })
        // hiện phần tử có index = 2 và 3
        Object.assign(i[2].style,{
            display:'block',
        })
        Object.assign(i[3].style,{
            display:'block',
        })
    }
    else if(start == 3){
        // nếu start = 3 thì item 2 và 3 ẩn
        Object.assign(i[2].style,{
            display:'none',
        })

        Object.assign(i[3].style,{
            display:'none',
        })
        // hiện phần tử có index = 4 và 5
        Object.assign(i[4].style,{
            display:'block',
        })
        Object.assign(i[5].style,{
            display:'block',
        })
    }
    else if(start == 4){
            // nếu start = 4 thì item 4 và 5 ẩn
            Object.assign(i[4].style,{
                display:'none',
            })
    
            Object.assign(i[5].style,{
                display:'none',
            })
            // hiện phần tử có index = 6 và 7
            Object.assign(i[6].style,{
                display:'block',
            })
            Object.assign(i[7].style,{
                display:'block',
            })
    }
    else if(start == 5){
        // nếu start = 5 thì item 6 và 7 ẩn
        Object.assign(i[6].style,{
            display:'none',
        })

        Object.assign(i[7].style,{
            display:'none',
        })
        // hiện phần tử có index = 0 và 1
        Object.assign(i[0].style,{
            display:'block',
        })
        Object.assign(i[1].style,{
            display:'block',
        })
    }
}

setInterval(function(){
    start += 1;
    if(start == 2){
        // nếu start = 2 thì item 0 và 1 bị ẩn
        Object.assign(i[0].style,{
            display:'none',
        })
        
        Object.assign(i[1].style,{
            display:'none',
        })
        // hiện phần tử có index = 2 và 3
        Object.assign(i[2].style,{
            display:'block',
        })
        Object.assign(i[3].style,{
            display:'block',
        })
    }
    else if(start == 3){
        // nếu start = 3 thì item 2 và 3 ẩn
        Object.assign(i[2].style,{
            display:'none',
        })

        Object.assign(i[3].style,{
            display:'none',
        })
        // hiện phần tử có index = 4 và 5
        Object.assign(i[4].style,{
            display:'block',
        })
        Object.assign(i[5].style,{
            display:'block',
        })
    }
    else if(start == 4){
            // nếu start = 4 thì item 4 và 5 ẩn
            Object.assign(i[4].style,{
                display:'none',
            })
    
            Object.assign(i[5].style,{
                display:'none',
            })
            // hiện phần tử có index = 6 và 7
            Object.assign(i[6].style,{
                display:'block',
            })
            Object.assign(i[7].style,{
                display:'block',
            })
    }
    else if(start == 5){
        // nếu start = 5 thì item 6 và 7 ẩn
        Object.assign(i[6].style,{
            display:'none',
        })

        Object.assign(i[7].style,{
            display:'none',
        })
        // hiện phần tử có index = 0 và 1
        Object.assign(i[0].style,{
            display:'block',
        })
        Object.assign(i[1].style,{
            display:'block',
        })
        start = 1;
    }
},2000);

// Lấy ra phần tử trở về
var btn_left = document.querySelector('.btn-left');

btn_left.onclick = function(PointerMouse){
    start -= 1;
    if(start <= 0){
        start = 4;
        // Nếu start = 4 hoặc start bé hơn hoặc bằng 0 thì item 0 và 1 bị ẩn
        Object.assign(i[0],style,{
            display: 'none',
        })

        Object.assign(i[1].style,{
            display: 'none',
        })
        // Hiện item 6 và 7
        Object.assign(i[6],style,{
            display: 'block',
        })

        Object.assign(i[7].style,{
            display: 'block',
        })
    }
    else if(start == 3){
        // Nếu start = 3 thì item 6 và 7 bị ẩn
        Object.assign(i[6],style,{
            display: 'none',
        })

        Object.assign(i[7].style,{
            display: 'none',
        })
        // Hiện item 4 và 5
        Object.assign(i[4],style,{
            display: 'block',
        })

        Object.assign(i[5].style,{
            display: 'block',
        })
    }
    else if(start == 2){
        // Nếu start == 2 thì item 4 và 5 bị ẩn
        Object.assign(i[4],style,{
            display: 'none',
        })

        Object.assign(i[5].style,{
            display: 'none',
        })
        // Hiện item 2 và 3
        Object.assign(i[2],style,{
            display: 'block',
        })

        Object.assign(i[3].style,{
            display: 'block',
        })
    }
    else if(start == 1){
        // Nếu start == 1 thì item 2 và 3 bị ẩn
        Object.assign(i[2],style,{
            display: 'none',
        })

        Object.assign(i[3].style,{
            display: 'none',
        })
        // Hiện item 0 và 1
        Object.assign(i[0],style,{
            display: 'block',
        })

        Object.assign(i[1].style,{
            display: 'block',
        })
    }
}

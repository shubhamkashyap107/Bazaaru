let btns = document.querySelectorAll('.remove-item');
console.log(btns);

async function fun(id){
    try {
        let response = axios({
            method: 'post',
            url: `/user/${id}/remove`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
          });
    
          console.log(response);
          window.location.reload(true) 
    } catch (error) {
        window.location.replace('/products');
    }
    
}

for(let item of btns)
{
    item.addEventListener('click', () => {
        console.log("event laga")
        let prodID = item.getAttribute('productID');
        fun(prodID);
    })
}




let addBts = document.querySelectorAll('.add-item');


async function fun2(id){
    try {
        let response = axios({
            method: 'post',
            url: `/user/${id}/add`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
          });
    
          console.log(response);
          window.location.reload(true) 
    } catch (error) {
        window.location.replace('/products');
    }
    
}

for(let item of addBts)
{
    item.addEventListener('click', () => {
        console.log("event laga")
        let prodID = item.getAttribute('productID');
        fun2(prodID);
    })
}


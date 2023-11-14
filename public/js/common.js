let allBtns = document.querySelectorAll('.fa-heart');
console.log(allBtns)


async function fn(productID, btn){
    
    try {
        let response = await axios({
            method: 'post',
            url: `/products/${productID}/like`,
            headers: {'X-Requested-With': 'XMLHttpRequest'},
          });
    
          if(btn.classList.contains('fa-solid'))
          {
            btn.classList.remove('fa-solid')
            btn.classList.add('fa-regular')
            btn.setAttribute('style', "color: #000000; position: relative; left: 3em; bottom: 1rem; cursor: pointer;")
          }
          else
          {
            btn.classList.remove('fa-regular')
            btn.classList.add('fa-solid')
            btn.setAttribute('style', "color: #ff0000; position: relative; left: 3em; bottom: 1rem; cursor: pointer;")
          }
    } catch (error) {
        window.location.replace('/login');
    }
}


for(let item of allBtns)
{
    item.addEventListener('click', () => {
        id = item.getAttribute('productID');
        fn(id, item);
    })
}


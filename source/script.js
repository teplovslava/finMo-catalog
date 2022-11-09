document.addEventListener("DOMContentLoaded",function(){
    const list = document.querySelectorAll('.questions-list li')
    
    
    list.forEach(item=>{
        item.classList.remove('active')
        item.addEventListener('click',function(){
                list.forEach(li=>li.classList.remove('active'))
                item.classList.add('active')
    })}
        
    )
    
})
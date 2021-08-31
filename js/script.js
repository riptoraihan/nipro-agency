// searchButton
const checkBox = document.querySelector('input[name=checkbox]');
checkBox.addEventListener('change' , function(){
    if (this.checked) {
       let checkedSearch = document.getElementById('search-box').style.display = 'block' ;
       
        
    }else{
        document.getElementById('search-box').style.display = 'none' ;
    }
});

// gallery
var mixer = mixitup('.gallery');

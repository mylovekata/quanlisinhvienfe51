

var renderTitleH1 = function(title){
    var tagBOdy = document.querySelector('body');
    tagBOdy.innerHTML = `<h1>${title}</h1>`
}




var main = function(callback){
   
    callback('Bửu');
}

main(renderTitleH1);
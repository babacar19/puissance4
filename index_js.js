window.onload = function()
{
    var conteneur = document.getElementById('beginning');
    var canvas = document.createElement('canvas');
    
    init();

    function init(){
        var canvasWidth = 600;
        var canvasHeigth = 600;
        canvas.width = canvasWidth;
        canvas.height = canvasHeigth;
        
        conteneur.style.textAlign = 'center';
        canvas.style.border = "1px solid black";
        conteneur.appendChild(canvas);
        
        var ctx = canvas.getContext('2d');
        canvas.style.border ='50px solid gray';
        canvas.style.textAlign = 'center';
        canvas.style.backgroundColor = 'blue';

        drawCircles();
    }


    function drawCircles(blocksize,blockNumber){
        

    }


    

}
window.onload = function()
{
    var conteneur = document.getElementById('beginning');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var  heigthNumber = 6, widthNumber = 7;

    ctx.beginPath();

    init();

    function init(){
        var canvasWidth = 700;
        var canvasHeigth = 600;
        var blocksize = 100;
        
        canvas.width = canvasWidth;
        canvas.height = canvasHeigth;
        
        conteneur.style.textAlign = 'center';
        canvas.style.border = "1px solid black";
        conteneur.appendChild(canvas);
        
        
        canvas.style.border ='50px solid gray';
        canvas.style.textAlign = 'center';
        canvas.style.backgroundColor = 'blue';

        
        initCircles(blocksize);
    }

    
    function drawCircle(blocksize,abciss,ordinate){
        
        ctx.save();
        var radius = 0.25 * blocksize;
        ctx.fillStyle = 'white';
        ctx.arc(abciss * blocksize + radius , ordinate * blocksize + radius, radius,0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
        
        
    }

    function initCircles(blocksize){
        
        for( var i = 0; i < widthNumber; i++)
        {
            ctx.fillStyle = 'blue';
            for(var j = 0; j < heigthNumber; j ++ )
                drawCircle(blocksize,i,j);
        }

    }


    

}

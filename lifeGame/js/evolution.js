function Sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

Evolution = async function(matEnv, canvas, iteMax)
{
	var ctx = canvas.getContext('2d');
	var ite = 0;
	while(ite != iteMax)
	{
		await Sleep(350);
		ite+=1;
		var matTemp = new Array();
		matTemp.length = 100;
		for (var i=0; i<matTemp.length; i++) 
		{
			matTemp[i] = new Array();
			matTemp[i].length = 100;
			for (var j=0; j<matTemp[i].length; j++) 
			{
				matTemp[i][j] = matEnv[i][j];
			}
		}
		
		for (var i=0; i<matEnv.length; i++) 
		{
			for (var j=0; j<matEnv[i].length; j++) 
			{
				var nbNeighbours = 0;
				if(j < matEnv[i].length-1 && matEnv[i][j+1] == 1)
				{
					nbNeighbours+=1;
				}
				if(j > 0 && matEnv[i][j-1] == 1)
				{
					nbNeighbours+=1;
				}
				if(i < matEnv.length-1 && matEnv[i+1][j] == 1)
				{
					nbNeighbours+=1;
				}
				if(i > 0 && matEnv[i-1][j] == 1)
				{
					nbNeighbours+=1;
				}
				if(j < matEnv[i].length-1 && i < matEnv.length-1 && matEnv[i+1][j+1] == 1)
				{
					nbNeighbours+=1;
				}
				if(j < matEnv[i].length-1 && i >0 && matEnv[i-1][j+1] == 1)
				{
					nbNeighbours+=1;
				}
				if(j > 0 && i < matEnv.length-1 && matEnv[i+1][j-1] == 1)
				{
					nbNeighbours+=1;
				}
				if(j > 0 && i > 0 && matEnv[i-1][j-1] == 1)
				{
					nbNeighbours+=1;
				}
				
				
				if((nbNeighbours <2 || nbNeighbours > 3) && matEnv[i][j] == 1)
				{
					matTemp[i][j] = 0;
				}
				else if(nbNeighbours ==3 && matEnv[i][j]==0)
				{
					matTemp[i][j] = 1;

				}
			}
		}
		for (var i=0; i<matEnv.length; i++) 
		{
			for (var j=0; j<matEnv[i].length; j++) 
			{
				if(matTemp[i][j] != matEnv[i][j])
				{
					if(matTemp[i][j] == 0)
					{
						matEnv[i][j] = 0;
						ctx.fillStyle = 'white';
						ctx.fillRect(i*4, j*4, 3,3);
					}
					else if(matTemp[i][j] == 1)
					{
						matEnv[i][j] = 1;
						ctx.fillStyle = 'black';
						ctx.fillRect(i*4, j*4, 3,3);
					}

				}
			}
		}
	}
};


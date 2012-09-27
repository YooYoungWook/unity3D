#pragma strict

function OnGUI () 
{      
    var startButton = GUI.Button(Rect(350,350,150,50), "Start");
    var quitButton = GUI.Button(Rect(500,350,150,50), "Quit");
    
    
    if(startButton)
	{
		gameManager.state = STATE.START;
		Application.LoadLevel("scene1");
	}
	else if(quitButton)
	{
		Application.Quit();
	}
	
}
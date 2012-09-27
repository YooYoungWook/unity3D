#pragma strict

var ddong : Transform;
var ddongCount : int ;

var stage : int;
private var previousTime : float;
var duration : float;

enum STATE {WAIT, START};
static var state : STATE = STATE.WAIT;

function Update ()
{	
	switch(state)
	{
		case STATE.START:
			makeDdong();		
		break;
	}
			
}
static function gameOver()
{
	gameManager.state = STATE.WAIT;
	Application.LoadLevel("main");
}

function makeDdong()
{
	var ddongObj : Transform;
	var position : Vector3;
	
	var count  = stage * ddongCount;

	if(Time.time  - previousTime > duration)
	{
		previousTime = Time.time;	
	
		for(var i = 0; i < count; i++)
		{
			position.x = Random.Range(-4.7, 4.7);
			position.y = Random.Range(10.0 , 15.0);
			position.z = Random.Range(-4.7, 4.7);
	
			ddongObj = Instantiate(ddong, position, Quaternion.identity);
		}
	}
}

function camaraOption()
{
	if(Input.GetKeyDown("F1"))
	{
	}
}
var rotSpeed = 200;

function Update ()
{
	var speed = 0;
	var front = Input.GetAxis("Vertical");
	var hor =  Input.GetAxis("Horizontal");
	
	
	if(front < 0)
	{
		speed = 1;
		animation.CrossFade("back");
	}
	else if(front > 0)
	{
		speed = 3;
		animation.CrossFade("run");
	}
	else
	{
		animation.CrossFade("idle");
	}
	
	var move = speed * Time.deltaTime;
	var rot = rotSpeed * Time.deltaTime;
	
	transform.Translate(Vector3.forward * front * move);
	transform.Rotate(Vector3(0, hor * rot, 0));
}
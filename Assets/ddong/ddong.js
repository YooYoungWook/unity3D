#pragma strict

var explosion : Transform;

function OnTriggerEnter(coll : Collider)
{
	if(coll.gameObject.tag == "plan")
	{
		Instantiate(explosion, gameObject.transform.position, Quaternion.identity);
		Destroy(gameObject);
		return;
	}
	else if(coll.gameObject.tag == "player")
	{
		gameManager.gameOver();
		Destroy(coll.gameObject);
		Destroy(gameObject);
	}
}


#pragma strict

var posx : float;
var posy : float; 
var posz : float;
var moveSpeed: int;
var aux : boolean;
var borboletario : boolean;
public static var totalBorboleta : int;

function Start () {
	moveSpeed = 5;
	transform.position = Vector3(posx, posy, posz);
	totalBorboleta = 0;
}

function Update () {
	 if(Input.GetMouseButton(0)){
    
    	if(aux == true){    	
    		var pos = Input.mousePosition;
    		pos.z = transform.position.z - Camera.main.transform.position.z;
    		pos = Camera.main.ScreenToWorldPoint(pos);
    		transform.position = Vector3.MoveTowards(transform.position, pos, moveSpeed*Time.deltaTime);
    	}
    	
    }

    else if (borboletario == true){
    	if(Input.GetMouseButtonUp(0)){
   		}
    }

    else if(Input.GetMouseButtonUp(0)){
      
    	transform.position = Vector3(posx, posy, posz);		
   } 

}

function OnTriggerEnter2D(other: Collider2D) {

	if(other.gameObject.tag == "Borboletario"){
		borboletario = true;
		totalBorboleta = totalBorboleta + 1;
		Destroy(gameObject);
		
	}
}

function OnTriggerExit2D(other: Collider2D){
	if(other.gameObject.tag == "Borboletario"){
		borboletario = false;
	}
}

function OnMouseDown () {
		
		aux = true;	
}

function OnMouseUp () {

		aux = false;
}
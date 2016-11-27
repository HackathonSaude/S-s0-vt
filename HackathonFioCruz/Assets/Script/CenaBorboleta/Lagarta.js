#pragma strict

var posx : float;
var posy : float; 
var posz : float;
var moveSpeed: int;
var aux : boolean;
var laboratorio : boolean;
public static var totalLagarta : int;

function Start () {
	moveSpeed = 5;
	transform.position = Vector3(posx, posy, posz);
	totalLagarta = 0;
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

    else if (laboratorio == true){
    	if(Input.GetMouseButtonUp(0)){
   		}
    }

    else if(Input.GetMouseButtonUp(0)){
      
    	transform.position = Vector3(posx, posy, posz);		
   } 
}

function OnTriggerEnter2D(other: Collider2D) {

	if(other.gameObject.tag == "Laboratorio"){
		laboratorio = true;
		totalLagarta = totalLagarta +1;
		Destroy(gameObject);
		
	}
}

function OnTriggerExit2D(other: Collider2D){
	if(other.gameObject.tag == "Laboratorio"){
		laboratorio = false;
	}
}

function OnMouseDown () {
		
		aux = true;	
}

function OnMouseUp () {

		aux = false;
}
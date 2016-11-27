#pragma strict

var posz : double; 
var posy : double; 
var posx : double;
var aux : boolean;

function Start () {
//	posz = -1; 
//	posy = -1.1;
//	posx = 1.6;
//	transform.position = Vector3(posx, posy, posz);
}

function Update () {

if(Input.GetMouseButton(0)){
		if(aux == true){
			SceneManagement.SceneManager.LoadScene("Introducao");
		}
	}
}

function OnMouseDown () {
		aux = true;	
}

function OnMouseUp () {
		aux = false;
}



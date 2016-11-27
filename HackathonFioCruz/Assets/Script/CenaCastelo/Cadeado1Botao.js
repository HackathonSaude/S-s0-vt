#pragma strict

var posz : double; 
var posy : double; 
var posx : double;
var aux : boolean;

function Start () {
	posz = 0; 
	posy = 1.64;
	posx = -4.41;
	transform.position = Vector3(posx, posy, posz);
}

function Update () {
if(Input.GetMouseButton(0)){
	if(aux == true){
		SceneManagement.SceneManager.LoadScene("Cadeado1");
	}
 }
}

function OnMouseDown () {
		aux = true;	
}

function OnMouseUp () {
		aux = false;
}
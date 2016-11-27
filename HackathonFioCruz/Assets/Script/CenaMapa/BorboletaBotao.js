#pragma strict

var posz : double; 
var posy : double; 
var posx : double;
var aux : boolean;

function Start () {
//	posz = -1; 
//	posy = -0.51;
//	posx = 4.09;
//	transform.position = Vector3(posx, posy, posz);
}

function Update () {
	if(Input.GetMouseButton(0)){
		if(aux == true){
			SceneManagement.SceneManager.LoadScene("IntroBorboleta");
		}
	}
}

function OnMouseDown () {
		aux = true;	
}

function OnMouseUp () {
		aux = false;
}
var posz : double; 
var posy : double; 
var posx : double;
var aux : boolean;

function Start () {
	posz = -1; 
	posy = 0.78;
	posx = -2.36;
	transform.position = Vector3(posx, posy, posz);

}

function Update () {
	if(Input.GetMouseButton(0)){
		SceneManagement.SceneManager.LoadScene("Mapa");
	}

}
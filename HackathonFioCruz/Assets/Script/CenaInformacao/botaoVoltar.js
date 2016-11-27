var posz : double; 
var posy : double; 
var posx : double;
var aux : boolean;

function Start () {
	posz = -1; 
	posy = -0.41;
	posx = 4.48;
	transform.position = Vector3(posx, posy, posz);

}

function Update () {
	if(Input.GetMouseButton(0)){
		SceneManagement.SceneManager.LoadScene("TelaInicial");
	}

}
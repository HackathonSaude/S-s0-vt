var posz : double; 
var posy : double; 
var posx : double;

function Start () {
	posz = -1; 
	posy = -0.41;
	posx = 4.48;
	transform.position = Vector3(posx, posy, posz);

}

function TelaInicial () {
	
	SceneManagement.SceneManager.LoadScene("TelaInicial");
}

function Jogar () {
	SceneManagement.SceneManager.LoadScene("Mapa");
}
#pragma strict

function Start () {

}

function Update () {

}

function OnGUI() {
	
	if (GUI.Button(Rect(350,550,50,50),"<<"))
			SceneManagement.SceneManager.LoadScene("Mapa");
	}

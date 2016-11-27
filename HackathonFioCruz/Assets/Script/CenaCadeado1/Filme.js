#pragma strict

var filme: MovieTexture;

function Start () {
transform.GetComponent.<Renderer>().material.mainTexture = filme;
filme.Play();
}

function Update () {
	 Wait(filme.duration);
}

function Wait(duration : float) { 
 
     yield WaitForSeconds(duration);
     SceneManagement.SceneManager.LoadScene("Vitral");
 }
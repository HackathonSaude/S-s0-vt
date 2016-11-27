#pragma strict
var posz : double; 
var posy : double; 
var posx : double;
var y : double; 
var x : double;
var guiStyle : GUIStyle; 

var tempo: float;
public static var timer : int;
var decsTempo: int; 
var aux : int;

function Start () {
	posz = 1; 
	posy = 0;
	posx = 0;
	transform.position = Vector3(posx, posy, posz);
	tempo = 0;
	decsTempo = 15;
	x =50;
	y =30;
}

function Update () {
	tempo += Time.deltaTime;
	timer = tempo;
	aux = decsTempo - timer; 

	if((Borboleta.totalBorboleta == 6) && (decsTempo > timer) && (Lagarta.totalLagarta == 7))
	{ 
		Debug.Log("Venceu");
	}
	else if ((decsTempo < timer) && (Borboleta.totalBorboleta < 6) && (Lagarta.totalLagarta < 7)) {
		SceneManagement.SceneManager.LoadScene("Mapa");
		Debug.Log("Perdeu");
	}

}

function OnGUI() 
{
//	GUI.color = Color.white;
//	guiStyle.fontSize = 30;
//	GUI.skin.label.fonSize = 30;
    var myStyle : GUIStyle = new GUIStyle();
    myStyle.fontSize = 50;
    GUI.color = Color.white;
	if (decsTempo > timer)
	{
		GUI.Label (Rect (x, y, 200, 200), "Tempo: " + aux, myStyle);
	}

//  var Label2:GUIStyle = new GUIStyle(GUI.skin.GetStyle("label"));
//     Label2.fontSize = 22;
//     Label2.normal.textColor = Color.yellow ;
//
//     function OnGUI() {
//    GUI.Label(Rect(10, 10, 140, 20), labelText);
//}


}
var url = "ws://localhost:8080/test"
var ws = new WebSocket(url);

ws.onopen = function()
{
	ws.send("Player Connect");
}

ws.onmessage = function(event)
{

	alert(event.data);
}
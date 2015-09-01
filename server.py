from tornado import websocket, web, ioloop, httpserver
import tornado

class WSHandler(tornado.websocket.WebSocketHandler):
	def check_origin(self,origin):
		return True

	def open(self):
		serverDict[self.request.remote_ip] = self
		#sendToAllButPlayer(self)

		print (serverDict)
		print('Client IP: ' + self.request.remote_ip)
		print("Websocket opened")

	def on_message(self,message):
		playerObject = json.loads(message)
		playerObject = json.dumps(playerObject)

		#sending the player object to the other players on the server!
		print(playerObject)
		sendToAllButPlayer(self, playerObject)	

def sendToAll():
	for key, value in serverDict.items():
		print(key)
		value.write_message(key)

def sendToAllButPlayer(self, player):
	for key, value in serverDict.items():
		if value != self:
			value.write_message(player)
			

app = tornado.web.Application([
	(r'/test', WSHandler),
	])

if __name__ == '__main__':
	app.listen(8080)
	tornado.ioloop.IOLoop.instance().start()
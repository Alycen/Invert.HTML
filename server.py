from tornado import websocket, web, ioloop, httpserver
import tornado

class WSHandler(tornado.websocket.WebSocketHandler):
	def check_origin(self,origin):
		return True

	def open(self):
		print("Websocket opened")

	def on_message(self,message):
		self.write_message("This message has been sent to the client!")

app = tornado.web.Application([
	(r'/test', WSHandler),
	])

if __name__ == '__main__':
	#what is 8080
	app.listen(8080)
	tornado.ioloop.IOLoop.instance().start()
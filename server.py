import http.server
import socketserver
import os
import time

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add timestamp to prevent caching
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Last-Modified', self.date_time_string(time.time()))
        self.send_header('Vary', '*')
        super().end_headers()

    def do_GET(self):
        # Add version parameter to JavaScript and CSS files
        if self.path.endswith(('.js', '.css')):
            self.send_response(200)
            self.send_header('Content-Type', 'application/javascript' if self.path.endswith('.js') else 'text/css')
            self.end_headers()
            with open(os.path.join(os.getcwd(), self.path.lstrip('/').split('?')[0]), 'rb') as f:
                self.wfile.write(f.read())
            return
        return super().do_GET()

def run(port=8000):
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    
    with socketserver.TCPServer(("", port), NoCacheHTTPRequestHandler) as httpd:
        print(f"Serving at port {port}")
        print(f"Open http://localhost:{port}")
        print("No caching enabled - changes will be immediate")
        httpd.serve_forever()

if __name__ == "__main__":
    run()

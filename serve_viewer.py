#!/usr/bin/env python3
"""
Simple HTTP server with proper MIME types for serving the documentation viewer.
"""
import http.server
import socketserver
import os
import sys
import mimetypes

PORT = 8080
DIRECTORY = "docs/viewer"

# Add custom MIME types
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('application/javascript', '.mjs')
mimetypes.add_type('application/json', '.json')

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Add CORS headers if needed
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    # Change to the script's directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Allow address reuse
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"========================================")
        print(f"Documentation Viewer Server")
        print(f"========================================")
        print(f"")
        print(f"Server running at: http://localhost:{PORT}")
        print(f"Serving directory: {DIRECTORY}")
        print(f"")
        print(f"Press Ctrl+C to stop the server")
        print(f"")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)

HTTP 1.1 VS HTTP 2
HTTP
	The HYPERTEXT TRANSFER PROTOCOL (http) is the foundation of the world wide web, and is used to load webpage using hypertext links. It is a method for encoding and transporting information between a client and a web server. HTTP is the primary protocol for transmission of information across the internet .
 
From the picture what we understand is that that http1.1 has 3 tcp connections and http 2 has a single TCP connection.


Http 1.1
•	In http 1.1 the 3 TCP connections are first it will send an html request and recieves a response and it will send an CSS request and receive a response and it will send an script.js and receives an response .
•	Http 1.1 uses text base commands to complete http requests 
•	It compress data by itself
Http 2
•	In http 2 the single connection will all the requests at once and will receive the response at once.
•	Http 2 uses binary to complete http requests
•	It has the advantages of multiplexing.
•	It compress data using HPACK.

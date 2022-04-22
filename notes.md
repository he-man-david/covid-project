

# Questions: 

How do we want to handle how we pass queries from the UI to the API? That is, what should the interface look like? 

Do we want to build queries at the server and send them to the API? 
Or do we want to pass a single object with properties. 

As well, the way that John Hopkins db is accessed is completly different than CDC. So, there need to be different interfaces. The question is, should we create a generic 'query' object that is sent to the api, and then that object is parsed based on the type of query?

# TikalBackendExercise

In order to build use "npm i" 

To run the program use "npm start"

The default port is 3000

In order to send message use post request  "http://localhost:3000/send"
Input for example : 
{
    "sender": "Alice",
    "recipient": "Bob",
    "message": "Hello"
}

In order to receive message use get request  "http://localhost:3000/receive"
Input for example:
{
    "recipient": "Bob"
}

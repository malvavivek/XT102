export default class webSocketClient{
    constructor(){
        this.ws=new webSocketClient('ws://localhost:8080')
    }
    connect(){
        document.querySelector('form').addEventListener('submit',()=>{
            let name=document.querySelector('#name').value;
            let message =document.querySelector('#message').value;
            this.ws.send(JSON.stringify({name:name,message:message}));
            return false;
        });
        this.ws.onmessage=(e)=>{
            let li=document.createElement('li')
            li.appendChild(document.createTextNode(e.data))
            document.querySelector('#messages').appendChild(li);
        }
        this.ws.onerror=(e)=>{
            let li=document.createElement('li')
            let span=document.createElement('span')
            span.appendChild('Error '+e.data);
            li.appendChild(span)
            document.querySelector('#messages')
        }
    }
}
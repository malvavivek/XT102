var txtPostName = document.getElementById('txtpostName');
var txtPostMsg = document.getElementById('txtpostMsg');
var btnNewPostMsg = document.getElementById('btnNewpostMsg');

function updatePostbox(PostPost) {
    var PostData = '<p><b>' + PostPost.Post;
    PostData += '</b> said: ' + PostPost.message;
    PostData += ' - <small>' + PostPost.date + '</small><p>';

    // inject into HTML list element
    var currentPostbox = document.getElementById('postbox').innerHTML;
    document.getElementById('postbox').innerHTML = currentPostbox + PostData;
    for(var i=0;i<10000;i++)
    {
        document.body.appendChild(document.createElement('div'));
    }
    var ref=[];
    ref.push(new Array(100000).join('x'))
}

// new Postbox entry

btnNewPostMsg.addEventListener('click',postbox=>{
    var Post = txtPostName.value;
    var msg = txtPostMsg.value;
    var now = new Date();
    var PostPost = {
        Post: Post,
        message: msg,
        date: now.toUTCString()
    };

    // update posts
    updatePostbox(PostPost);

    // clear textbox
    document.getElementById('txtpostName').value = '';
    document.getElementById('txtpostMsg').value = '';
    //console.clear();
});
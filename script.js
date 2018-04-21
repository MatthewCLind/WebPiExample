function send_message()
{
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var data = {};
    data["name"] = name;
    data["message"] = message;
    data = JSON.stringify(data);
    post_data(data);
}

function post_data(data)
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var s = document.getElementById('msg');
            s.innerHTML = '<h1>SUCCESS</h1>';
        }
    };
    xhttp.open("POST", "save_new_message.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);
}

function retrieve_message()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var s = document.getElementById('msg');
            var message = JSON.parse(this.responseText);
            s.innerHTML = 'Sender: ' + message["name"] + "<br>" + '<u>Message</u><br>' + message['message'];
        }
    };
    xhttp.open("GET", "retrieve_last_message.php", true);
    xhttp.send();
}
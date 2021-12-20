const startNumber = 0;
const endNumber = 0;

// Seconds
const time = 0;

const token = "";

const channel_id = "";

const channel_url = `https://discord.com/api/v8/channels/${channel_id}/messages`

sendMessage = (counter) => {
    request = new XMLHttpRequest();
    request.open("POST", channel_url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', token);
    request.send(JSON.stringify({ content: counter }));
}

start = (counter) => {
  if(counter < endNumber){
    setTimeout(()=> {
      counter++;
      const log = document.getElementsByClassName("markup-2BOw-j messageContent-2qWWxC");
      const lastChat = parseInt(log[log.length-1].innerText.trim());
      if (!isNaN(lastChat)) {
          sendMessage(counter = lastChat + 1);
      } else {
          sendMessage(counter);
      }
      start(counter);
    }, time * 1000);
  }
}

start(startNumber);
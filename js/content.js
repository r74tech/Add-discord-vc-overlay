chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  setvco(msg.send["serverId"], msg.send["channelId"])
});
function setvco(serverId, channelId) {
  if(document.getElementById("vco") != null){
    document.getElementById('vco').remove();
  }
  let iframe = document.createElement("iframe");
  iframe.src = `https://streamkit.discord.com/overlay/voice/${serverId}/${channelId}`;
  iframe.id = "vco"
  iframe.setAttribute("frameBorder", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.style.position = "fixed";
  iframe.style.bottom = "0px";
  iframe.style.left = "0px";
  let element = document.querySelector("body");
  element.appendChild(iframe);
};

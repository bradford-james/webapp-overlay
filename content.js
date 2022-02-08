// TODO - Auto-size to window
// TODO - Read URL or title to get right overlay
// TODO - create HTML template, headers and content

var overlayStyle = document.createElement("style");
overlayStyle.innerHTML =
    `.bradford-james-overlay{
        position: fixed;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 100;
        cursor: pointer;
    }`;

var overlayContentsContainerStyle = document.createElement("style");
overlayContentsContainerStyle.innerHTML =
    `.bradford-james-overlay-container-content{
        color: white;
        width: 1000px;
        height: 600px;
        margin: auto;
        margin-top: 100px;
        padding: 60px;
        border: 1px solid #333;
        border-radius: 8px;
        background-color: rgba(0,0,0,0.6);
        box-shadow: rgba(0,0,0,0.6) 0px 3px 8px;
    }`

var overlay = document.createElement("div");
overlay.classList.add('bradford-james-overlay');
overlay.onclick = function() {
    overlay.remove();
    overlayStyle.remove();
    overlayContentsContainerStyle.remove();
};

var overlayContentContainer = document.createElement("div");
overlayContentContainer.classList.add('bradford-james-overlay-container-content')

var overlayContent = document.createElement("div");
overlayContent.classList.add('bradford-james-overlay-content');
overlayContent.innerHTML = "test";

document.body.appendChild(overlayStyle);
document.body.appendChild(overlay);
document.body.appendChild(overlayContentsContainerStyle);
overlayContentContainer.appendChild(overlayContent);
overlay.appendChild(overlayContentContainer);

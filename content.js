// TODO - Auto-size to window
// TODO - Read URL or title to get right overlay
// TODO - create HTML template, headers and content

if (!document.querySelector('#bjwa-main')) {

    var overlay = document.createElement('div')
    overlay.setAttribute('id', 'bjwa-main')
    overlay.onclick = () => {
        overlay.remove()
        overlayStyleSheet.remove()
    }

    var overlayContentContainer = document.createElement('div')
    overlayContentContainer.setAttribute('id', 'bjwa-container-content')

    var overlayStyleSheet = document.createElement('style')
    overlayStyleSheet.setAttribute('id', 'bjwa-overlay-ss')
    var overlaySSContent =
        `#bjwa-main{
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
        }
        #bjwa-container-content{
            color: white;
            width: 1000px;
            height: 600px;
            margin: auto;
            margin-top: 100px;
            padding: 60px;
            border: 1px solid #333;
            border-radius: 8px;
            background-color: rgba(0,0,0,0.8);
            box-shadow: rgba(0,0,0,0.8) 0px 3px 8px;
        }`
    overlayStyleSheet.innerHTML = overlaySSContent


    /* ------------------ */
    /* ------------------ */


    var snowflakeContent = {
        title: 'Snowflake',
        hotkeys: new Map([
            ["CMD + Click", "multiple arrows"],
            ["OPT + Click&Drag", "move highlighted rows"],
            ["CTL + UP", "show results"],
            ["CTL + DOWN", "show queries"],
            ["CTL + CMD", "open new worksheet"],
            ["CMD + Shift", "auto-format"]
        ]),
    }

    var defaultContent = {
        title: 'Not Registered',
        hotkeys: new Map([])
    }

    var getProfile = hostName => {
        switch (true) {
            case /snowflake/gi.test(hostName):
                return snowflakeContent
            default:
                return defaultContent
        }
    }


    /* ------------------ */
    /* ------------------ */


    var getContentRender = profile => {
        const { title, hotkeys } = profile

        const hkRender = ( hotkeys.size > 0 ) 
            ? getHotkeysRender(hotkeys) 
            : ''

        const mainRender =
            `<div style="font-size: 20px; font-weight: bold;">${title}</div>
            <div style="border-bottom: 1px solid #bbb; margin-top: 3px; margin-bottom: 16px;"></div>
            <div>
                ${hkRender}
            </div>
            <div></div>`
        
        return mainRender
    }

    var getHotkeysRender = hotkeys => {
        const render = []
        for (const [hk, desc] of hotkeys) {
            render.push(
                `<div style="display:flex; margin: 3px 0; font-size: 12px;">
                    <div style="color: orange;">${hk}</div>
                    <div style="width: 30px; text-align: center; color: lightblue;"> --> </div>
                    <div style="font-style: italic;">${desc}</div>
                </div>`
            )
        }
        return render.join('')
    }


    /* ------------------ */
    /* ------------------ */


    var hostName = new URL(window.location.href).hostname
    var profile = getProfile(hostName)
    var contentRender = getContentRender(profile)
            
    var overlayContent = document.createElement('div')
    overlayContent.setAttribute('id', 'bjwa-content')
    overlayContent.innerHTML = contentRender


    document.body.appendChild(overlayStyleSheet)
    document.body.appendChild(overlay)
    overlay.appendChild(overlayContentContainer)
    overlayContentContainer.appendChild(overlayContent)
}

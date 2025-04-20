// makeInterface.js

function makeInterface(whichArray)
{
    let theTitle = ce("a");
    theTitle.textContent = "CATopalian JavaScript Background Check Navigator";
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Background_Check_Navigator';
    theTitle.style.position = 'absolute';
    theTitle.style.right = 8 + 'px';
    theTitle.style.top = 2 + 'px';
    theTitle.style.fontSize = 17 + 'px';
    ba(theTitle);

    //-//

    ba(ce('br'));

    //-//

    let mainDiv = ce("div");
    mainDiv.style.width = '900px';
    mainDiv.className = "gridContainerStyle";
    ba(mainDiv);

    //----//

    for (let x = 0; x < whichArray.length; x++)
    {
        let subDiv = ce("div");
        mainDiv.append(subDiv);

        //-//

        let theFrame = ce("iframe");
        theFrame.className = "gridItemStyle";
        theFrame.src = whichArray[x].url;
        theFrame.onmouseover = function()
        {
            hoverSound();
        };
        subDiv.append(theFrame);

        //-//

        let nameOfPerson = ce("div");
        nameOfPerson.className = "nameOfPersonStyle";
        nameOfPerson.innerHTML = whichArray[x].name;
        subDiv.append(nameOfPerson);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting


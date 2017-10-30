if (!jQuery) 
{
    throw new Error("Loader requires jQuery"); 
}

class Loader 
{
    constructor() { }
    
    static Make(makeSettings)
    {
        function setText(textContainer, text, position)
        {
            textContainer.text(text);
            switch (position)
            {
                case "top":
                    textContainer.css({
                        "padding-bottom": "5px"
                    });
                    break;
                case "right":
                    textContainer.css({
                        "display": "inline-block",
                        "vertical-align": "middle",
                        "padding-left": "5px"
                    });
                    break;
            }
        }
        function handleWithText(mainContainer, loader, textContainer, text, textPosition)
        {
            setText(textContainer, text, textPosition);

            switch (textPosition)
            {
                case "top":
                    mainContainer.css("text-align", "center");
                    mainContainer.css("padding", "2px 5px");
                    mainContainer.append(textContainer);
                    mainContainer.append(loader);
                    break;
                case "right":
                    mainContainer.css("padding", "5px 2px");
                    mainContainer.append(loader);
                    mainContainer.append(textContainer);
                    break;
            }
        }

        var container;
        if (makeSettings.hasOwnProperty("id"))
        {
            container = $("#" + makeSettings.id);

            //if it doesn't already exist
            if (container.length <= 0)
                container = $("<div>");
            else
                container.html("");
        }
        else //no id specified
            container = $("<div>");

        container.css("display", "inline-block");

        if (makeSettings.hasOwnProperty("id"))
            container.prop("id", makeSettings.id);

        if (makeSettings.hasOwnProperty("class"))
            container.addClass(makeSettings.class);

        var loader = $('<div class="loader">');
        loader.css({
            "display": "inline-block",
            "vertical-align": "middle"
        });

        if (makeSettings.hasOwnProperty("size"))
            loader.addClass(makeSettings.size);

        if (makeSettings.hasOwnProperty("color"))
            loader.css("border-top-color", makeSettings.color);

        if (makeSettings.hasOwnProperty("text"))
        {
            var text = $('<div class="blinker">');
            switch (typeof makeSettings.text)
            {
                case "string":
                    handleWithText(container, loader, text, makeSettings.text, "right");
                    break;
                case "object":
                    handleWithText(container, loader, text, makeSettings.text.text, makeSettings.text.position);
                    break;
            }
        }
        else
        {
            container.css("padding", "5px 2px");
            container.append(loader);
        }

        return container;
    }
}

# loader.js
jQuery based library for creating "loading" icons.


To set up loader.js, you'll need to include jQuery, loader.js, and loader.css.

# Example
[View the project page here for a working example.](https://arondavis.github.io/loader.js/)
```html
<script>
    Loader.Make({
                id: "objectId",
                class: "objectClass",
                size: "medium", //xsmall, small, medium, large, xlarge
                color: "black", //black, red, green
                text:
                {
                    text: `Loading Templates...`,
                    position: "top" //top, right
                }
            });
  </script>
```

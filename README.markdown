## WoWTalentNeeds (Recruit by talent) ##

Show your World of Warcraft recruitment status by displaying the specific talent needed for each class. Check out the [demo][1]!

 ![talent1.jpg][2] &nbsp;&nbsp; ![talent2.jpg][3] &nbsp;&nbsp; ![talent3.jpg][4]

## Features ##

* This World of Warcraft class recruitment box shows the class needs by talent tree specialization.
* Add class coloring (optional). Adjust as desired in the CSS.
* Icons are set to fade out as the need requirements lessen (set in the CSS).
* Tooltips show the need level with either the tooltip background or the text colored specifically to the need.
* Minimal coding is required to set the needs of any one class.

## Requirements ##

* jQuery 1.4.2+
* Tooltip plugin (uses metadata & live events) - included with script

## Default Options ##
**Script**

```javascript
$(document).ready(function(){
  $('.recruitTalent').wowTalents({
    defaultNeed     : 'Low',     // Default need that is set when no setting is found
    colorBackground : true,      // Adds need level color to the tooltip background (true) or the text (false)
    useClassColors  : true,      // Adds class color to the class name when true, otherwise defined in CSS
    tooltipClass    : 'tooltip', // Class added for tooltip script to target
    tooltipWidth    : 150,       // Tooltip width, added to the tooltip metadata
    tooltipMetadata : 'class',   // Location the tooltip meta data is added e.g. {width:150px;color:#ddd;background:#333;}
    deathknight     : "",        // The classes from here down are empty and will revert to the default need.
    druid           : "",
    hunter          : "",
    mage            : "",
    paladin         : "",
    priest          : "",
    rogue           : "",
    shaman          : "",
    warlock         : "",
    warrior         : ""
  });
});
```

**HTML**

```html
<div class="recruitTalent"></div>
```

## Customization ##

**CSS Styles:**

* `.recruitTitle` - Styles the title of the widget above the box. The text of this title is in blue, look for "Recruitment Needs".
* `.recruitTalent` - Sets the overall style of the widget. Set to be 200px wide by default.
* `.high` - High priority text color (green by default). The tooltip background color is also set from this text color.
* `.medium` - Medium priority text color (yellow by default).
* `.low` - Low priority text color (red by default).
* `.none` - No needs text color (grey by default).
* `.usebg` - This sets the text color when the tooltip background color is being changed (black by default). Without this the text would be the same as the `#tooltip` definition.
* `.talentIcons .high`, `.talentIcons .medium`, `.talentIcons .low` and `.talentIcons .none` - sets the opacity of the icon at each priority
* `.classIcon` - Styles the table cell that contains the class icon and class text. It also contains the background image sprite which contains an image of all the WoW classes
* `.classIcon span` - Styles only the class text. It was included to add padding between the icon and the text.
* `.talentIcons` - Styles the table cell that contains all three talent icons.
* `.talentIcon` - Contains the background image which contains all of the talent tree images.

**Options:**

* `defaultNeed` is set to "Low" by default
What this variable does is if you don't set the specific class need in the options, it will default to whatever this variable is set to.
You can set this variable to `l` (low), `m` (medium) or `h` (high), anything else defaults to `n` (none).

* `colorBackground` is set to true by default. When true, hovering over a talent tree icon will display a tooltip with the background color set.

* `useClassColors` is set to true by default. When true, the class names will be set to their given class color (seen in the screen shots above). If set to false, the `.classIcon span` css definition will set the text color.

* `tooltipWidth` is set to 150 by default (in pixels). You can adjust this to fit the tooltip contents. The contents are centered within the coding.

* Use the class name to set each class need. Replace the `x` below with an `n` (none), `l` (low), `m` (medium) or `h` (high); adding anything else will cause the script to add the value of the `defaultNeed` option:

```javascript
deathknight : "x,x,x",
druid       : "x,x,x",
hunter      : "x,x,x",
mage        : "x,x,x",
paladin     : "x,x,x",
priest      : "x,x,x",
rogue       : "x,x,x",
shaman      : "x,x,x",
warlock     : "x,x,x",
warrior     : "x,x,x"
```

##Changelog##

**Version 1.3.1 (6/6/2011)**

* Changed layout from using a table to divs and spans.
* Tooltips will now only show the text about the talent need. Removed the center tag.
* Did some code cleanup & moved all demo files to a demo directory.

**Version 1.3 (10/3/2010)**

* Updated script to use background image sprites.
* Moved the CSS to an external file.
* Cleaned up code, optimized and added a minified version.
* Posted to GitHub.

**Version 1.2 (3/11/2010)**

* Added `useClassColors` option to allow turning off the class coloring for sites using a white background.

**Version 1.1 (3/11/2010)**

* Changed `defaultNeed` to work with just the first letter.

**Version 1.0 (2/21/2010)**

* Initial version

  [1]: http://mottie.github.com/wowTalentNeeds/
  [2]: http://mottie.github.com/wowTalentNeeds/demo/talent1.jpg
  [3]: http://mottie.github.com/wowTalentNeeds/demo/talent2.jpg
  [4]: http://mottie.github.com/wowTalentNeeds/demo/talent3.jpg
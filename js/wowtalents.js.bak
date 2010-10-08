/* World of Warcraft Recruit By Talent Widget
 * by Rob G (Mottie) 2010
 * http://mottie.guildportal.com
 * Dual licensed under the MIT or GPL Version 2.
 */

(function($){
 $.wowTalents = function(el, options){
  // Avoid scope issues, use 'base' instead of 'this'
  var base = this;

  // Access to jQuery and DOM versions of element
  base.$el = $(el);

  // Add a reverse reference to the DOM object
  base.$el.data('wowTalents', base);

  base.init = function(){
   base.options = $.extend({},$.wowTalents.defaultOptions, options);

   // define variables
   var i,j,t,t1,t2,t3,c,tal,x;

   // Validate defaultNeed class
   x = base.options.defaultNeed.toLowerCase();
   base.options.defaultNeed = "None";
   if (x.match('l')) { base.options.defaultNeed = 'Low'; }
   if (x.match('m')) { base.options.defaultNeed = 'Medium'; }
   if (x.match('h')) { base.options.defaultNeed = 'High'; }

   // To set tooltip background colors, we need to append objects
   // with the assigned class to get the CSS text color settings
   t = $('<div id="testsetcolors" style="display:none;"><p class="usebg"/><p class="none"/><p class="low"/><p class="medium"/><p class="high"/></div>');
   t.appendTo($('body'));
   base.options.bg = t.find('.usebg').css('color'); // text color when tooltip background is colored
   base.options.cn = t.find('.none').css('color');
   base.options.cl = t.find('.low').css('color');
   base.options.cm = t.find('.medium').css('color');
   base.options.ch = t.find('.high').css('color');
   base.options.cd = t.find('.' + base.options.defaultNeed.toLowerCase()).css('color');
 //  t.remove();

   // Make table
   // **********
   // define reuseable strings
   t = '<table width="100%"><tbody>';
   t0 = '<span class="talentIcon ' + base.options.tooltipClass + ' ';
   t1 = (base.options.tooltipMetadata == 'class') ? ' ' : '" ' + base.options.tooltipMetadata + '="';
   t2 = ';}" title="<center>';
   t3 = '</center>"></span> ';
   tal = $.wowTalents.talents.root;
   for ( i=0; i < tal.length; i++ ) {
    x = base.options[tal[i].name.toLowerCase().replace(/\s+/g,'')].split(',');
    t += '<tr><td class="classIcon ' + tal[i].icon + '"><span';
    t += (base.options.useClassColors) ? ' style="color:' + tal[i].color + '">' : '>';
    t += tal[i].name + '</span></td><td class="talentIcons">';

    // build tree x3 for each class
    for ( j=0; j<3; j++ ) {
     c = base.getStyle( x[j] || '' ); // get class c[0] & hex values c[1]
     // tooltip width, text color and background color added as metadata into the selected attribute
     t += t0 + tal[i].tree[j][1] + ' ' + c[0].toLowerCase() + t1 + '{width:' + base.options.tooltipWidth + 'px;color:';
     t += (base.options.colorBackground) ? base.options.bg + ';background:' : '';
     t += c[1] + t2 + tal[i].tree[j][0] + ': ' + c[0] + t3;
    }

    t += '</td></tr>';
   }
   t += '</tbody></table>';
   base.$el.html(t);
  };

  // Return class & hex color
  base.getStyle = function(x){
   x = x.toLowerCase();
   if (x.match('n')) { return ['None', base.options.cn]; }
   if (x.match('l')) { return ['Low', base.options.cl]; }
   if (x.match('m')) { return ['Medium', base.options.cm]; }
   if (x.match('h')) { return ['High', base.options.ch]; }
   return [base.options.defaultNeed, base.options.cd];
  }

  // Run initializer
  base.init();
 };

 $.wowTalents.defaultOptions = {
  defaultNeed     : 'Low',     // Default need that is set when no setting is found
  colorBackground : true,      // Adds need level color to the tooltip background (true) or the text (false)
  useClassColors  : true,      // Adds class color to the class name when true, otherwise defined in CSS
  tooltipClass    : 'tooltip', // Class added for tooltip script to target
  tooltipWidth    : 150,       // Tooltip width, added to the tooltip metadata
  tooltipMetadata : 'class',   // Location the tooltip meta data is added e.g. {width:150px;color:#ddd;background:#333;}
  deathknight     : ",,",      // The classes from here down are empty and will revert to the default need.
  druid           : "",
  hunter          : "",
  mage            : "",
  paladin         : "",
  priest          : "",
  rogue           : "",
  shaman          : "",
  warlock         : "",
  warrior         : ""
 };

 $.wowTalents.talents = {"root": [{
  "name"  : "Death Knight",
  "icon"  : "icon_class_deathknight",
  "color" : "#c41f3b",
  "tree"  : [[ "Blood", "icon_deathknight_blood" ],
             [ "Frost", "icon_deathknight_frost" ],
             [ "Unholy", "icon_deathknight_unholy" ]]
 },{
  "name"  : "Druid",
  "icon"  : "icon_class_druid",
  "color" : "#ff7d0a",
  "tree"  : [[ "Balance", "icon_druid_balance" ],
             [ "Feral", "icon_druid_feral" ],
             [ "Restoration", "icon_druid_restoration" ]]
 },{
  "name"  : "Hunter",
  "icon"  : "icon_class_hunter",
  "color" : "#abd473",
  "tree"  : [[ "Beast Mastery", "icon_hunter_beast_mastery" ],
             [ "Marksmanship", "icon_hunter_marksmanship" ],
             [ "Survival", "icon_hunter_survival" ]]
 },{
  "name"  : "Mage",
  "icon"  : "icon_class_mage",
  "color" : "#69ccf0",
  "tree"  : [[ "Arcane", "icon_mage_arcane" ],
             [ "Fire", "icon_mage_fire" ],
             [ "Frost", "icon_mage_frost" ]]
 },{
  "name"  : "Paladin",
  "icon"  : "icon_class_paladin",
  "color" : "#f58cba",
  "tree"  : [[ "Holy", "icon_paladin_holy" ],
             [ "Protection", "icon_paladin_protection" ],
             [ "Retribution", "icon_paladin_retribution" ]]
 },{
  "name"  : "Priest",
  "icon"  : "icon_class_priest",
  "color" : "#ffffff",
  "tree"  : [[ "Discipline", "icon_priest_discipline" ],
             [ "Holy", "icon_priest_holy" ],
             [ "Shadow", "icon_priest_shadow" ]]
 },{
  "name"  : "Rogue",
  "icon"  : "icon_class_rogue",
  "color" : "#fff569",
  "tree"  : [[ "Assassination", "icon_rogue_assassination" ],
             [ "Combat", "icon_rogue_combat" ],
             [ "Subtlety", "icon_rogue_subtlety" ]]
 },{
  "name"  : "Shaman",
  "icon"  : "icon_class_shaman",
  "color" : "#2459ff",
  "tree"  : [[ "Elemental", "icon_shaman_elemental" ],
             [ "Enhancement", "icon_shaman_enhancement" ],
             [ "Restoration", "icon_shaman_restoration" ]]
 },{
  "name"  : "Warlock",
  "icon"  : "icon_class_warlock",
  "color" : "#9482c9",
  "tree"  : [[ "Affliction", "icon_warlock_affliction" ],
             [ "Demonology", "icon_warlock_demonology" ],
             [ "Destruction", "icon_warlock_destruction" ]]
 },{
  "name"  : "Warrior",
  "icon"  : "icon_class_warrior",
  "color" : "#c79c6e",
  "tree"  : [[ "Arms", "icon_warrior_arms" ],
             [ "Fury", "icon_warrior_fury" ],
             [ "Protection", "icon_warrior_protection" ]]
 }
 ]};

 $.fn.wowTalents = function(options){
  return this.each(function(){
   (new $.wowTalents(this, options));
  });
 };

})(jQuery);

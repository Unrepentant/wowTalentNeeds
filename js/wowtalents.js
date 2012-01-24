/* World of Warcraft Recruit By Talent Widget Version 1.3.2
 * by Rob G (Mottie) 2011
 * http://mottie.guildportal.com
 * Dual licensed under the MIT or GPL Version 2.
 */

(function($){
	$.wowTalents = function(el, options){
		// Avoid scope issues, use 'base' instead of 'this'
		var base = this, o;

		// Access to jQuery and DOM versions of element
		base.$el = $(el).addClass('recruitTalent');

		// Add a reverse reference to the DOM object
		base.$el.data('wowTalents', base);

		base.init = function(){
			base.options = o = $.extend({}, $.wowTalents.defaultOptions, options);

			// define variables
			var c,i,j,n,t,tal;

			// Validate defaultNeed class
			n = o.defaultNeed.toLowerCase();
			o.defaultNeed = "None";
			if (/^l/.test(n)) { o.defaultNeed = 'Low'; }
			if (/^m/.test(n)) { o.defaultNeed = 'Medium'; }
			if (/^h/.test(n)) { o.defaultNeed = 'High'; }

			// Find the tooltip background colors: we need set up objects
			// with the assigned class to get the CSS text color settings
			t = $('<div><p class="usebg"/><p class="none"/><p class="low"/><p class="medium"/><p class="high"/></div>').appendTo($('body'));
			o.bg = t.find('.usebg').css('color'); // text color when tooltip background is colored
			o.cn = t.find('.none').css('color');
			o.cl = t.find('.low').css('color');
			o.cm = t.find('.medium').css('color');
			o.ch = t.find('.high').css('color');
			o.cd = t.find('.' + o.defaultNeed.toLowerCase()).css('color');
			t.remove();

			// Make table
			// **********
			// define reuseable strings
			t = '<div>';
			tal = $.wowTalents.talents.root;
			for ( i=0; i < tal.length; i++ ) {
				n = o[tal[i].name.toLowerCase().replace(/\s+/g,'')].split(',');
				t += '<div class="wowclass"><span class="classIcon ' + tal[i].icon + '"><span';
				t += (o.useClassColors) ? ' style="color:' + tal[i].color + '">' : '>';
				t += tal[i].name + '</span></span><span class="talentIcons">';

				// build tree x3 for each class
				for ( j=0; j<3; j++ ) {
					c = base.getStyle( n[j] || '' ); // get class c[0] & hex values c[1]
					// tooltip width, text color and background color added as metadata into the selected attribute
					t += '<span class="talentIcon ' + o.tooltipClass + ' ' + tal[i].tree[j][1] + ' ' + c[0].toLowerCase() +
					(o.tooltipMetadata === 'class' ? ' ' : '" ' + o.tooltipMetadata + '="') + '{width:' + o.tooltipWidth + 'px;color:' +
					(o.colorBackground ? o.bg + ';background:' : '') + c[1] + ';}" title="' + tal[i].tree[j][0] + ': ' + c[0] + '"></span> ';
				}
				t += '</span></div>';
			}
			t += '</div>';
			base.$el.html(t);
		};

		// Return class & hex color
		base.getStyle = function(n){
			n = n.toLowerCase();
			if (/^n/.test(n)) { return ['None', o.cn]; }
			if (/^l/.test(n)) { return ['Low', o.cl]; }
			if (/^m/.test(n)) { return ['Medium', o.cm]; }
			if (/^h/.test(n)) { return ['High', o.ch]; }
			return [o.defaultNeed, o.cd];
		};

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

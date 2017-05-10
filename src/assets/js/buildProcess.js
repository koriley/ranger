//this stopes the default behavior of tabs.
jQuery(".buildTabControls .tabs-title a").on("touchstart click", function(event) {
  event.stopPropagation();
  event.preventDefault();
  
});

var buildTabs = [];
var buildLength = buildTabs.length;
var curBuildTab = 0;

// build an array of the current tabs on the page
jQuery('.buildTabControls .tabs .tabs-title a').each(function() {
  buildTabs.push(jQuery(this).attr('href'));
  buildLength = buildTabs.length - 1;
});

//next button
jQuery('.buildNext').click(function() {
  var whichTabs = getTabs(1);
  tabSelect(buildTabs[whichTabs.current])
  // console.log('current tab = ' + buildTabs[whichTabs.current] + ' previous tab = ' + buildTabs[whichTabs.previous]);
  tabShowHide(buildTabs[whichTabs.previous], buildTabs[whichTabs.current])

});

//prev button
jQuery('.buildBack').click(function() {
  var whichTabs = getTabs(0);
  tabSelect(buildTabs[whichTabs.current])
  // console.log('current tab = ' + buildTabs[whichTabs.current] + ' previous tab = ' + buildTabs[whichTabs.previous]);
  
  tabShowHide(buildTabs[whichTabs.previous], buildTabs[whichTabs.current])
});

/******************
* this function controlls the red bar and the active state of the tabs
* @param current is the current name (i.e. #packages) of the selected tab
*******************/
function tabSelect(current) {
  jQuery('.buildTabControls .tabs-title').each(function() {
    jQuery(this).children(".bottomBorder").children().remove();
    jQuery(this).removeClass('is-active');
    jQuery(this).children('a').attr('aria-selected', 'false');
    var buildTabSelect = jQuery(this).children('a').attr('href');
    if (current === buildTabSelect) {
      jQuery(this).prevAll().children(".bottomBorder").append("<div class='activePast'></div>");
      jQuery(this).children(".bottomBorder").append("<div class='activeBorder'></div>");
      jQuery(this).addClass('is-active');
      jQuery(this).children('a').attr('aria-selected', 'true');
    }
  });
}

/***********
*Find which tab we are on depending on the next and previous buttons
* @param direction 1 is next 0 is previous
* @returns object of current and previous tabs number
************/

function getTabs(direction) {
  var preBuildTab = curBuildTab;
  if (direction === 0) {
    curBuildTab--;
    if (curBuildTab < 0) {
      curBuildTab = 0;
    }
    if (preBuildTab === curBuildTab) {
      preBuildTab = curBuildTab + 1;
    }
  } else {
    curBuildTab++;
    if (curBuildTab > buildLength) {
      curBuildTab = buildLength;
    }
    if (preBuildTab === curBuildTab) {
      preBuildTab = curBuildTab - 1;
    }
  }
  var curPrevObject = {
    'current': curBuildTab,
    'previous': preBuildTab
  }
  return curPrevObject;
}

function tabShowHide(previous, current){
  jQuery(previous).hide();
  jQuery(current).show();
}
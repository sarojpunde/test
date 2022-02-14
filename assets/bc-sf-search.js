// Override Settings
var bcSfSearchSettings = {
  search: {
    //suggestionMode: 'test',
    //suggestionPosition: 'left'
    suggestionMobileStyle: 'style2'
  }
};

// Customize style of Suggestion box
BCSfFilter.prototype.customizeSuggestion = function(suggestionElement, searchElement, searchBoxId) {};

BCSfFilter.prototype.afterBuildSearchBox = function(id) {
	jQ('input[name="q"]').val("");
};
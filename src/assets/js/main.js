requirejs.config({});

//we are really barely scratching the surface here with require, but I am trying to keep it simple.

require([
    'app',
    'header',
    'heroSlide',
    'modelSlide',
    'segmentSelector',
    'segmentHeader',
    'newsCarousel',
    'segmentAllModels',
    'modelPage',
    'catalogForm',
    'videoHook',
    'buildProcess',
    'googleMap'
], function(app, header, heroSlide) {
    //since these components don't need to be told to run, there is no callback function defined.

});

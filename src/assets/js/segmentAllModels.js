jQuery('.stickyMenu a').click(function(){
  jQuery('.fakeActive').each(function(){
      jQuery(this).removeClass('fakeActive');
  });
  jQuery(this).addClass('fakeActive');
});
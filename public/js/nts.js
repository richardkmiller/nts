$(document).ready(function() {
  $('#todo').focus();
  $('form').submit(function() {
    var $nts = $(this).children('input[type=text]');
    var nts = $nts.val();
    var $prefix = $(this).children('input[type=hidden]');
    var prefix = $prefix.val();
    // console.log(nts);
    // console.log(prefix);
    if (nts === "") {
      return false;
    }
    var that = $('<p>'+prefix+nts+'</p>').appendTo(this);
    $.post('/new', {nts: nts, prefix: prefix}, function(data) {
      if (data && data.success == 'true') {
        that.css('background-color', 'yellow').fadeOut(3000, function() {
          that.remove();
        });
      }
    }, 'json');
    $nts.val('').focus();
    return false;
    });
});

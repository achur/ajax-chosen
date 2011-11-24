(function() {
  (function($) {
    return $.fn.ajaxChosen = function(callback) {
      var select;
      select = this;
      this.chosen();
      return this.next('.chzn-container').find(".search-field > input").bind('keyup', function() {
        var field, response, val;
        val = $.trim($(this).attr('value'));
        if (val === $(this).data('prevVal')) {
          return false;
        }
        $(this).data('prevVal', val);
        field = $(this);
        response = function(items) {
          if (!(items != null)) {
            return;
          }
          select.find('option').each(function() {
            if (!$(this).is(":selected")) {
              return $(this).remove();
            }
          });
          $.each(items, function(value, text) {
            return $("<option />").attr('value', value).html(text).appendTo(select);
          });
          select.trigger("liszt:updated");
          return field.attr('value', val);
        };
        return callback({
          term: val
        }, response);
      });
    };
  })(jQuery);
}).call(this);

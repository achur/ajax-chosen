# Ajax-Chosen

This project is a modification of meltingice/ajax-chosen.  It relies on [Chosen](https://github.com/harvesthq/chosen).
Thanks to both Harvest and meltingice for developing this really awesome stuff.

This is designed to behave similarly to [meltingice/ajax-chosen](https://github.com/meltingice/ajax-chosen), but to expose a different
API that should be a bit more flexible and familiar to those using the jQuery UI Autocomplete
plugin.

## How to Use
	
This implementation takes one parameter.  That parameter is
similar to the jQuery UI Autocomplete "source" parameter,
which takes two parameters: a `request` and `response`.  In
this case, `request.term` is the current prefix.  When ready,
call `response(map)` where `map["abc"] = "def"` becomes
`<option value="abc">def</option>`.

## Example Code

The following will behave identically to the example on
meltingice/ajax-chosen.

``` js
$("#example-input").ajaxChosen(
  function(request, response) {
    $.ajax({
      method: 'GET',
      url: '/ajax-chosen/data.php',
      dataType: 'json',
      success: function() {
        var terms = {};
        $.each(data, function(i, val)) {
          terms[i] = val;
        }
        response(terms);
      }
    })
  }
)
```

// 使用jquery来调用handlerbars 渲染页面内容
(function($) {
    var compiled = {};
    $.fn.handlebars = function(data) {
      var template = this.html()
      compiled[template] = Handlebars.compile(template);
      this.after(compiled[template](data));
    };
})(jQuery);

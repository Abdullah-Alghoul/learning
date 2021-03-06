odoo.define('awesome_tshirt.WarningWidget', function (require) {
"use strict";

var core = require('web.core');
var Widget = require('web.Widget');
var widgetRegistry = require('web.widget_registry');

var qweb = core.qweb;


var WarningWidget = Widget.extend({

    /**
     * @override
     */
    init: function (parent, record) {
        this._super.apply(this, arguments);
        this.record = record;
    },

    /**
     * @override
     */
    start: function () {
        this._render();
        return this._super.apply(this, arguments);
    },

    /**
     * @override
     */
    updateState: function (record) {
        this.record = record;
        this._render();
    },

    // -------------------------------------------------------------------------
    // Private
    // -------------------------------------------------------------------------

    /**
     * @private
     */
    _render: function () {
        this.$el.empty();
        if (!this.record.data.image_url) {
            this.$el.append(qweb.render('WarningWidget.NoImage'));
        }
        if (this.record.data.amount > 100) {
            this.$el.append(qweb.render('WarningWidget.Promo'));
        }
    },
});


widgetRegistry.add('warning_widget', WarningWidget);

return WarningWidget;

});
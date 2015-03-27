/**
 * Created by liu_ on 2015/3/23.
 */

Ext.define('ecms.model.Company', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name'},
        {name: 'price', type: 'float'},
        {name: 'change', type: 'float'},
        {name: 'pctChange', type: 'float'},
        {name: 'lastChange', type: 'date',  dateFormat: 'n/j h:ia'},
        {name: 'industry'},
        {name: 'desc'},
        // Trend begins with the cerrent price. Changes get pushed onto the end

    ],

    // Override to keep the last 10 prices in the trend field
    set: function(fieldName, value) {
        if (fieldName === 'price') {
            this.callParent([{
                price: value,
                trend: this.addToTrend(fieldName.price)
            }]);
        }
        else {
            if (typeof fieldName !== 'string' && 'price' in fieldName) {
                fieldName.trend = this.addToTrend(fieldName.price);
            }
            this.callParent(arguments);
        }
    },

    // Override to keep the last 10 prices in the trend field
    addToTrend: function(value) {
        var trend = this.data.trend.concat(value);

        if (trend.length > 10) {
            Ext.Array.splice(trend, 0, trend.length - 10);
        }
        return trend;
    }
});

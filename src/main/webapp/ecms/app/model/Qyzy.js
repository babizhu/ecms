/**
 * Created by liu_ on 2015/3/23.
 */

Ext.define('ecms.model.Qyzy', {
    extend: 'Ext.data.Model',
    fields: [

        {name: 'id',type: 'int'},
        {name: 'name'},
        {name: 'zdmj', type: 'float'},
        {name: 'yzsmj', type: 'float'},
        {name: 'jcmj', type: 'float'},
        {name: 'jcsymj', type: 'float'},
        {name: 'syqk', type: 'float'},
        {name: 'ghzmj', type: 'float'}

        //{name: 'change', type: 'float'},
        //{name: 'pctChange', type: 'float'},
        //{name: 'lastChange', type: 'date',  dateFormat: 'n/j h:ia'},
        //{name: 'industry'},
        //{name: 'desc'},
        // Trend begins with the cerrent price. Changes get pushed onto the end
        
    ]
});

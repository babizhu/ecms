/**
 * Created by liu_ on 2015/3/23.
 */

Ext.define('ecms.model.Qyzy', {
    extend: 'Ext.data.Model',
    fields: [


        {name: '厂房名称'},
        {name: '占地面积（亩）', type: 'float'},
        {name: '已招商面积（平方米）', type: 'float'},
        {name: '建成面积（平方米）', type: 'float'},
        {name: '建成剩余面积（平方米）', type: 'float'},
        {name: '使用情况', type: 'float'},
        {name: '规划总面积（平方米）', type: 'float'}

        //{name: 'change', type: 'float'},
        //{name: 'pctChange', type: 'float'},
        //{name: 'lastChange', type: 'date',  dateFormat: 'n/j h:ia'},
        //{name: 'industry'},
        //{name: 'desc'},
        // Trend begins with the cerrent price. Changes get pushed onto the end
        
    ]
});

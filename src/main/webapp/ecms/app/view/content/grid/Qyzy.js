/**
 * Created by liu_ on 2015/3/23
 * 厂房资源
 */
Ext.define('ecms.view.content.grid.Qyzy', {
    //extend: 'Ext.ux.LiveSearchGridPanel',
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.column.Action',
        'ecms.view.content.grid.QyzyController'
    ],
    xtype: 'qyzy-grid',

    controller: 'qyzy',

    store: 'Qyzys',
    //stateful: true,
    //collapsible: true,
    multiSelect: true,
    closable : true,
    //stateId: 'stateGrid',
    itemId:'qyzy-grid',
    //height: 350,
    title: '<i class=\"icon-cog icon-1x\"></i> 企业资源',
    //glyph: 99,


    viewConfig: {
        //enableTextSelection: true
    },
    //dockedItems: [{
    //    collapsible:true,
    //    xtype: 'toolbar',
    //    dock: 'top',
    //    items: [
    //        { xtype: 'button', text: 'Button 1' }
    //    ]
    //}],
    tbar: [{

        xtype: 'textfield',
        fieldLabel: '企业名称',
        //forceSelection: true,
        //queryMode: 'local',
        //displayField: 'name',
        //valueField: 'id',
        //autoLoadOnValue: true,

        // Giving this component a "reference" gives it a name for us in our View Controller
        // and View Model. In this case, we need the selection ("value") of this field to
        // control the filter of the grid's store. That is handled in the View Model's
        // "stores" declaration. Normally fields bind their value and don't also publish
        // it to the View Model so we have to instruct it to do so via "publishes".
        reference: 'assigneeField',
        publishes: ['value'],

        bind: {
            //store: '{theProject.users}',
            //value: '{defaultUser}'  // this is a formula in our ViewModel so just oneway
        }
    }, {
        xtype: 'combobox',
        fieldLabel: 'Status',
        forceSelection: true,
        editable: false,
        displayField: 'name',
        valueField: 'id',

        // This field's selection ("value") is also needed in the grid's store filter.
        reference: 'statusField',
        publishes: ['value'],

        bind: {
            //store: '{statuses}',
            //value: '{defaultStatus}' // this is data in our ViewModel so twoway
        }
    }, '->',{
        text: '搜索',
        handler: 'onSearchClick'
    }],
    forceFit: true,
    initComponent: function () {
        var me = this;


        me.columns = [
            {
                text     : '厂房名称',
                //flex     : 1,
                sortable : false,
                dataIndex: '厂房名称'
            },
            {
                text     : '占地面积（亩）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '占地面积（亩）'
            },
            {
                text     : '已招商面积（平方米）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '已招商面积（平方米）'
            },
            {
                text     : '建成面积（平方米）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '建成面积（平方米）'
            },
            {
                text     : '建成剩余面积（平方米）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '建成剩余面积（平方米）'
            },
            {
                text     : '使用情况',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '使用情况'
            },
            {
                text     : '规划总面积（平方米）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '规划总面积（平方米）'
            },
            {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    iconCls: 'del',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        Ext.Msg.alert('Sell', 'Sell ' + rec.get('name'));
                    }
                }, {
                    getClass: function(v, meta, rec) {
                        if (rec.get('change') < 0) {
                            return 'alert-col';
                        } else {
                            return 'buy-col';
                        }
                    },
                    getTip: function(v, meta, rec) {
                        if (rec.get('change') < 0) {
                            return 'Hold stock';
                        } else {
                            return 'Buy stock';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex),
                            action = (rec.get('change') < 0 ? 'Hold' : 'Buy');

                        Ext.Msg.alert(action, action + ' ' + rec.get('name'));
                    }
                }]
            }
        ];

        me.callParent();
    }


});

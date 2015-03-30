/**
 * Created by liu_ on 2015/3/23
 * 厂房资源
 */
Ext.define('ecms.view.content.grid.Qyzy', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.column.Action',
        'ecms.view.content.grid.QyzyController'
    ],
    xtype: 'qyzy-grid',

    controller: 'qyzy',
    store: 'Qyzys',
    multiSelect: true,
    closable : true,
    itemId:'qyzy-grid',
    //height: 350,
    title: '<i class=\"icon-cog icon-1x\"></i> 企业资源',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            iconCls: 'icon-add',
            text: '添加',
            //scope: this,
            handler: 'onAddClick'
        }, {
            iconCls: 'icon-save',
            text: '提交数据',
            //disabled: true,
            itemId: 'submit',
            //scope: this,
            handler: 'onSubmit'
        }]
    }],

    viewConfig: {
        //enableTextSelection: true
    },

    tbar: [{

        xtype: 'textfield',
        fieldLabel: '企业名称',

        reference: 'nameField',
        id: 'username',
        publishes: ['value']

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

        this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 2
        });


        me.columns = [
            {
                text     : '厂房名称',
                //flex     : 1,

                dataIndex: '厂房名称',
                editor: {
                    allowBlank: false
                }
            },
            {
                text     : '占地面积（亩）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '占地面积（亩）',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                }
            },
            {
                text     : '已招商面积（平方米）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '已招商面积（平方米）',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                }
            },
            {
                text     : '建成面积（平方米）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '建成面积（平方米）',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                }
            },
            {
                text     : '建成剩余面积（平方米）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '建成剩余面积（平方米）',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                }
            },
            {
                text     : '使用情况',
                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '使用情况',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    decimalPrecision:4
                    //maxValue: 100000
                }
            },
            {
                text     : '规划总面积（平方米）',

                sortable : true,
                //formatter: 'usMoney',
                dataIndex: '规划总面积（平方米）',
                editor: {
                    xtype: 'numberfield',
                    decimalPrecision:4,
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                }
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
        Ext.apply(this, {

            plugins: [this.cellEditing]
        });
        //this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    onSelectChange: function(selModel, selections){
        this.down('#submit').setDisabled(selections.length === 0);
    }
});

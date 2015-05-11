/**
 * Created by liu_ on 2015/3/23
 * 厂房资源
 */
Ext.define('ecms.view.content.grid.Qyzy', {
    extend: 'ecms.view.content.grid.ExcelGrid',
    requires: [
        'Ext.grid.column.Action',
        'ecms.view.content.grid.QyzyController'
    ],
    xtype: 'qyzy-grid',
    features: [{
        ftype: 'summary',//Ext.grid.feature.Summary表格汇总特性
        dock:'bottom'
    }],
    controller: 'qyzy',
    store: 'Qyzys',
    multiSelect: true,
    closable: true,
    itemId: 'qyzy-grid',
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
            iconCls: 'icon-delete',
            text: '删除',
            //scope: 'this',
            handler: 'onDelClick'
        },{
            iconCls: 'icon-grid',
            text: '批量导入',
            //scope: 'this',
            handler: 'onExportClick'
        },{
            iconCls: 'icon-grid',
            text: '覆盖导入',
            //scope: 'this',
            handler: 'onExportClick'
        },{
                iconCls: 'icon-delete',
                text: '导出excel',
                //scope: 'this',
                handler: 'onExportClick'
            }, {
                iconCls: 'icon-save',
                text: '保存',
                //disabled: true,
                itemId: 'submit',
                //scope: this,
                handler: 'onSubmit'
            }]
    }],

    //
    //viewConfig: {
    //    //enableTextSelection: true
    //},

    tbar: [{

        xtype: 'textfield',
        fieldLabel: '企业名称',

        reference: 'nameField',
        id: 'name',
        publishes: ['value']

    }, {
        xtype: 'numberfield',
        fieldLabel: '占地面积>=',
        id: 'zdmjMin'

    }, {
        xtype: 'numberfield',
        fieldLabel: '占地面积<=',
        id: 'zdmjMax'

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
    }, '->', {
        text: '搜索',
        handler: 'onSearchClick'
    }],
    forceFit: true,
    init:function(){
        this.control({
            'RevisionFormNew':{
                'show':function(view){
                    //监听浏览器关闭事件，如果窗口关闭或者页面刷新，删除草稿
                    Ext.EventManager.on(window, 'beforeunload', function() {
                        //Ext.Ajax.request({
                        //    url:context+ 'api/revision/'+view.rid,
                        //    method:'delete',
                        //    async:false,
                        //    success:function(response, opts){
                        //
                        //    }
                        //})
                        alert("关闭浏览器");
                    });
                }
            }
        })
    },
    initComponent: function () {
        var me = this;

        this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 2
        });


        me.columns = [
            {
                text: '序号',

                summaryRenderer: function(value, summaryData, dataIndex) {
                    return '合计';
                },
                dataIndex: 'id',
                renderer: function (value) {
                    return Ext.isNumber(value) ? value : '&nbsp;';
                }
            },
            {
                text: '厂房名称',
                dataIndex: 'name',
                editor: {
                    allowBlank: false
                },
                summaryType:'count'


            },
            {
                text: '占地面积（亩）',

                sortable: true,
                //formatter: 'usMoney',
                dataIndex: 'zdmj',
                renderer: function(value) {
                    return Ext.util.Format.number(value, '0,0.00');

                },
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                },
                summaryType:'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return Ext.util.Format.number(value, '0,0.00');

                }
                //features: [{
                ////    id: 'group',
                ////    ftype: 'groupingsummary',//分组统计，可以选择不分组的，各类型可以去API查找
                ////    groupHeaderTpl: '{name}'+'月份车辆美容及维修费用',//标题而已
                ////    hideGroupedHeader: false,
                ////    enableGroupingMenu: false
                ////},
                //
                //    ftype: 'summary',//下方的汇总的
                //    summaryType: 'average',//类型是求平均值，还有sum等，可以去API查找
                //    dock: 'bottom'
                //}]
                //summaryType: 'sum'//求数量
                //summaryRenderer: function(value){
                //    return '总数：'+value
                //}
            },
            {
                text: '已招商面积（平方米）',
                //summaryType:'sum',
                sortable: true,
                //formatter: 'usMoney',
                dataIndex: 'yzsmj',
                renderer: function(value) {
                    return Ext.util.Format.number(value, '0,0.00');

                },
                summaryType:'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return Ext.util.Format.number(value, '0,0.00');

                },
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                }
            },
            {
                text: '建成面积（平方米）',
                //summaryType: 'count',//求数量
                //summaryRenderer: function(value){
                 //   return value
               // },
                sortable: true,
                //formatter: 'usMoney',
                dataIndex: 'jcmj',
                renderer: function(value) {
                    return Ext.util.Format.number(value, '0,0.00');

                },
                summaryType:'sum',
                summaryRenderer: function(value, summaryData, dataIndex) {
                    return Ext.util.Format.number(value, '0,0.00');

                },
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                }
            },
            {
                text: '建成剩余面积（平方米）',
                //summaryType: 'count',//求数量
                //summaryRenderer: function(value){
                //    return value
                //},
                sortable: true,
                //formatter: 'usMoney',
                dataIndex: 'jcsymj',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                }
            },
            {
                text: '使用情况',
                //summaryType:'sum',
                //summaryRenderer: function(value){
                //    return value
                //},
                //formatter: 'usMoney',
                dataIndex: 'syqk',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    decimalPrecision: 4
                    //maxValue: 100000
                }
            },
            {
                text: '规划总面积（平方米）',

                //summaryType: 'count',//求数量
                //summaryRenderer: function(value){
                //    return '总数：'+value
                //},
                //formatter: 'usMoney',
                dataIndex: 'ghzmj',
                editor: {
                    xtype: 'numberfield',
                    decimalPrecision: 4,
                    allowBlank: false,
                    minValue: 0
                    //maxValue: 100000
                }
            }
            //,
            //{
            //    menuDisabled: true,
            //    sortable: false,
            //    xtype: 'actioncolumn',
            //    width: 50,
            //    items: [{
            //        iconCls: 'del',
            //        tooltip: 'Sell stock',
            //        handler: 'onDelete'
            //    }
            //        , {
            //        getClass: function(v, meta, rec) {
            //            if (rec.get('change') < 0) {
            //                return 'alert-col';
            //            } else {
            //                return 'buy-col';
            //            }
            //        },
            //        getTip: function(v, meta, rec) {
            //            if (rec.get('change') < 0) {
            //                return 'Hold stock';
            //            } else {
            //                return 'Buy stock';
            //            }
            //        },
            //        handler: function(grid, rowIndex, colIndex) {
            //            var rec = grid.getStore().getAt(rowIndex),
            //                action = (rec.get('change') < 0 ? 'Hold' : 'Buy');
            //
            //            Ext.Msg.alert(action, action + ' ' + rec.get('name'));
            //        }
            //    }
            //     ]
            //}
        ];

        me.plugins = this.cellEditing;

        //Ext.apply(this, {
        //
        //    plugins: [this.cellEditing]
        //});
        me.callParent();
        //this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    listeners: {
        beforeclose: function (panel, eOpts ) {
            alert("关闭");
            ////if (operation.action == 'destroy') {
            //    //main.child('#form').setActiveRecord(null);
            ////}
            //Ext.MessageBox.show(operation.action, operation.getResultSet().detailMessage);
            //this.load();
        }
    }
    //,
    //onSelectChange: function(selModel, selections){
    //    //this.down('#submit').setDisabled(selections.length === 0);
    //}
});

/**
 * Created by Administrator on 2015-3-20.
 */


var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "用户管理", leaf: true },
            { text: "招商载体", expanded: true, children: [
                { text: "企业闲置土地", leaf: true,grid:'cfzy-grid' },
                { text: "已征未出让地", leaf: true,grid:'qyzy-grid'},
                { text: "标准厂房", leaf: true,grid:'qyzy-grid'},
                { text: "闲置房源", leaf: true,grid:'qyzy-grid'}
            ] },
            { text: "企业运行", leaf: true },
            { text: "工作简讯", leaf: true }
        ]
    }
});

Ext.define('ecms.view.menu.Menu', {

    extend: 'Ext.tree.Panel',
    requires: [
        'ecms.view.menu.MenuController'

    ],
    xtype: 'navimenu',
    controller: 'menu',
    title: '<i class=\"icon-cog icon-1x\"></i>  功能菜单',
    iconCls: 'icon-grid',
    //glyph : 0xf015,
    width: 200,
    height: 150,
    store: store,
    collapsible: true,
    //clickitem:function(view,record,item,index,e,eOpts) {
    //    //this.controller.createTab(view,record,item,index,e,eOpts)
    //
    //    // Ext.MessageBox.alert("确定","你点击的是" + record);
    //    //从record item index 等参数中我们可以获得大部分满足我们应用的信息
    //    if (record.get('leaf')) {// do somethings……};
    //        Ext.MessageBox.alert("确定","你点击的是" + record.get('text') + record.get("p"));
    //    }
    //
    //    //var tabs = this.lookupReference('main');
    //    //alert(tabs);
    //    //var cfg;
    //    ////cfg.itemId = 123;
    //    ////cfg.closable = true;
    //    //var tab = tabs.add( );
    //    //tabs.setActiveTab(1);
    //
    //},
    listeners: {
        itemclick: 'createTab'
        //scope: 'controller'
    },
    // itemclick:'createTab',
   // clickitem:'onLoginClick',
   // initComponent: function() {
   //     var me = this;
   //     me.on('itemclick', me.clickitem);
   //     me.callParent(arguments);
   // },
    rootVisible: false
});
/**
 * Created by liu_ on 2015/3/23.
 */

Ext.define('ecms.view.menu.MenuController', {
    extend: 'Ext.app.ViewController',

    requires: [
        //'Ext.window.MessageBox'
        'ecms.view.content.grid.*',
        'Ext.tab.*'
    ],

    alias: 'controller.menu',

    createTab: function (view, record, item, index, e, eOpts) {

        var girdXtype = record.data.grid;
        if( !girdXtype){
            return;
        }
        var tabs = Ext.getCmp('tab');
        var ids = record.data.grid;
        var tab = tabs.items.getByKey(ids);
        //var tabs = this.lookupReference('tabcontent');


        var cfg = {

            //xtype:'qyzy-grid'
            xtype: girdXtype
            //tabConfig:{
            //    //itemId: 'record.getId()',
            //    id:'record.getId()',
            //    title: record.data.text
            //}
            //listeners: {
            //    viewticket: 'onViewTicket'
            //},
            //
            //viewModel: {
            //    data: {
            //        theProject: record
            //    }
            //}

        }
       // alert("tab=" + tab);
       if (!tab) {
            tab = tabs.add( cfg );
           //tab = tabs.add({
           //    // we use the tabs.items property to get the length of current items/tabs
           //    title: 'Tab ' + (tabs.items.length + 1),
           //    html : 'Another one',
           //    itemId:'Tab ' + (tabs.items.length + 1)
           //});

       }


        //var t = tabs.getActiveTab();
        //alert(t.title);
        tabs.setActiveTab(tab);
        //Ext.MessageBox.alert("确定", "你点击的是" + record.data.text);
    }


});

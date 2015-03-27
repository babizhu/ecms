/**
 * Created by liu_ on 2015/3/23
 * 厂房资源
 */




Ext.define('ecms.view.content.grid.QyzyController', {
    //extend: 'Ext.ux.LiveSearchGridPanel',
    extend: 'Ext.app.ViewController',
    alias: 'controller.qyzy',
    onSearchClick: function(){

        var longNameFilter = new Ext.util.Filter({
            filterFn: function(item) {
                //alert(item);
                return item.data.name.length > 10;
            }
        });
        //alert()
        this.getView().getStore().filter(longNameFilter);

    }
});

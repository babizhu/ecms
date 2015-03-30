/**
 * Created by liu_ on 2015/3/23
 * 厂房资源
 */




Ext.define('ecms.view.content.grid.QyzyController', {
    //extend: 'Ext.ux.LiveSearchGridPanel',
    extend: 'Ext.app.ViewController',
    alias: 'controller.qyzy',
    onSearchClick: function(){

        //var s = Ext.get('username');
        ////var t = s.value();
        //var t1 = s.component.value;
        //alert(t1);

        var longNameFilter = new Ext.util.Filter({
            filterFn: function(item) {
                //alert(item);
                return item.data.name.length > 10;
            }
        });
        //alert()
        //.filter(longNameFilter);

        this.getView().getStore().load({params:{start:0, limit:20,

            username:Ext.get('username').component.value

            }});

    }
    ,

    onAddClick: function(){
        this.getView().store.autoSync = false;
        //Create a model instance
        var rec = new ecms.model.Qyzy({
       '厂房名称':'',
       '占地面积（亩）':0,
       '已招商面积（平方米）':0,
       '建成面积（平方米）':0,
       '建成剩余面积（平方米）':0,
       '使用情况':0,
       '规划总面积（平方米）':0
        });

        this.getView().getStore().insert(0, rec);
        this.getView().cellEditing.startEditByPosition({
            row: 0,
            column: 0
        });
       // alert(3);
    },
    onSubmit: function(){
        //this.getView().store.autoSync = false;
        this.getView().store.sync();
    }

});

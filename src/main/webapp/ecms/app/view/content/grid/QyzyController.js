/**
 * Created by liu_ on 2015/3/23
 * 厂房资源
 */




Ext.define('ecms.view.content.grid.QyzyController', {
    //extend: 'Ext.ux.LiveSearchGridPanel',
    extend: 'Ext.app.ViewController',
    alias: 'controller.qyzy',
    onSearchClick: function () {

        this.getView().getStore().load({
            params: this.buildQuery()
        });

    },
    buildQuery:function(){
        return {
            name: Ext.get('name').component.value,
            zdmjMin: Ext.get('zdmjMin').component.value,
            zdmjMax: Ext.get('zdmjMax').component.value
        }
        //var query;
        //if( Ext.get('name').component.value != ""){
        //    query += "name=" + Ext.get('name').component.value + "&";
        //}
        //if( Ext.get('zdmjMin').component.value != ""){
        //    query += "zdmjMin=" + Ext.get('zdmjMin').component.value + "&";
        //}
        //if( Ext.get('zdmjMax').component.value != ""){
        //    query += "zdmjMax=" + Ext.get('zdmjMax').component.value + "&";
        //}
        //return query;

    },
    onDelClick:function(){
        var selection = this.getView().getSelectionModel().getSelection();
        if( selection.length > 0 ) {
            var msg = "确认要删除如下记录吗?<br>";
            for(var i = 0; i< selection.length;i++){
                var rec = selection[i];
                msg += rec.data.name + "<br>";
            }
            Ext.Msg.confirm('Confirm', msg,
                function(btn) {
                    if (btn == 'yes') {
                        for(var i = 0; i< selection.length;i++){
                            this.getView().getStore().remove(selection[i]);
                        }
                    }
                },this
            );
        }
    },

    onAddClick: function () {
        //this.getView().store.autoSync = false;
        //Create a model instance
        var rec = new ecms.model.Qyzy({
            //id:-1
        });

        this.getView().getStore().insert(0, rec);
        this.getView().cellEditing.startEditByPosition({
            row: 0,
            column: 1
        });

    },
    onSubmit: function () {
        this.getView().store.sync();

    },
    onExportClick: function () { //传入的GridPanel的实例
        ////alert(this.getView().getStore().getProxy().url);
        //var gridPanel = Ext.get('qyzy-grid');
        var vExportContent = this.getView().getExcelXml(); //获取数据
        //if (true||Ext.isIE8||Ext.isIE6 || Ext.isIE7 || Ext.isSafari
        //    || Ext.isSafari2 || Ext.isSafari3) { //判断浏览器
        //
        //    var fd = Ext.get('frmDummy');
        //    if (!fd) {
        //        fd = Ext.DomHelper.append(
        //            Ext.getBody(), {
        //                tag : 'form',
        //                method : 'post',
        //                id : 'frmDummy',
        //                action : '/qyzy/toExcel',
        //                target : '_blank',
        //                name : 'frmDummy',
        //                cls : 'x-hidden',
        //                cn : [ {
        //                    tag : 'input',
        //                    name : 'exportContent',
        //                    id : 'exportContent',
        //                    type : 'hidden'
        //                } ]
        //            }, true);
        //
        //    }
        //    fd.child('#exportContent').set( {
        //        value : vExportContent
        //    });
        //    fd.dom.submit();
        //} else {
        //    document.location = 'data:application/vnd.ms-excel;base64,' + Base64
        //        .encode(vExportContent);
        //}


        var form1 = Ext.create('Ext.form.Panel',{
            //title:'Ext.form.field.Text示例',
            //bodyStyle:'padding:5 5 5 5',//表单边距
           //frame : true,
            standardSubmit:true,
            target: '_blank',
           // height:120,
           // width:200,
            renderTo :Ext.getBody()
            //url: '/qyzy/toExcel'

        });
        var q =this.buildQuery();
        //q.add()

        form1.getForm().submit({
            //clientValidation: true,
            url: '../qyzy/toExcel?meta='+vExportContent,
            params:q

        });
    }

});

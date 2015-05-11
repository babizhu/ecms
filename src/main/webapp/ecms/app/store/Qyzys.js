/**
 * Created by liu_ on 2015/3/23.
 */
Ext.define('ecms.store.Qyzys', {
    extend: 'Ext.data.Store',
    alias: 'store.qyzys',
    model: 'ecms.model.Qyzy',
    autoLoad: true,

    //autoSync: true,
    //remoteFilter: true,
    //filters: [{
    //    property: 'name',
    //    value: '{nameField.value}'
    //}],
    proxy: {
        //params: {
        //    group: 3,
        //    type: 'user'
        //},
        type: 'ajax',
        api: {
            read: '../qyzy/read',
            create: '../qyzy/insert',
            update: '../qyzy/update',
            destroy: '../qyzy/delete'
        },
        reader: {
            type: 'json',
            idProperty: 'id',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'

            //rootProperty: 'data',

        },
        writer: {
            type: 'json',
            writeAllFields: true,
            clientIdProperty: 'clientId',
            rootProperty: 'data'
        },

        listeners: {
            //metachange: function(this, meta, eOpts){},

            exception: function (proxy, response, operation) {
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });


            }
        }


    },
    listeners: {
        write: function (proxy, operation) {
            //alert("writezhixing");
            ////if (operation.action == 'destroy') {
            //    //main.child('#form').setActiveRecord(null);
            ////}
            //Ext.MessageBox.show(operation.action, operation.getResultSet().detailMessage);
            this.load();
        }
    }


});
Ext.define('ecms.store.User', {
    extend: 'Ext.data.Store',
    model: 'ecms.model.User',
    autoLoad: false,
    alias: 'store.user',

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
            read: '../user/read',
            create: '../user/insert',
            update: '../user/update',
            destroy: '../user/delete'
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
                alert( "fsfs" + proxy );
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
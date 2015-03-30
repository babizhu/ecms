/**
 * Created by liu_ on 2015/3/23.
 */
Ext.define('ecms.store.Qyzys', {
    extend: 'Ext.data.Store',
    alias: 'store.qyzys',
    model: 'ecms.model.Qyzy',
    autoLoad: true,
    autoSync: true,
    //remoteFilter: true,
    //filters: [{
    //    property: 'name',
    //    value: '{nameField.value}'
    //}],
    proxy: {
        params: {
            group: 3,
            type: 'user'
        },
        type: 'ajax',
        api: {
            read: 'http://localhost:8080/business/time?tname=%E5%8E%82%E6%88%BF%E8%B5%84%E6%BA%90',
            create: 'http://localhost:8080/business/create?tname=%E5%8E%82%E6%88%BF%E8%B5%84%E6%BA%90',
            update: 'http://localhost:8080/business/update?tname=%E5%8E%82%E6%88%BF%E8%B5%84%E6%BA%90',
            destroy: 'http://localhost:8080/business/time?tname=%E5%8E%82%E6%88%BF%E8%B5%84%E6%BA%90'
        },
        reader: {
            type: 'json',
            successProperty: 'success',
            rootProperty: 'data',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            root: 'data'
        },

        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }

    }

});
/**
 * Created by liu_ on 2015/3/23.
 */
Ext.define('ecms.store.Qyzys', {
    extend: 'Ext.data.Store',
    alias: 'store.qyzys',
    model: 'ecms.model.Qyzy',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'http://localhost:8080/business/time?tname=%E5%8E%82%E6%88%BF%E8%B5%84%E6%BA%90&_dc=1427441362528&page=1&start=0&limit=25',
            //create: 'app.php/users/create',
            //update: 'app.php/users/update',
            //destroy: 'app.php/users/destroy'
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
    //autoLoad:true,
    //reader: {
    //    type: 'json',
    //    successProperty: 'success',
    //    root: 'data',
    //    messageProperty: 'message'
    //},
    //proxy: {
    //    type: 'jsonp',
    //    url : 'http://localhost:8080/business/time?tname=%E5%8E%82%E6%88%BF%E8%B5%84%E6%BA%90&_dc=1427441362528&page=1&start=0&limit=25'
    //}
});
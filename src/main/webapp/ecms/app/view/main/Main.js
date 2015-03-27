/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ecms.view.main.Main', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        //'TestExt5.view.main.MainController',
        //'TestExt5.view.main.MainModel'
        'ecms.view.menu.Menu',
        'ecms.view.misc.theme.ThemeChoose',
        'ecms.view.content.grid.Cfzy',
        'ecms.view.content.grid.Qyzy'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'navimenu',
        //bind: {
        //    title: '{name}'
        //},
        region: 'west',
        //html: '<ul><li>!This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true
        //tbar: [{
        //    text: 'Button',
        //    handler: 'onClickButton'
        //}]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        id:'tab',
        reference: 'tabcontent',
        items: [{
            xtype:'qyzy-grid'
        }]
            //,{
        //    title: 'The Data',
        //    layout: 'fit',
        //    items: [{
        //        xtype: 'grid',
        //        //title: 'Simpsons',
        //        store: {
        //            fields:['name', 'email', 'phone'],
        //            data:[
        //                { name: 'Lisa',  email: "lisa@simpsons.com",
        //                    phone: "555-111-1224"  },
        //                { name: 'Bart',  email: "bart@simpsons.com",
        //                    phone: "555-222-1234" },
        //                { name: 'Homer', email: "home@simpsons.com",
        //                    phone: "555-222-1244"  },
        //                { name: 'Marge', email: "marge@simpsons.com",
        //                    phone: "555-222-1254"  }
        //            ],
        //            proxy: {
        //                type: 'memory'
        //            }
        //        },
        //        columns: [
        //            { text: 'Name',  dataIndex: 'name' },
        //            { text: 'Email', dataIndex: 'email', flex: 1},
        //            { text: 'Phone', dataIndex: 'phone' }
        //        ]
        //    }]
        //}]

    }, {
        //region: 'north',
        //height: 70,
        //xtype: 'panel',
        //layout: {
        //    type: 'hbox',
        //    align: 'middle'
        //},
        //html: '<h1>mannager system</h1>',
        //items: [{
        //    xtype: 'panel',
        //    cls: 'app-header-text',
        //    //bind: '{currentOrg.name}',
        //    flex: 1
        //}, {
        //    xtype: 'themechoose',
        //    //bind: '{currentUser.name}',
        //    //listeners: {
        //    //    click: 'onClickUserName',
        //    //    element: 'el'
        //    //},
        //    margin: '0 10 0 0'
        //}]

        region: 'north',
        xtype: 'component',
        cls: 'appBanner',
        padding: 5,
        height: 50,
        html: '<h3>游戏后台管理系统</h3>'
        //    xtype: 'themechoose',

    }]
});

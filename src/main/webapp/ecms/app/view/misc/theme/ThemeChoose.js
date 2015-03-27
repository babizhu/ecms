/**
 * Created by Administrator on 2015-3-20.
 * 样式选择界面
 */



Ext.define('ecms.view.misc.theme.ThemeChoose', {

    extend: Ext.form.ComboBox,
    xtype: 'themechoose',
    //labelWidth: '40',
    //fieldLabel: 'Theme',
    displayField: 'name',
    valueField: 'value',
    //labelStyle: 'cursor:move;',
    //margin: '5 5 5 5',
    queryMode: 'local',
    store: Ext.create('Ext.data.Store', {
        fields: ['value', 'name'],
        data : [
            { value: 'neptune', name: 'Neptune主题' },
            { value: 'neptune-touch', name: 'Neptune Touch主题' },
            { value: 'crisp', name: 'Crisp主题' },
            { value: 'crisp-touch', name: 'Crisp Touch主题' },
            { value: 'classic', name: 'Classic主题' },
            { value: 'gray', name: 'Gray主题' }
        ]
    }),
    //value: theme,
    listeners: {
        select: function(combo) {
            var  theme = combo.getValue();
            var	href = 'ext/packages/ext-theme-'+theme+'/build/resources/ext-theme-'+theme+'-all.css';
            var	link = Ext.fly('theme');

            if(!link) {
                link = Ext.getHead().appendChild({
                    tag:'link',
                    id:'theme',
                    rel:'stylesheet',
                    href:''
                });
            };
            link.set({href:Ext.String.format(href, theme)});
        }
    }
});
/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'ecms',

    extend: 'ecms.Application',
    init:function() {

        Ext.EventManager.on(window, 'beforeunload', function() {
            return 'Your changes are be lost.';
        });
        Ext.get(window).on('beforeunload',function(e){return (window.event.returnValue=e.returnValue='确认离开当前页面？')});
    }


        //autoCreateViewport: 'ecms.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to ecms.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});

package com.bbz.ecms.module.user;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.joda.time.DateTime;
import org.nutz.ioc.annotation.InjectName;
import org.nutz.ioc.loader.annotation.IocBean;
import org.nutz.mvc.annotation.At;
import org.nutz.mvc.annotation.Ok;

/**
 * user         LIUKUN
 * time         2015-3-17 17:01
 */


@IocBean
@InjectName
@At("/user")
public class UserModule{
    @RequiresPermissions("aabe:read:*")
//    @RequiresPermissions("role:read:*")

    @At
    @Ok("json")
    public String time() {

        return new DateTime().toString(  );
    }
}

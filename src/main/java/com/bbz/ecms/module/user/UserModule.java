package com.bbz.ecms.module.user;

import com.bbz.ecms.domain.user.User;
import com.bbz.ecms.service.user.UserService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.nutz.ioc.annotation.InjectName;
import org.nutz.ioc.loader.annotation.Inject;
import org.nutz.ioc.loader.annotation.IocBean;
import org.nutz.mvc.annotation.At;
import org.nutz.mvc.annotation.Ok;
import org.nutz.mvc.annotation.Param;

import java.util.List;

/**
 * user         LIUKUN
 * time         2015-3-17 17:01
 */


@SuppressWarnings("unused")
@IocBean
@InjectName
@At("/user")
@Ok("json")
public class UserModule{
    @Inject
    private UserService userService;

    @RequiresPermissions("aabe:read:*")
//    @RequiresPermissions("role:read:*")




    public List<User> read( @Param("name") String name,
                            @Param("zdmjMin") String zsmjMin,
                            @Param("zdmjMax") String zsmjMax ){



        return userService.list();

    }
}

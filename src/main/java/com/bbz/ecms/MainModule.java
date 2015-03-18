package com.bbz.ecms;

import com.bbz.ecms.filter.ShiroActionFilter;
import org.nutz.mvc.annotation.*;
import org.nutz.mvc.ioc.provider.ComboIocProvider;

/**
 * user         LIUKUN
 * time         2015-3-17 16:02
 */

//@Modules({ UserModule.class, LoginModule.class,})
//@Modules(value={Abc.class, Xyz.class}, scanPackage = true)
@Modules(scanPackage = true)
@SetupBy(CmsSetup.class)
@IocBy(type = ComboIocProvider.class, args = { "*org.nutz.ioc.loader.json.JsonLoader", "dao.js",
        "*org.nutz.ioc.loader.annotation.AnnotationIocLoader", "com.bbz.ecms" })

//@IocBy(type = ComboIocProvider.class, args = { "*org.nutz.ioc.loader.json.JsonLoader", "dao.js" })
@Fail("json")
@Filters(@By(type = ShiroActionFilter.class))
@Localization("msg")
public class MainModule{


}

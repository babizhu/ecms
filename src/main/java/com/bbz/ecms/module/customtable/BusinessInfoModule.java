package com.bbz.ecms.module.customtable;

import com.bbz.ecms.common.util.DataParse;
import com.bbz.ecms.service.dict.CustomTableService;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import org.nutz.ioc.annotation.InjectName;
import org.nutz.ioc.loader.annotation.Inject;
import org.nutz.ioc.loader.annotation.IocBean;
import org.nutz.mvc.annotation.At;
import org.nutz.mvc.annotation.Ok;
import org.nutz.mvc.annotation.Param;

import java.util.List;

/**
 * user         LIUKUN
 * time         2015-3-18 13:51
 */

@IocBean
@InjectName
@At("/business")
@Ok("raw")
public class BusinessInfoModule{

    @Inject
    private CustomTableService customTableService;

    @At
    public String time( @Param("tname") String tableName ){
        List<DBObject> query = customTableService.query( tableName, new BasicDBObject(  ) );
        if( query == null ){
            return "表未找到";
        }
        else {
            return DataParse.parseJson( query );
            //return "{\"success\":true,\"message\":\"Loaded data\",\"data\":[{\"id\":1,\"first\":\"Fred\",\"last\":\"Flintstone\",\"email\":\"fred@flintstone.com\"},{\"id\":2,\"first\":\"Wilma\",\"last\":\"Flintstone\",\"email\":\"wilma@flintstone.com\"},{\"id\":3,\"first\":\"Pebbles\",\"last\":\"Flintstone\",\"email\":\"pebbles@flintstone.com\"},{\"id\":4,\"first\":\"Barney\",\"last\":\"Rubble\",\"email\":\"barney@rubble.com\"},{\"id\":5,\"first\":\"Betty\",\"last\":\"Rubble\",\"email\":\"betty@rubble.com\"},{\"id\":6,\"first\":\"BamBam\",\"last\":\"Rubble\",\"email\":\"bambam@rubble.com\"}]}";
        }
    }
}

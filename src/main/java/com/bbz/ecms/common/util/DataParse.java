package com.bbz.ecms.common.util;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.mongodb.DBObject;

import java.util.List;

/**
 * user         LIUKUN
 * time         2015-3-18 15:04
 */

public class DataParse{

    /**
     * 把输入的list转换为客户端方便使用json字符串
     * @param data      输入的list
     * @return          json字符串
     */
    public static String parseJson( List<DBObject> data ){
        //{"success":true,"message":"Loaded data",\"data\":
        JSONObject ret = new JSONObject(  );
        ret.put( "success", true );
        ret.put("message","Loaded data"  );
        JSONArray arr = new JSONArray();
        for( DBObject object : data ) {
            JSONObject jsonObj = new JSONObject();
            for( String key : object.keySet() ) {
                if( key.equalsIgnoreCase( "_id" ) ||
                        key.equalsIgnoreCase( "占地面积(亩)" ) ||
                        key.equalsIgnoreCase( "已招商面积（平方米）" ))
                jsonObj.put( key, object.get( key ) );
            }

            arr.add( object );

        }
        ret.put( "data", arr );

        return ret.toJSONString();
    }
}

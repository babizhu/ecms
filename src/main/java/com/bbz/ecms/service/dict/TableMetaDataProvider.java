package com.bbz.ecms.service.dict;


import com.bbz.ecms.common.db.MongoUtil;
import com.bbz.ecms.domain.dict.TableMeta;
import com.google.common.collect.Maps;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;

import java.util.Map;

/**
 * user         LIUKUN
 * time         2015-3-18 10:01
 */

enum TableMetaDataProvider{
    INSTANCE;

    /**
     * 保存所有的服务器单例信息，
     */
    private static final String TABLE_NAME = "tableMeta";

    private final DBCollection collection = MongoUtil.INSTANCE.getDB().getCollection( TABLE_NAME );


    /**
     * 添加一张自定义表的meta内容
     * @param meta  自定义表的meta内容
     */
    void replace( TableMeta meta ){
        DBObject obj = meta.encode( );

        collection.save( obj );
    }

    /**
     * 获取所有的自定义表内容，并以hashmap的形式返回
     * @param conditions    查询条件，目前来看不需要，保留
     * @return  返回的hashmap
     */
    Map<String, TableMeta> getMapAllBy(BasicDBObject conditions){
        Map<String, TableMeta> map = Maps.newConcurrentMap();



        try( DBCursor cursor = collection.find( conditions ) ) {
            while( cursor.hasNext() ) {
                TableMeta meta = new TableMeta(cursor.next());
//            cursor.next();

                map.put( meta.getName(), meta );
            }
        }
        return map;
    }

}

package com.bbz.ecms.service.dict;

import com.bbz.ecms.common.db.MongoUtil;
import com.bbz.ecms.domain.dict.TableMeta;
import com.google.common.collect.Lists;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;

import java.util.List;

/**
 * user         LIUKUN
 * time         2015-3-18 12:01
 */

class CustomTableDataProvider{

    private DBCollection collection;

    public void replace( TableMeta tableMeta, DBObject data ){
        collection = MongoUtil.INSTANCE.getDB().getCollection( tableMeta.getName() );
        collection.save( data );
    }

    public List<DBObject> query(TableMeta tableMeta, DBObject condition){
        collection = MongoUtil.INSTANCE.getDB().getCollection( tableMeta.getName() );
        List<DBObject> list = Lists.newArrayList();


        try( DBCursor cursor = collection.find( condition ) ) {
            while( cursor.hasNext() ) {
//            cursor.next();
                list.add( cursor.next() );
            }
        }


        return list;

    }


}

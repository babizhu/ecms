package com.bbz.ecms.service.dict;

import com.bbz.ecms.domain.dict.TableMeta;
import com.mongodb.BasicDBObject;

import java.util.Map;

/**
 * user         LIUKUN
 * time         2015/3/17 23:06
 */

public enum TableMetaService{

    INSTANCE;

    private TableMetaDataProvider db = TableMetaDataProvider.INSTANCE;
    private final Map<String, TableMeta> tableMap;

    TableMetaService(){
        tableMap = db.getMapAllBy( new BasicDBObject() );
    }

    Map<String, TableMeta> getAll(){
        return tableMap;
    }

    TableMeta getTable( String tableName ){

        TableMeta customTable = tableMap.get( tableName );
        if( customTable == null ) {
            return null;
        }

        return customTable;

    }

    /**
     * 新加一个自定义表meta信息，如果存在，则替换
     *
     * @param tableMeta 自定义表meta信息
     */
    void replace( TableMeta tableMeta ){
        db.replace( tableMeta );
    }

    void add( Object obj ){

    }

    Object search( Object condition ){
        return null;
    }


    void remove( Object condition ){

    }

    void update( Object obj ){

    }

    @Override
    public String toString(){
        return "TableMetaService{" +

                ", tableMap=" + tableMap +
                '}';
    }


}

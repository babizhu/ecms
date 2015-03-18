package com.bbz.ecms.service.dict;

import com.bbz.ecms.domain.dict.TableMeta;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import org.nutz.ioc.loader.annotation.IocBean;

import java.util.ArrayList;
import java.util.List;

/**
 * user         LIUKUN
 * time         2015-3-18 10:56
 *
 * 自定义表格的相关功能，常见的如增删改查
 */
@IocBean
public class CustomTableService{

    private final TableMetaService tableMetaService = TableMetaService.INSTANCE;
    private final CustomTableDataProvider db = new CustomTableDataProvider();


    public CustomTableService(  ){


    }

    public void replace(TableMeta tableMeta,DBObject data){


        //db.replace( tableMeta, data );
    }

    public List<DBObject> query(String tableName,DBObject condition){

        TableMeta tableMeta = tableMetaService.getTable( tableName );
        if( tableMeta == null ){
            return null;
        }


       return db.query( tableMeta,condition );
    }
}

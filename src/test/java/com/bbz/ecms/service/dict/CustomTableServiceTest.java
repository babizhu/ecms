package com.bbz.ecms.service.dict;

import com.bbz.ecms.domain.dict.FieldMeta;
import com.bbz.ecms.domain.dict.FieldType;
import com.bbz.ecms.domain.dict.TableMeta;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import org.junit.Test;

import java.util.List;
import java.util.Random;

public class CustomTableServiceTest{

    CustomTableService service = new CustomTableService();
    @Test
    public void testReplace() throws Exception{

        String tableName = "厂房资源";
        TableMeta tableMeta = TableMetaService.INSTANCE.getTable( tableName );

        for( int i = 0; i < 1000; i++ ) {


            DBObject data = new BasicDBObject();

            for( FieldMeta fieldMeta : tableMeta.getFields() ) {
                if( fieldMeta.getFieldType() == FieldType.NUM ) {
                    data.put( fieldMeta.getName(), new Random().nextDouble(  ) );
                } else {
                    data.put( fieldMeta.getName(), "测试" +i );
                }
            }

            data.put( "_id", i );
            service.replace( tableMeta, data);
        }
    }

    @Test
    public void testQuery() throws Exception{

        String tableName = "厂房资源";
        TableMeta tableMeta = TableMetaService.INSTANCE.getTable( tableName );

        DBObject condition = new BasicDBObject(  );
        double f = Double.parseDouble( "38337858" );
//        condition.put( "规划总面积（平方米）", new BasicDBObject( "$gt", f ) );
        condition.put( "规划总面积（平方米）", f );


        List<DBObject> result = service.query( tableName, condition );
        for( DBObject object : result ) {
            System.out.println( object.get( "厂房名称" ) + "\t" + object.get( "规划总面积（平方米）" ));
        }
    }
}
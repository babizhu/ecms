package com.bbz.ecms.service.dict;

import com.bbz.ecms.domain.dict.FieldMeta;
import com.bbz.ecms.domain.dict.FieldType;
import com.bbz.ecms.domain.dict.TableMeta;
import com.google.common.collect.Lists;
import org.junit.Test;

import java.util.List;
import java.util.Map;

import static junit.framework.Assert.assertEquals;

public class TableMetaServiceTest{


    TableMetaService service = TableMetaService.INSTANCE;


    @Test
    public void testGetTable(){
        TableMeta table = service.getTable( "ab" );
        assertEquals(null, table);
    }

    @Test
    public void testGetAll(){
        Map<String, TableMeta> all = service.getAll();
        System.out.println( all );
    }

    @Test
    public void testReplace() throws Exception{
        TableMeta meta = new TableMeta();
        meta.setName( "厂房资源" );
        meta.setDesc( "厂房资源的相关数据表meta信息" );
        List<FieldMeta> fields = Lists.newArrayList();
        FieldMeta field = new FieldMeta( FieldType.STRING, "厂房名称", "" );
        fields.add( field );
        field = new FieldMeta( FieldType.NUM, "占地面积（亩）", "" );
        fields.add( field );
        field = new FieldMeta( FieldType.NUM, "建成面积（平方米）", "" );
        fields.add( field );
        field = new FieldMeta( FieldType.NUM, "规划总面积（平方米）", "" );
        fields.add( field );
        field = new FieldMeta( FieldType.NUM, "已招商面积（平方米）", "" );
        fields.add( field );
        field = new FieldMeta( FieldType.NUM, "建成剩余面积（平方米）", "" );
        fields.add( field );

        field = new FieldMeta( FieldType.NUM, "使用情况", "" );
        fields.add( field );



        meta.setFields( fields );

        service.replace( meta );
    }
}
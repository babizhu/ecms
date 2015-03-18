package com.bbz.ecms.domain.dict;

import com.bbz.tool.common.StrUtil;
import com.google.common.collect.Lists;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import lombok.Data;

import java.util.List;

/**
 * user         LIUKUN
 * time         2015/3/17 23:04
 * 自定义表格
 */

@Data
public class TableMeta{
    /**
     * 用逗号分隔的表格中一个字段的属性数量，方便从数据库恢复，例如目前的属性有：
     * 名称，描述，类型一共三个
     */
    private static final int FIELD_PROP_CONTENT = 3;
    private String  name;
    private String  desc;
    private List<FieldMeta>   fields;

    /**
     * 通过dbobject来初始化一个类
     * @param obj   数据库的内容
     */
    public TableMeta( DBObject obj ){
        name = obj.get( "_id" ).toString();
        desc = obj.get( "desc" ).toString();
        restoreField( obj.get( "fields" ).toString() );

    }

    public TableMeta(){

    }




    public DBObject encode(){
        DBObject obj = new BasicDBObject();
        obj.put( "_id", name );
        obj.put( "desc", desc );

        obj.put( "fields", buildField() );

        return obj;
    }

    /**
     * 把每个字段的信息用逗号分隔后保存到数据库中
     * @return
     */
    private String buildField(){
        StringBuilder sb = new StringBuilder(  );
        for( FieldMeta field : fields ) {
            sb.append( field.getName() ).append( "," )
                    .append( field.getDesc() ).append( "," )
                    .append( field.getFieldType() ).append( "," );
        }

        StrUtil.removeLastChar( sb );
        return sb.toString();

    }

    /**
     * 把用逗号分隔的字段信息还原到内存中
     * @return
     */
    private void restoreField( String content ){
        fields = Lists.newArrayList();
        String[] split = content.split( "," );
        for( int i = 0; i < split.length; i += FIELD_PROP_CONTENT ) {
            FieldType type = FieldType.valueOf( split[i+2] );
            FieldMeta field = new FieldMeta( type, split[i], split[i+1] );
            fields.add( field );
        }

    }


}

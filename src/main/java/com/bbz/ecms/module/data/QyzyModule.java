package com.bbz.ecms.module.data;

import com.bbz.ecms.domain.data.Qyzy;
import com.bbz.ecms.module.util.ExcelUtil;
import com.bbz.ecms.service.data.QyzyService;
import com.bbz.ecms.service.user.UserService;
import com.bbz.ecms.shiro.ShiroDbRealm;
import com.bbz.tool.common.StrUtil;
import com.google.common.base.Strings;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.nutz.ioc.annotation.InjectName;
import org.nutz.ioc.loader.annotation.Inject;
import org.nutz.ioc.loader.annotation.IocBean;
import org.nutz.mvc.adaptor.JsonAdaptor;
import org.nutz.mvc.annotation.AdaptBy;
import org.nutz.mvc.annotation.At;
import org.nutz.mvc.annotation.Ok;
import org.nutz.mvc.annotation.Param;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Random;

/**
 * user         LIUKUN
 * time         2015-3-31 16:31
 */

@SuppressWarnings("unused")
@IocBean
@InjectName
@At("/qyzy")
@Ok("json")
public class QyzyModule{

    @Inject
    private QyzyService qyzyService;

    public static final String RESULT = "{\"success\":true,\"message\":\"数据提交完毕 \",\"data\":[]}";

    public QyzyModule(){
//        Ioc ioc = Mvcs.getIoc();
        //service = ioc.get(QyzyService.class);
    }

    @At
    public List<Qyzy> read( @Param("name") String name,
                            @Param("zdmjMin") String zsmjMin,
                            @Param("zdmjMax") String zsmjMax ){


        return qyzyService.list( buildCondition( name, zsmjMin, zsmjMax ) );

    }

    private String buildCondition( String name, String zsmjMin, String zsmjMax ){
        String condition = "1";
        if( !Strings.isNullOrEmpty( name ) ) {
            condition += " and name  LIKE '%" + name + "%'";
        }
        if( !Strings.isNullOrEmpty( zsmjMin ) ) {
            condition += " and zdmj  >= " + zsmjMin;
        }
        if( !Strings.isNullOrEmpty( zsmjMax ) ) {
            condition += " and zdmj  <= " + zsmjMax;
        }

        condition += " order by id desc";

        System.out.println( condition );
        return condition;
    }

    @At
    @Ok("raw")
    @AdaptBy(type = JsonAdaptor.class)
    public String insert( @Param("data") Qyzy[] qyzys ){

        String ids = "";
        for( Qyzy qyzy : qyzys ) {

            System.out.println( qyzy );
            qyzyService.insert( qyzy );
            //{"id":10
            ids += "\"id\":";
            ids += qyzy.getId();
            ids += ",";
        }
        ids = StrUtil.removeLastChar( ids );
        return "{\"success\":true,\"message\":\"数据提交完毕 \",\"data\":[{" + ids + "}]}";
    }

    @At
    @Ok("raw")
    @AdaptBy(type = JsonAdaptor.class)
    public String delete( @Param("data") Qyzy[] qyzys ){
//

//        for( Qyzy qyzy : qyzys ) {
//            System.out.println( qyzy );
//            qyzyService.delete( qyzy );
//        }
        qyzyService.delete( qyzys );
        //qyzyService.deletex( qyzys );
        return RESULT;
    }

    @At
    @Ok("raw")
    @AdaptBy(type = JsonAdaptor.class)
    public String update( @Param("data") Qyzy[] qyzys ){

        qyzyService.update( qyzys );
        return RESULT;
    }

    @At
    public void insert1(){
        ShiroDbRealm shiroDbRealm = new ShiroDbRealm();
        UserService userService = shiroDbRealm.getUserService();
        System.out.println( userService );

        System.out.println( "QyzyModule.insert1" );
        Random r = new Random();
        for( int i = 0; i < 10000; i++ ) {

            Qyzy qyzy = new Qyzy();
            qyzy.setName( "qyzy" + i );
            qyzy.setGhzmj( r.nextFloat() * 10000 );
            qyzy.setJcmj( r.nextFloat() * 10000 );
            qyzy.setJcsymj( r.nextFloat() * 10000 );
            qyzy.setSyqk( r.nextFloat() * 10000 );
            qyzy.setYzsmj( r.nextFloat() * 10000 );
            qyzy.setZdmj( r.nextFloat() * 10000 );

            qyzyService.insert( qyzy );
        }
    }

    @At
    @Ok("void")
    public void toExcel( @Param("name") String name,
                         @Param("zdmjMin") String zsmjMin,
                         @Param("zdmjMax") String zsmjMax,
                         @Param("meta") String excelMeta,
                         HttpServletResponse response ) throws IOException{

        response.setHeader( "Content-Type", "application/force-download" );
        response.setHeader( "Content-Type", "application/vnd.ms-excel" );
        response.setHeader( "Content-Disposition", "attachment;filename=export.xls" );

        List<Qyzy> qyzyList = qyzyService.list( buildCondition( name, zsmjMin, zsmjMax ) );

        HSSFWorkbook wb = ExcelUtil.exportExcelForStudent( qyzyList.toArray(), excelMeta, Qyzy.class );


        ServletOutputStream outputStream = response.getOutputStream();
        wb.write( outputStream );

    }

}


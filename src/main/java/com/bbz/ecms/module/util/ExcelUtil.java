package com.bbz.ecms.module.util;

/**
 * user         LIUKUN
 * time         2015-4-3 10:42
 */


import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.regex.Pattern;
//        import org.apache.poi.xssf.usermodel.XSSFCellStyle;

public class ExcelUtil{
//    static FilePool pool = new NutFilePool("~/tmp/excel",10);

    public static HSSFWorkbook exportExcelForStudent( Object[] list, String meta, Class clazz ){        //创建excel文件对象

        String[] metaArr = meta.split( "," );
        String[] titles = new String[metaArr.length/2];
        String[] fields = new String[metaArr.length/2];
        for( int i = 0; i < meta.split( "," ).length; i+=2 ) {
            titles[i/2] = metaArr[i];
            fields[i/2] = metaArr[i+1];

        }

        HSSFWorkbook wb = new HSSFWorkbook();
        //创建一个张表
        Sheet sheet = wb.createSheet();
        //创建第一行
        //Row row = sheet.createRow( 0 );
        //创建第二行
        Row row1 = sheet.createRow( 0 );
        // 文件头字体
        Font font0 = createFonts( wb, Font.BOLDWEIGHT_BOLD, "宋体", false,                (short) 200 );
        Font font1 = createFonts( wb, Font.BOLDWEIGHT_NORMAL, "宋体", false,
                (short) 200 );
        // 合并第一行的单元格
        //sheet.addMergedRegion( new CellRangeAddress( 0, 0, 0, 1 ) );
//        //设置第一列的文字
//        createCell( wb, row, 0, "总数", font0 );
//        //合并第一行的2列以后到8列（不包含第二列）
//        sheet.addMergedRegion( new CellRangeAddress( 0, 0, 2, 8 ) );
//        //设置第二列的文字
//        createCell( wb, row, 2, "基本信息", font0 );
        //给第二行添加文本
        int j = 0;
        for( String title : titles ) {
            createCell( wb, row1, j++, title, font0 );
        }
//        createCell( wb, row1, 0, "序号", font1 );
//        createCell( wb, row1, 1, "版本", font1 );
//        createCell( wb, row1, 2, "姓名", font1 );
//        createCell( wb, row1, 3, "性别", font1 );
//        createCell( wb, row1, 4, "年龄", font1 );
//        createCell( wb, row1, 5, "年级", font1 );
//        createCell( wb, row1, 6, "学校", font1 );
//        createCell( wb, row1, 7, "父母名称", font1 );
//        createCell( wb, row1, 8, "籍贯", font1 );
//        createCell( wb, row1, 9, "联系方式", font1 );
        //第三行表示
        int l = 1;
        //这里将学员的信心存入到表格中
        for( int i = 0; i < list.length; i++ ) {
            //创建一行
            Row rowData = sheet.createRow( l++ );
            Object qyzy = list[i];

            //Class<Qyzy> qyzyClass = Qyzy.class;
            j = 0;
            for( String field : fields ) {
                try {
                    Field declaredField = clazz.getDeclaredField( field );
                    declaredField.setAccessible(true);
                    Object value = declaredField.get( qyzy );
                    //createCell( wb, rowData, j++, value.toString(), font1 );\
                    Cell cell = rowData.createCell( j++ );
                    Class<?> type = declaredField.getType();
                    if( type == Integer.class || type == Float.class ){
                        cell.setCellValue( Float.parseFloat( value.toString() ) );
                    }
                    else {
                        cell.setCellValue( value.toString() );

                    }
                    //System.out.println( field + " value = " + value);
                } catch( IllegalAccessException e ) {
                    e.printStackTrace();
                } catch( NoSuchFieldException e ) {
                    e.printStackTrace();
                }

            }

//            createCell( wb, rowData, 0, String.valueOf( i + 1 ), font1 );
//            createCell( wb, rowData, 1, "3.0", font1 );
//            createCell( wb, rowData, 2, qyzy.getName(), font1 );
//            createCell( wb, rowData, 3, "0", font1 );
//            createCell( wb, rowData, 4, "0", font1 );
//            createCell( wb, rowData, 5, "0", font1 );
//            createCell( wb, rowData, 6, "0", font1 );
//            createCell( wb, rowData, 7, "0", font1 );
//            createCell( wb, rowData, 8, "0", font1 );
//            createCell( wb, rowData, 9, "0", font1 );

        }

        try {
            File f = new File("e:\\xx.xls");

            FileOutputStream os = new FileOutputStream(f);
            wb.write(os);
            os.close();
        } catch( IOException e ) {
            e.printStackTrace();
        }
        return wb;
    }

    /**
     * 创建单元格并设置样式,值
     *
     * @param wb
     * @param row
     * @param column
     * @param
     * @param
     * @param value
     */
    public static void createCell( Workbook wb, Row row, int column,
                                   String value, Font font ){
        Cell cell = row.createCell( column );
        cell.setCellValue( value );
        CellStyle cellStyle = wb.createCellStyle();
        //cellStyle.setAlignment( XSSFCellStyle.ALIGN_CENTER );
        //cellStyle.setVerticalAlignment( XSSFCellStyle.VERTICAL_BOTTOM );
        cellStyle.setFont( font );
        cell.setCellStyle( cellStyle );
    }

    /**
     * 设置字体
     *
     * @param wb
     * @return
     */
    public static Font createFonts( Workbook wb, short bold, String fontName,
                                    boolean isItalic, short hight ){
        Font font = wb.createFont();
        font.setFontName( fontName );
        font.setBoldweight( bold );
        font.setItalic( isItalic );
        font.setFontHeight( hight );
        return font;
    }

    /**
     * 判断是否为数字
     *
     * @param str
     * @return
     */
    public static boolean isNumeric( String str ){
        if( str == null || "".equals( str.trim() ) || str.length() > 10 )
            return false;
        Pattern pattern = Pattern.compile( "^0|[1-9]\\d*(\\.\\d+)?$" );
        return pattern.matcher( str ).matches();
    }

}


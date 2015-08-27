package com.bbz.ecms.module.util;

import org.nutz.mvc.annotation.At;
import org.nutz.mvc.annotation.Ok;
import org.nutz.mvc.annotation.Param;

import javax.servlet.http.HttpServletResponse;

/**
 * user         LIUKUN
 * time         2015-4-2 14:18
 */

@At("/util")

public class Util{

    @At
    @Ok("raw")
    public String  exportExcelGrid(@Param("exportContent") String exportContent, HttpServletResponse response ){
        System.out.println( exportContent);
        response.setHeader("Content-Type","application/force-download");
        response.setHeader("Content-Type","application/vnd.ms-excel");
        response.setHeader("Content-Disposition","attachment;filename=export.xls");
        return exportContent;
    }
}

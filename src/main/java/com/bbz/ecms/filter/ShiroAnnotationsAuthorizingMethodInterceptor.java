package com.bbz.ecms.filter;

import org.apache.shiro.aop.MethodInvocation;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.aop.AnnotationsAuthorizingMethodInterceptor;

/**
 * user         LIUKUN
 * time         2015-3-17 16:48
 */

public class ShiroAnnotationsAuthorizingMethodInterceptor extends AnnotationsAuthorizingMethodInterceptor{

    public static final ShiroAnnotationsAuthorizingMethodInterceptor DEFAULT_AUTH = new ShiroAnnotationsAuthorizingMethodInterceptor();

    public void assertAuthorized(MethodInvocation methodInvocation) throws AuthorizationException{
        super.assertAuthorized(methodInvocation);
    }
}
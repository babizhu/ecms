package com.bbz.ecms.module.user;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.apache.shiro.session.SessionException;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ThreadContext;
import org.nutz.mvc.Mvcs;
import org.nutz.mvc.View;
import org.nutz.mvc.annotation.At;
import org.nutz.mvc.annotation.Ok;
import org.nutz.mvc.annotation.Param;
import org.nutz.mvc.view.JspView;
import org.nutz.mvc.view.ServerRedirectView;
import org.nutz.mvc.view.ViewWrapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.util.Map;

/**
 * user         LIUKUN
 * time         2015-3-17 17:36
 */

//下面三排不知道有什么用处，原来的代码有，我把它删除了，暂时未见异常

//@IocBean
//@InjectName
//@Filters
public class LoginModule{
    private static Logger logger = LoggerFactory.getLogger( LoginModule.class );

    @At("/login")
    public View login(ServletRequest request, ServletResponse response, @Param("username") String username,
                      @Param("password") String password, @Param("rememberMe") boolean rememberMe) {

        System.out.println( "request = [" + request + "], response = [" + response + "], username = [" + username + "], password = [" + password + "], rememberMe = [" + rememberMe + "]" );

        String host = request.getRemoteHost();
        AuthenticationToken token = new UsernamePasswordToken(username, password, rememberMe, host);
        try {
            Subject subject = SecurityUtils.getSubject();
            ThreadContext.bind( subject );
            subject.login(token);
            return new ViewWrapper(new ServerRedirectView("/"), null);

        } catch (AuthenticationException e) {
            logger.info("验证失败");
            Map<String, Object> msgs = Mvcs.getLocaleMessage( "zh_CN" );
            String errMsg = msgs.get("login_error").toString();
            return new ViewWrapper(new JspView("/index"), errMsg);

        } catch (Exception e) {
            logger.error("登录失败", e);
            return new ViewWrapper(new JspView("/index"), "登录失败");
        }
    }

    @At("/logout")
    @Ok(">>:/")
    @RequiresAuthentication
    public void logout() {
        Subject currentUser = SecurityUtils.getSubject();
        System.out.println(currentUser.getPrincipals( ));
        try {
            currentUser.logout();
        } catch (SessionException ise) {
            logger.debug("Encountered session exception during logout.  This can generally safely be ignored.", ise);
        } catch (Exception e) {
            logger.debug("登出发生错误", e);
        }
    }
}


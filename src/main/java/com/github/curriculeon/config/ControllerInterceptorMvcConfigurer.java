package com.github.curriculeon.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author leonhunter
 * @created 06/07/2020 - 4:17 PM
 */
//@Configuration
public class ControllerInterceptorMvcConfigurer implements WebMvcConfigurer {

//    @Autowired
    private ControllerInterceptor taxiFareRequestInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(taxiFareRequestInterceptor)
                .addPathPatterns("/**/taxifare/**/");
    }
}
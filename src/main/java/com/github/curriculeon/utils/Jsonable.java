package com.github.curriculeon.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Created by leon on 7/10/2020.
 */
public interface Jsonable {
    default String asJsonString() {
        return Jsonifier.jsonify(this);
    }
}
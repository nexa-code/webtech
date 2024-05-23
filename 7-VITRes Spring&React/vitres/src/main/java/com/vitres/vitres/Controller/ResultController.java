package com.vitres.vitres.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vitres.vitres.Entity.Result;
import com.vitres.vitres.Service.ResultService;

import java.util.List;

@RestController
@RequestMapping("/api/results")
@CrossOrigin(origins = "http://localhost:3000")
public class ResultController {
    @Autowired
    private ResultService resultService;

    @GetMapping
    public List<Result> getAllResults() {
        return resultService.getAllResults();
    }

    @PostMapping
    public Result saveResult(@RequestBody Result result) {
        return resultService.saveResult(result);
    }

    @GetMapping("/search/{prn}")
    public Result getResultByPrn(@PathVariable String prn) {
        return resultService.getResultByPrn(prn);
    }
}
package com.vitres.vitres.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vitres.vitres.Entity.Result;
import com.vitres.vitres.Repository.ResultRepository;
@Service
public class ResultService {
    @Autowired
    private ResultRepository resultRepository;

    public List<Result> getAllResults() {
        return resultRepository.findAll();
    }

    public Result saveResult(Result result) {
        return resultRepository.save(result);
    }

    public Result getResultByPrn(String prn) {
        return resultRepository.findByPrn(prn);
    }
}
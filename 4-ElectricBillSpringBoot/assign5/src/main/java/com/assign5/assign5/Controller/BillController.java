package com.assign5.assign5.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;


@Controller
public class BillController {

    @RequestMapping("/")
    public String billForm() {
        return "billForm";
    }

    @PostMapping("/calculate")
    public String calculateBill(@RequestParam("unit") int unit, Model model) {
        double total = 0;

        if (unit > 0) {
            total += calculate(unit, new int[]{1, 50}, 3.50);
            total += calculate(unit, new int[]{51, 150}, 4);
            total += calculate(unit, new int[]{151, 250}, 5.20);
            total += calculate(unit, new int[]{251, Integer.MAX_VALUE}, 6.50);
        }

        model.addAttribute("total", total);
        return "billForm";
    }

    private double calculate(int unit, int[] range, double price) {
        int minUnit = Math.min(unit, range[1]); 
        int unitsToCalculate = minUnit - range[0] + 1;
        if (unitsToCalculate < 0) {
            unitsToCalculate = 0; 
        }
        double bill = unitsToCalculate * price; 
        return bill;
    }
}

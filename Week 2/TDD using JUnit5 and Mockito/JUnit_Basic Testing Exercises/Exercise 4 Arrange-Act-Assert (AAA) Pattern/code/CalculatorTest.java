package com.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator instance created");
    }

    @AfterEach
    public void tearDown() {
    
        calculator = null;
        System.out.println("Teardown: Calculator instance destroyed");
    }

    @Test
    public void testAddition() {
        
        int result = calculator.add(10, 5);

        assertEquals(15, result);
    }

    @Test
    public void testAdditionWithZero() {
        int result = calculator.add(7, 0);
        assertEquals(7, result);
    }
}
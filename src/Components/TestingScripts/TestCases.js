
export const test_cases = {


    "Find Mean": {
        input: { 
            1: "[1,2,3,4,5,6,7,8,9]",
            2: "[3,8,14,9,14,100,12]",
            3: "[10,20,30,40,50,60,70,80,90]"
        },
        expected_output: {
            1: 5.0,
            2: 22.857142857142858,
            3: 50.0
        },
        function_name: "calculate_mean",    
    },





    "Find RMSE": {
        input: {
            1: "[(1, 2), (2, 4), (3, 6), (4, 8), (5, 10)]",
            2: "[(1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]",
            3: "[(1, 2), (2, 3), (3, 4), (4, 5), (5, 6), (6, 7), (7, 20)]"
        },
        expected_output: {
            1: 0.0,
            2: 1.6733200530681511,
            3: 3.319700011034928
        },
        function_name: "calculate_rmse"
    },


    "Newton's Method": {
        input: {
            1: "lambda x: 10*x-10",
            2: "lambda x: -2**x + x**2 - 5",
            3: "lambda x: x**2 + 1"
        },
        expected_output: {
            1: 1,
            2: -2.282,
            3: "Diverges"
        },
        function_name: "newtons_method"

    },



    "Rriemann Approximation of an Integral": {
        input: {
            1: "lambda x: math.sin(x), (-2 * math.pi, 2 * math.pi)",
            2: "lambda x: math.exp(x), (0, 10)",
            3: "lambda x: 1 / (1 + x**2), (-1,1)"
        },
        expected_output: {
            1: 0,
            2: 22025.4657948,
            3: 1.57079632679
        },
        function_name: "riemann_sum"
    }




}
// problemsData.js

// Need to structure this in a way such that changing the name in ProblemInfo.js will automatically update the name here, 
// Add a layer of abstraction to encapsulate both tables?
//Need to do the same in TestCases.js

export const problem_description_and_code = {

    "Find Mean": {
        startingCode: "class UserCode:\n    def calculate_mean(self, numbers):\n",
        description: "$\\ \\ $The arithmetic mean, commonly know as the 'average,' is defined to be: $\\frac{1}{n}\\sum_{i=0}^{n-1} \\ \\ x_i $ $\\text{where n is the number of elements in a zero indexed list and \\ }$ $x_n$ $\\text{is the}$ $n^{th}$ $\\text{point in the list. Complete the python function\\ \\ }$ calculate\_mean() $\\text{so that it returns the average of the list numbers.}$",
        language: "python"
    },

    "Simple Linear Regression": {
        startingCode: "import numpy as np\n\nclass UserCode:\n    def calculate_rmse(self, data):\n",
        description: "You are given a list of points \"Data\" in the form $$[ (x_1,y_1), (x_2,y_2), ...] $$. Develop a simple linear regression model to predict the value of y based on x, then return the Root Mean Squared Error of your model. Recall that that a simple linear regression is modeled by: $$ \\hat{y} = r \\cdot \\frac{\\sigma_y}{\\sigma_x} \\cdot x + \\left( \\bar{y} - r \\cdot \\frac{\\sigma_y}{\\sigma_x} \\cdot \\bar{x} \\right) + \\epsilon $$ . The Root Mean Squared Error is defined to be $$ \\sqrt{\\frac{\\sum_{i=0}^{n - 1} (y_i - \\hat{y}_i)^2}{n}} $$ where n is the number of points in a zero indexed list of tuples or 'points' in the form $$[ (x_1,y_1), (x_2,y_2), ...] $$, $y_i$ is the actual value corresponding to $x_i$, and $\\hat{y}$ is the value predicted by the linear regression model you are to develop.",
        language: "python"
    },

    "Newton's Method": {
        startingCode: "class UserCode:\n    def newtons_method(self, function):\n",
        description: "Newton's method is a root finding algorithm which produces successively better approximations to the roots (or zeroes) of a function. Begin with an arbitrary guess $x_0$ then repeat the process by using the formula:   $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ . Given a function \"function\", return an approximation of the zeros or the string \"Diverges\" if the function has no zeros.",
        language: "python"

    },
    
    "Producer-Consumer": {
        startingCode: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <pthread.h>\n#include <unistd.h>\n#include <semaphore.h>\n#include \"array.h\"\n\n#define ARR_SIZE 10                       // max elements in arr\n\ntypedef struct {\n    \n} arr;\n\nint arr_init() {\n \n}\n\nint  arr_put (){\n\n}\n\nint arr_get() {\n    \n}",
        description: "Implement the Producer-Consumer problem using threads in C programming language.",
        language: "c"
    },

    "Riemann Approximation of an Integral": {
        startingCode: "import math\nclass UserCode:\n    def riemann_sum(self, f, points):\n",
        description: "The Riemann definition of an integral states that $\\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x, \\text{ where } \\Delta x =\\ \\ \\frac{b - a}{n}$ and $x_i = a+\\Delta x*i$ . You are given a function 'f' and a interval 'points' in the form (a,b). Complete the python function riemann_sum to return an approximation of the integral of f between points a and b.",
        language: "python"
    },

    "Build a Vector": {
        startingCode: "#include <stdexcept>\n\ntemplate <typename Type>\nclass Vector {\n    private:\n        Type* data;\n        size_t size;\n        size_t capacity;\n\n    public:\n        Vector() : data(nullptr), size(0), capacity(0) {}\n\n        void push_back(const Type& value) {\n            //TODO\n        }\n\n        Type pop_back() {\n            //TODO\n        }\n\n        int get_capacity() {\n            //TODO\n        }\n\n        int get_size() {\n            //TODO\n        }\n};",
        description: "Build a vector, bro",
        language: "cpp"
    },

    
};

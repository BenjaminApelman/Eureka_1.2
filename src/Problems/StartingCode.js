// problemsData.js

export const problem_description_and_code = {

    "Find Mean": {
        startingCode: "class UserCode:\n    def calculate_mean(self, numbers):\n",
        description: "Write a function to calculate the mean of a list of numbers in Python.",
        language: "python"
    },

    "Find RMSE": {
        startingCode: "import numpy as np\n\nclass UserCode:\n    def calculate_rmse(self, data):\n",
        description: "\[ \int_{a}^{b} x^2 \,dx \]",
        language: "python"
    },

    "Newton's Method": {
        startingCode: "class UserCode:\n    def newtons_method(self, function):\n",
        description: "Newton's Method is one of the crown jewels of calculus!",
        language: "python"

    },
    
    "Producer-Consumer": {
        startingCode: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <pthread.h>\n#include <unistd.h>\n#include <semaphore.h>\n#include \"array.h\"\n\n#define ARR_SIZE 10                       // max elements in arr\n\ntypedef struct {\n    \n} arr;\n\nint arr_init() {\n \n}\n\nint  arr_put (){\n\n}\n\nint arr_get() {\n    \n}",
        description: "Implement the Producer-Consumer problem using threads in C programming language.",
        language: "c"
    },

    "Dinning Philosophers": {
        startingCode: "#include <stdio.h>\nint main() {\n    for (int i = 0; i < 10; i++) {\n        printf(\"i = %d\", i);\n    }\n    return 0;\n}",
        description: "A classic in Operating systems",
        language: "c"
    },

    "Riemann Approximation of an Integral": {
        startingCode: "import math\nclass UserCode:\n    def riemann_sum(self, f, points):\n",
        description: "Find that integral babby",
        language: "python"
    },

    "Build a Vector": {
        startingCode: "#include <stdexcept>\n\ntemplate <typename Type>\nclass Vector {\n    private:\n        Type* data;\n        size_t size;\n        size_t capacity;\n\n    public:\n        Vector() : data(nullptr), size(0), capacity(0) {}\n\n        void push_back(const Type& value) {\n            //TODO\n        }\n\n        Type pop_back() {\n            //TODO\n        }\n\n        int get_capacity() {\n            //TODO\n        }\n\n        int get_size() {\n            //TODO\n        }\n};",
        description: "Build a vector, bro",
        language: "cpp"
     }

    
};

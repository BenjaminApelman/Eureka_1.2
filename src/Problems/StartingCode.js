// problemsData.js

import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";

// Need to structure this in a way such that changing the name in ProblemInfo.js will automatically update the name here, 
// Add a layer of abstraction to encapsulate both tables?
//Need to do the same in TestCases.js

export const problem_description_and_code = {

    "Find Mean": {
        startingCode: "class UserCode:\n    def calculate_mean(self, numbers: list) -> float:\n",
        description: "$\\ \\ $The arithmetic mean, commonly know as the 'average,' is defined to be: $\\frac{1}{n}\\sum_{i=0}^{n-1} \\ \\ x_i $ $\\text{where n is the number of elements in a zero indexed list and \\ }$ $x_n$ $\\text{is the}$ $n^{th}$ $\\text{point in the list. Complete the python function\\ \\ }$ calculate\_mean() $\\text{so that it returns the average of the list numbers.}$",
        language: "python"
    },

    "Simple Linear Regression": {
        startingCode: "import numpy as np\n\nclass UserCode:\n    def calculate_rmse(self, data: list[list]) -> float:\n",
        description: "You are given a list of points \"Data\" in the form $$[ (x_1,y_1), (x_2,y_2), ...] $$. Develop a simple linear regression model to predict the value of y based on x, then return the Root Mean Squared Error of your model. Recall that that a simple linear regression is modeled by: $$ \\hat{y} = r \\cdot \\frac{\\sigma_y}{\\sigma_x} \\cdot x + \\left( \\bar{y} - r \\cdot \\frac{\\sigma_y}{\\sigma_x} \\cdot \\bar{x} \\right) + \\epsilon $$ . The Root Mean Squared Error is defined to be $$ \\sqrt{\\frac{\\sum_{i=0}^{n - 1} (y_i - \\hat{y}_i)^2}{n}} $$ where n is the number of points in a zero indexed list of tuples or 'points' in the form $$[ (x_1,y_1), (x_2,y_2), ...] $$, $y_i$ is the actual value corresponding to $x_i$, and $\\hat{y}$ is the value predicted by the linear regression model you are to develop.",
        language: "python"
    },

    "Newton's Method": {
        startingCode: "class UserCode:\n    def newtons_method(self, f: callable) -> float:\n",
        description: "Newton's method is a root finding algorithm which produces successively better approximations to the roots (or zeroes) of a function. Begin with an arbitrary guess $x_0$ then repeat the process by using the formula:   $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.$\\ $ Given a function \"f\" return an approximation of the zeros (with a tolerance for error of 0.1) or the string \"Diverges\" if the function does not come within 0.1 of a zero after 1000 iterations.",
        language: "python"

    },
    
    "Producer-Consumer": {
        startingCode: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <pthread.h>\n#include <unistd.h>\n#include <semaphore.h>\n#include \"array.h\"\n\n#define ARR_SIZE 10                       // max elements in arr\n\ntypedef struct {\n    \n} arr;\n\nint arr_init() {\n \n}\n\nint  arr_put (){\n\n}\n\nint arr_get() {\n    \n}",
        description: "Implement the Producer-Consumer problem using threads in C programming language.",
        language: "c"
    },

    "Riemann Approximation of an Integral": {
        startingCode: "import math\nclass UserCode:\n    def riemann_sum(self, f: callable, domain: tuple[float,float]) -> float:\n",
        description: "The Riemann definition of an integral states that $\\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x, \\text{ where } \\Delta x =\\ \\ \\frac{b - a}{n}$ and $x_i = a+\\Delta x*i$ . You are given a function 'f' and a interval 'domain' in the form (a,b). Complete the python function riemann_sum to return an approximation of the integral of f between points a and b.",
        language: "python"
    },

    "Build a Vector": {
        startingCode: "#include <stdexcept>\n\ntemplate <typename Type>\nclass Vector {\n    private:\n        Type* data;\n        size_t size;\n        size_t capacity;\n\n    public:\n        Vector() : data(nullptr), size(0), capacity(0) {}\n\n        void push_back(const Type& value) {\n            //TODO\n        }\n\n        Type pop_back() {\n            //TODO\n        }\n\n        int get_capacity() {\n            //TODO\n        }\n\n        int get_size() {\n            //TODO\n        }\n};",
        description: "You are given a incomplete template of a vector class: $\\newline \\longrightarrow$  'data' should store the actual contents of the vector $\\newline \\longrightarrow$  'size' should be the actuall number of elements in the vector $\\newline \\longrightarrow$  'capacity' should be the the size of the vector including unallocated spaces. $\\newline$Initially both size and capacity are initialized to 0, your vecotor should dynmically double in capacity as needed, or go from 0 to 1 if empty.",
        language: "cpp"
    },

    "Take Derivative": {
        startingCode: "class UserCode:\n    def f_prime(self, f: callable, x: float) -> float:",
        description: "The derivative of a function f at a point x is defined as $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$. Complete the Python function 'f_prime' so that it returns an approximation of the derivative of f at the point x with a tollerance for error of 0.1",
        language: "python"
    },

    "Build Binary Search Tree": {
        startingCode: "class BinarySearchTree {\n    public: \n        struct Node {\n            int data; \n            Node* left;\n            Node* right;\n        }; \n     \n        BinarySearchTree() : root(nullptr) {}\n\n        Node* Insert(Node* root, int data) { \n            // TODO\n        }\n\n        bool Search(Node* root, int data) { \n            // TODO\n        }\n\n        Node* DeleteNode(Node* root, int key) { \n            // TODO\n        }\n\n    private:\n        Node* root;\n};",
        description: "You are given an incomplte binary search tree class. Recall that all left children of a node in a binary search tree must be lesser or equal to the value of that node, and all right children must be greater. $\\newline$ $\\newline$ $\\longrightarrow$  The insert function should add a node to the binary search tree while maintining this property, do not rotate the tree. $\\newline$ $\\newline$ $\\longrightarrow$  The serch function should return true if a value 'data' is in a tree and false otherwise. $\\newline$ $\\newline$  $\\longrightarrow$  DeleteNode should remove a value 'target' from the tree, if target has both left and right children, replace it with the smallest value from the right sub-tree.",
        language: "cpp"
    },

    "Build an AVL Tree": {
        startingCode: "class AVLTree { \n    public: \n        struct Node { \n            int key; \n            Node* left; \n            Node* right; \n            int height; \n\n            Node(int key) : key(key), left(nullptr), right(nullptr), height(1) {} \n        }; \n\n        AVLTree() : root(nullptr) {} \n\n        Node* getRoot(){return root;}\n\n        void insert(int key) { \n            root = insert(root, key); \n        }\n\n        void remove(int key){\n            remove(root,key);\n        }\n\n    private: \n        Node* root; \n\n        Node* rightRotate(Node* y) { /*TODO*/ } \n\n        Node* leftRotate(Node* x) { /*TODO*/ } \n\n        Node* insert(Node* node, int key) { /*TODO*/ } \n\n        Node* remove(Node* node, int key){/*TODO*/}\n}; ",
        description: "Just build an AVL tree man, its not that hard.",
        language: "cpp"
    },

    "Find Evens": {
        startingCode: "import numpy as np\n\nclass UserCode:\n    def find_evens(self, arr: list[int]) -> list[int]:",
        description: "Given an array of integres \"arr\" return a new list that contains only the even numbers from arr. You must maintain the original ordering. Using Numpy it is possible to accomplish this without using any loops.",
        language: "python"

    },

    "Give Raises": {
        startingCode: "import pandas as pd \n\nclass UserCode:\n    def give_raises(self, employees: pd.DataFrame) -> pd.DataFrame:\n",
        description: "Every year an employee has worked for your company, they recive a 10% raise, if an employee has worked for a multiple of 12 months increae their salary by 10%. Return the the dataframe with updated salaries.",
        language: "python"
    },

    

    
};

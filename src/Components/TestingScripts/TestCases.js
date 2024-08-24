
export const test_cases = {


    "Find Mean": {
        input: { 
            1: "[1,2,3,4,5,6,7,8,9]",
            2: "[3,8,14,9,14,100,12]",
            3: "[10,20,30,40,50,60,70,80,90]"
        },
        input_type: "py1d",
        output_type: "standard",
        expected_output: {
            1: 5.0,
            2: 22.857142857142858,
            3: 50.0
        },
        function_name: "calculate_mean",    
    },


    "Simple Linear Regression": {
        input: {
            1: "[(1, 2), (2, 4), (3, 6), (4, 8), (5, 10)]",
            2: "[(1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]",
            3: "[(1, 2), (2, 3), (3, 4), (4, 5), (5, 6), (6, 7), (7, 20)]"
        },
        input_type: "py1d",
        output_type: "standard",
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
        input_type: "py1d",
        output_type: "standard",
        expected_output: {
            1: 1,
            2: -2.282,
            3: "Diverges"
        },
        function_name: "newtons_method"

    },


    "Riemann Approximation of an Integral": {
        input: {
            1: "lambda x: math.sin(x), (-2 * math.pi, 2 * math.pi)",
            2: "lambda x: math.exp(x), (0, 10)",
            3: "lambda x: 1 / (1 + x**2), (-1,1)"
        },
        input_type: "py2d",
        output_type: "standard",        
        expected_output: {
            1: 0,
            2: 22025.4657948,
            3: 1.57079632679
        },
        function_name: "riemann_sum"
    },


    
    "Build a Vector": {
        input: {
            1: "Vector<int> user_vector;  \n\nfor(int i = 0; i<10; i++){ \n    user_vector.push_back(i); \n} \n\nsize_t vector_capacity = user_vector.get_capacity(); \nstd::cout << vector_capacity << std::endl;",
            2: "Vector<std::string> user_vector; \n\nuser_vector.push_back(\"+\"); \nuser_vector.push_back(\"+\"); \nuser_vector.push_back(\"C\"); \n\nstd::cout << user_vector.pop_back() << user_vector.pop_back() << user_vector.pop_back();",
            3: "struct person{\n    std::string name;\n    int age;\n};\n\nperson Bill;\nBill.age = 42;\nBill.name = \"Bill\";\nVector<person> people;\npeople.push_back(Bill);\nperson guy = people.pop_back();\n\nstd::cout<<guy.name<<guy.age;"
          },
        input_type: "cpp_custom_class",
        output_type: "standard",
        expected_output: {
            1: 16,
            2: "C++",
            3: "Bill42"
        },
        test_code: "#include <sstream>\n#include <iostream>\n\nint main() {\n    std::stringstream buffer;  // Create a stringstream to capture output\n    std::streambuf* old_cout = std::cout.rdbuf(buffer.rdbuf());  // Redirect cout to the stringstream\n\n    {\n        Vector<int> user_vector;\n        for (int i = 0; i < 10; i++) {\n            user_vector.push_back(i);\n        }\n    \n        size_t vector_capacity = user_vector.get_capacity();\n        std::cout <<\"result777: [\" << vector_capacity << \",\";\n    }\n\n    {\n        Vector<std::string> user_vector;\n\n        user_vector.push_back(\"+\");\n        user_vector.push_back(\"+\");\n        user_vector.push_back(\"C\");\n\n        std::cout << \"\\\"\" << user_vector.pop_back() << user_vector.pop_back() << user_vector.pop_back() << \"\\\"\" << \",\";\n    }\n\n    {\n        struct person {\n            std::string name;\n            int age;\n        };\n\n        person Bill;\n        Bill.age = 42;\n        Bill.name = \"Bill\";\n\n        Vector<person> people;\n\n        people.push_back(Bill);\n\n        person guy = people.pop_back();\n\n        std::cout << \"\\\"\" << guy.name <<  guy.age << \"\\\"\";\n    }\n\n    std::string output = buffer.str();  // Get the captured output from the stringstream\n    std::cout.rdbuf(old_cout);  // Restore cout to its original state\n\n    std::cout << output << \"]\";\n\n    return 0;\n}"
    },
      
      

    "Take Derivative": {
        input: {
            1: "lambda x : x**2, 4",
            2: "lambda x: x, 12345",
            3: "lambda x: 3**x - x**6, -0.5"
        },
        input_type: "py2d",
        output_type: "standard",
        expected_output: {
            1: 8,
            2: 1,
            3: 0.8217782
        },
        function_name: "f_prime"
    },

    
    "Build Binary Search Tree": {
        input: {
            1: "BinarySearchTree user_bst = BinarySearchTree();\n\nBinarySearchTree::Node* root = user_bst.Insert(nullptr, 10);\n\nfor(int i = 10; i>0; i--){\n    if(i%2 == 0){\n        user_bst.Insert(root, i*2);\n    }\n    else{\n        user_bst.Insert(root, i);\n    }\n}\n\nprintBSTInorder(root);",
            2: "BinarySearchTree user_bst = BinarySearchTree();\n\nBinarySearchTree::Node* root = user_bst.Insert(nullptr, 10);\n\nfor(int i = 10; i>0; i--){\n    if(i%2 == 0){\n        user_bst.Insert(root, i*2);\n    }\n    else{\n        user_bst.Insert(root, i);\n    }\n}\n\nfor(int i = 0; i<10; i++){\n    user_bst.DeleteNode(root, i);\n}\n    \nprintBSTInorder(root);",
            3: "BinarySearchTree user_bst = BinarySearchTree();\n\nBinarySearchTree::Node* root = user_bst.Insert(nullptr, 10);\n\nfor(int i = 10; i>0; i--){\n    if(i%2 == 0){\n        user_bst.Insert(root, i*2);\n    }\n    else{\n        user_bst.Insert(root, i);\n    }\n}\n\nfor(int i = 1; i<=20; i++){\n    if(!user_bst.Search(root, i)){\n        user_bst.Insert(root, i);\n    }\n}\nprintBSTInorder(root);"
        },
        input_type: "cpp_custom_class",
        output_type: "standard",
        expected_output: {
                "1": "1-3-4-5-7-8-9-10-12-16-20-",
                "2": "10-12-16-20-",
                "3": "1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-"
        },
        test_code: "#include <sstream>\n#include <iostream>\n\nvoid printBSTInorder(BinarySearchTree::Node* root){\n    if (root == nullptr) return;\n    printBSTInorder(root->left);\n    std::cout << root->data << \"-\";\n    printBSTInorder(root->right);\n    return;\n}  \n\nint main() {\n    std::stringstream buffer;  // Create a stringstream to capture output\n    std::streambuf* old_cout = std::cout.rdbuf(buffer.rdbuf());  // Redirect cout to the stringstream\n    std::cout <<\"result777: [\";\n    //Test 1\n    {\n        BinarySearchTree user_bst = BinarySearchTree();\n        BinarySearchTree::Node* root = user_bst.Insert(nullptr, 10);\n\n        for(int i = 10; i>0; i--){\n            if(i%2 == 0){\n                user_bst.Insert(root, i*2);\n            }\n            else{\n                user_bst.Insert(root, i);\n            }\n        }\n        std::cout << \"\\\"\";\n        printBSTInorder(root);\n        std::cout << \"\\\"\";\n        std::cout << \",\";\n    }\n\n    //Test 2\n    {\n        BinarySearchTree user_bst = BinarySearchTree();\n        BinarySearchTree::Node* root = user_bst.Insert(nullptr, 10);\n\n        for(int i = 10; i>0; i--){\n            if(i%2 == 0){\n                user_bst.Insert(root, i*2);\n            }\n            else{\n                user_bst.Insert(root, i);\n            }\n        }\n\n        for(int i = 0; i<10; i++){\n            user_bst.DeleteNode(root, i);\n        }\n\n        std::cout << \"\\\"\";   \n        printBSTInorder(root);\n        std::cout << \"\\\"\";\n        std::cout << \",\";\n    }\n\n    //Test 3\n    {\n        BinarySearchTree user_bst = BinarySearchTree();\n        BinarySearchTree::Node* root = user_bst.Insert(nullptr, 10);\n\n        for(int i = 10; i>0; i--){\n            if(i%2 == 0){\n                user_bst.Insert(root, i*2);\n            }\n            else{\n                user_bst.Insert(root, i);\n            }\n        }\n\n        for(int i =1; i<=20; i++){\n            if(!user_bst.Search(root, i)){\n                user_bst.Insert(root, i);\n            }\n        }\n        std::cout << \"\\\"\";\n        printBSTInorder(root);\n        std::cout << \"\\\"\";\n    }\n\n    std::string output = buffer.str();  // Get the captured output from the stringstream\n    std::cout.rdbuf(old_cout);  // Restore cout to its original state\n    std::cout << output << \"]\";\n}\n"
    },


    "Build an AVL Tree": {
        input: {
            1: "AVL_Tree user_avl = AVL_Tree();\n\nfor(int i = 1; i<=16; i++){\n    user_avl.insert(i);\n}\n\ninorder(user_avl.getRoot());",
            2: "AVL_Tree user_avl = AVL_Tree();\n\nfor(int i = 0; i<=24; i++){\n    user_avl.insert(i);\n}\n\nfor(int i = 0; i<=24; i++){\n    if(i%2==1)\n        user_avl.remove(i);\n}\n\ninorder(user_avl.getRoot());",
            3: "AVL_Tree user_avl = AVL_Tree();\n\nfor(int i = 1; i<256; i++){\n    user_avl.insert(i);\n}\n\nstd::cout << calculateDepth(user_avl.getRoot());"
        },
        input_type: "cpp_custom_class",
        output_type: "standard",
        expected_output: {
            "1": "1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-",
            "2": "0-2-4-6-8-10-12-14-16-18-20-22-24-",
            "3": "8"
        },
        test_code:  "#include <sstream>\n" +
                     "#include <iostream>\n\n" +
                     "int calculateDepth(AVL_Tree::Node* root){\n" +
                     "    if(root == nullptr){\n" +
                     "        return 0;\n" +
                     "    }\n" +
                     "    return std::max(calculateDepth(root->left), calculateDepth(root->right)) + 1;\n" +
                     "}\n\n" +
                     "void inorder(AVL_Tree::Node* root){\n" +
                     "    if(!root) return;\n" +
                     "    inorder(root->left);\n" +
                     "    std::cout << root->key << \"-\";\n" +
                     "    inorder(root->right);\n" +
                     "}\n" +
                     "int main() {\n" +
                     "    std::stringstream buffer;\n" +
                     "    std::streambuf* old_cout = std::cout.rdbuf(buffer.rdbuf());\n" +
                     "    std::cout << \"result777: [\";\n" +
                     "    //Test 1\n" +
                     "    {\n" +
                     "        AVL_Tree user_avl = AVL_Tree();\n" +
                     "        for(int i = 1; i <= 16; i++){\n" +
                     "            user_avl.insert(i);\n" +
                     "        }\n" +
                     "        std::cout << \"\\\"\";\n" +
                     "        inorder(user_avl.getRoot());\n" +
                     "        std::cout << \"\\\"\";\n" +
                     "        std::cout << \",\";"+
                     "    }\n" +
                     "    // Test 2\n" +
                     "    {\n" +
                     "        AVL_Tree user_avl = AVL_Tree();\n" +
                     "        for(int i = 0; i <= 24; i++){\n" +
                     "            user_avl.insert(i);\n" +
                     "        }\n" +
                     "        for(int i = 0; i <= 24; i++){\n" +
                     "            if(i % 2 == 1)\n" +
                     "                user_avl.remove(i);\n" +
                     "        }\n" +
                     "        std::cout << \"\\\"\";\n" +
                     "        inorder(user_avl.getRoot());\n" +
                     "        std::cout << \"\\\"\";\n" +
                     "        std::cout << \",\";"   +
                     "    }\n" +
                     "    // Test 3\n" +
                     "    {\n" +
                     "        AVL_Tree user_avl = AVL_Tree();\n" +
                     "        for(int i = 1; i < 256; i++){\n" +
                     "            user_avl.insert(i);\n" +
                     "        }\n" +
                     "        std::cout << \"\\\"\";\n" +
                     "        std::cout << calculateDepth(user_avl.getRoot());\n" +
                     "        std::cout << \"\\\"\";\n" +
                     "    }\n" +
                     "    std::string output = buffer.str();\n" +
                     "    std::cout.rdbuf(old_cout);\n" +
                     "    std::cout << output << \"]\";\n" +
                     "}"
    },

    "Find Evens": {
        input: {
            1: "np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])",
            2: "np.array([-99,44,24,11,54,123,55,-77,-200])",
            3: "np.array([10, 9, 8, 7, 6, 5, 4, 3,2, 1])"
        },
        function_name: "find_evens",
        input_type: "py1d",
        output_type: "2dnumpy",
        expected_output: {
            1: [2, 4, 6, 8, 10],
            2: [44, 24, 54, -200],
            3: [10, 8, 6, 4, 2]
        },
    },
    "Give Raises": {
        "input": {
            "1": "pd.DataFrame({\n    'employee_id': [101, 102, 103, 104, 105],\n    'months_employed': [24, 18, 30, 12, 36],\n    'salary': [50000, 45000, 60000, 40000, 100000]\n})",
            "2": "pd.DataFrame({\n    'employee_id': [111, 112, 113, 114, 115],\n    'months_employed': [24, 18, 30, 12, 36],\n    'salary': [51000, 146000, 61000, 410000, 171000]\n})",
            "3": "pd.DataFrame({\n    'employee_id': [121, 122, 123, 124, 125],\n    'months_employed': [24, 18, 30, 12, 36],\n    'salary': [52000, 47000, 62000, 42000, 72000]\n})"
        },
        "function_name": "give_raises",
        "input_type": "dataframe",
        "output_type": "dataframe",
        "expected_output": {
            "1": [55000.0, 45000.0, 60000.0, 44000.0, 110000.0],
            "2": [56100.0, 146000.0, 61000.0, 451000.0, 188100.0],
            "3": [57200.0, 47000.0, 62000.0, 46200.0, 79200.0]
        }
    },
}
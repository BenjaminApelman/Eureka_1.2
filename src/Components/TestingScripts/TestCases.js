
export const test_cases = {


    "Find Mean": {
        input: { 
            1: "[1,2,3,4,5,6,7,8,9]",
            2: "[3,8,14,9,14,100,12]",
            3: "[10,20,30,40,50,60,70,80,90]"
        },
        input_type: "1d",
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
        input_type: "1d",
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
        input_type: "1d",
        expected_output: {
            1: 1,
            2: -2.282,
            3: "Diverges"
        },
        function_name: "newtons_method"

    },




    "Producer-Consumer":{
        input: {
            1: "a",
            2: "b",
            3: "c"
        },
        input_type: "some c wizzardy",
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
        input_type: "2d",
        expected_output: {
            1: 0,
            2: 22025.4657948,
            3: 1.57079632679
        },
        function_name: "riemann_sum"
    },


    

    "Build a Vector": {
        input: {
            1: "Vector<int> user_vector; for(int i = 0; i<10; i++){ user_vector.push_back(i); } size_t vector_size_bytes = user_vector.get_size(); std::cout << vector_size_bytes << std::endl; size_t vector_capacity = user_vector.get_capacity(); std::cout << vector_capacity << std::endl;",
            2: "Vector<std::string> user_vector; user_vector.push_back(\"+\"); user_vector.push_back(\"+\"); user_vector.push_back(\"C\"); std::cout << user_vector.pop_back() << user_vector.pop_back() << user_vector.pop_back();",
            3: "struct person{std::string name;int age;};person Bill;Bill.age=42;Bill.name=\"Bill\";Vector<person> people;people.push_back(Bill);person guy=people.pop_back();std::cout<<guy.name<<guy.age;"
        },
        input_type: "custom_class",
        expected_output: {
            1: 16,
            2: "C++",
            3: "Bill42"
        },
        test_code: 
        `\n
        #include <sstream>
         #include <iostream>
            int main() {
            std::stringstream buffer;  // Create a stringstream to capture output
            std::streambuf* old_cout = std::cout.rdbuf(buffer.rdbuf());  // Redirect cout to the stringstream

            {
                Vector<int> user_vector;
                for (int i = 0; i < 10; i++) {
                    user_vector.push_back(i);
                }
            
                size_t vector_capacity = user_vector.get_capacity();
                std::cout <<"result777: [" << vector_capacity << ",";
            }

            {
                Vector<std::string> user_vector;

                user_vector.push_back("+");
                user_vector.push_back("+");
                user_vector.push_back("C");

                std::cout << "\\""<< user_vector.pop_back() << user_vector.pop_back() << user_vector.pop_back()<< "\\""<<",";
            }

            {
                struct person {
                    std::string name;
                    int age;
                };

                person Bill;
                Bill.age = 42;
                Bill.name = "Bill";

                Vector<person> people;

                people.push_back(Bill);

                person guy = people.pop_back();

                std::cout <<"\\"" << guy.name <<  guy.age <<"\\"";
            }

            std::string output = buffer.str();  // Get the captured output from the stringstream
            std::cout.rdbuf(old_cout);  // Restore cout to its original state

            std::cout << output << "]";

            return 0;
        }`
    }


    


}
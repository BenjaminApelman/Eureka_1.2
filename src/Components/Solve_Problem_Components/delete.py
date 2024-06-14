class UserCode:
    def calculate_mean(self, numbers):
        return 0user_code_instance = UserCode() 

user_code_instance = UserCode() 
result1 = user_code_instance.calculate_mean([1,2,3,4,5,6,7,8,9])
assert result1 == 5
result2 = user_code_instance.calculate_mean([3,8,14,9,14,100,12])
assert result2 == 22.857142857142858
result3 = user_code_instance.calculate_mean([10,20,30,40,50,60,70,80,90])
assert result3 == 50
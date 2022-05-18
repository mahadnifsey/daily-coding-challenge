// Watermelon

Examples
divide(2) == false # 2 = 1 + 1
divide(3) == false # 3 = 1 + 2
divide(4) == true  # 4 = 2 + 2
divide(5) == false # 5 = 2 + 3
divide(6) == true  # 6 = 2 + 4
"""

def divide(weight):
    return False if weight == 2 else weight % 2 == 0

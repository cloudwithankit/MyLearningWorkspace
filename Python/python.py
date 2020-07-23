# ''' hi
# this is
# mutlile ine '''
# print("Hi this is       \\ankit ")
# l
#
#
#
# is = ["egg", "btter", 33, "55"]

# dic = {
#     "song": 'hine',
#     "track": 22,
#     "rollno": 33,
# }

# print(type(dic))
# print(type(str(666)))  # convert to string

# for target_list in dic:
#     print(dic[target_list])
# new_list = list("hello my dear")
# print(new_list)
# print("ankit_"*5 + "repeat")  # repeat by mutltyple

# print("apple" in "pineapple")  # subsrting check

# print(55 in [1, 2, 3, 4, 5])  # No rting check

# if "keye" in "monekey":
#     print("yes key is in monkey ")
# else:
#     print("no")

# count = 15
# while count > 4:
#     print(count)
# #     count -= 1

# name = ["ankit", "amit", "ankita", "kiaan"]
# name.pop()
# while (len(name) < 10):
#     name.append("name"+str((len(name)-1)))

# for n in name:
#     print(n)

# for x in range(10):
#     print x

# print(
#     max([1, 2, 2, 5, ]),
#     min([-1, 3, 3, 4]),
#     sum([1, 2, 2, 2]),
#     sorted("ankdi336t"),
#     list(reversed("ankit")),
#     ''.join((reversed("ankit"))),
#     " you will rip me part".split(" "),
#     "you will find me".find("i"),
#     "you are {1} and {0}??".format("Bob", "Dough")
# )

# working on list
# mylist = ["aaa", "bbb", 1, 2, 3, "ff"]
# copylist = []
# print(
#     mylist,
#     mylist.sort(),
#     mylist.remove("bbb"),
#     # copylist

#     # copylist=mylist.copy()
#     # copylist.append("hi")

# copylist.append(mylist)
# print(copylist)

# nums = [2, 4, 6, 1]

# print(sorted(nums),
#       nums,
#       #   nums.sort()
# #       )

# def igpay(teststr):
#     if(teststr[0] in 'aeiou'):
#         return teststr + "way"
#     else:
#         return teststr[1:]+str(teststr[0])+"ay"


# print(igpay('pig'))


# def roman_dec(test_r):
#     sum = 0

#     dic_r = {
#         "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "M": 1000
#     }
#     for e in list(test_r):

#         sum = sum + dic_r[e]
#     return sum


# data = 0
# if(data is None):
#     print("yes")
# else:
#     print("No")

# animal = {'rat': 'mice',
#           'cat': "rate"
#           }
# print(animal['rat'], animal.get('cat'),
#       animal.get("ank", "gone fishing..."))

# print('mice' in
#       animal)
# print('G', 'F', 'G', sep='')

# for (a, b) in animal.items():
#     print(a, b)

# for itm in animal:
#     print(itm, animal[itm])

# del animal['rat']

# print(animal)

# Nested Dictionary


# userDataDic = {
#     1: {"name": "ankit", 'email': 'aaa@gmail.com'},
#     2: {'name': "amit", 'email': 'bbb@gmail.com'}
# }

# for user, val in userDataDic.items():
#     for key, value in val.items():
#         print(key, value)

# nSet = {'cat', 'bat', 'rat'}
# tup = (1, 'cat', 3)
# nSet.add('ggg')
# # print(updateSet=list(nSet.union(tup)))

# fruits = {'aaple', 'manho', 'banana'}

# for fru in enumerate(fruits):
# #     print(fru)

# heystack = ['hey']*1000000
# heystack[9] = "needle"

# for item in enumerate(heystack):
#     if ("needle" in item):
#         print(item[0], item[1])
#         break

# var = input("enter value ")
# print(var)


# # while True:
# #     num = input("you loose as soon as you enter alphabet")
# #     if not num:
# #         break

# # # print("5".isdigit())
# # try:
# #     int("555 gg")
# # except NameError:
# #     print(" some thing wrong in code ")
# # except ValueError:
# #     print("Some wrong in value ")
# #     raise
# # finally:
# #     print(" my no is", "555")

# # # file handling
# # words = ['abc', 'def', 'ghi']

# # with open("C:\\Users\\a.a.agrawal\\Desktop\\MyLearningWorkspace\\MyLearningWorkspace\\Python\\test.txt", 'a') as output_file:
# #     for word in words:
# #         print(word)
# #         output_file.write(word+'\n')


# import math
# from random import shuffle
# import time as tm
# import itertools as iter
# import datetime
# import zipfile
# # from random import shuffle
# print(math.pi, math.e, math.floor(-15.6))
# cards = [1, 2, 4, 5, 6, 6, 6, 6, 6]
# print(shuffle(cards))
# print(cards)


# # usage of iter library

# for (a, b, c) in iter.combinations(("Jelly", "Butter", "Pasta", "pizza", "seaseme"), 3):
#     print(("How about {} and {} and {} today").format(a, b, c))


# print(tm.localtime(), tm.gmtime())


import csv

# with open('C:\\Users\\a.a.agrawal\\Desktop\\MyLearningWorkspace\\MyLearningWorkspace\\TestUser.csv', "w") as csvfilename:
#     writer = csv.writer(csvfilename)
#     writer.writerow(["id,", "rollno", "Name"])
#     writer.writerow(["2,", "rollno", "Name"])
#     writer.writerow(["3,", "test", "test name 1 "])
#     writer.writerow(["3,", "rollno", "Name@123"])
#     writer.writerow(["5,", "Anit", "Name"])
# import os
# import sys
# sysvalue = str(sys.platform)
# print(sysvalue)


import turtle as td

# print(turtle.left(100))
# print(turtle.right(100))
# print(turtle.fd(60))

# turtle.mainloop()


# def polyg(sd, sz):
#     i = 1
#     angle = (360/sd)
#     while (i <= sd):

#         print(td.left(100))
#         print(td.fd(angle))
#         i -= 1
#     td.mainloop()


# polyg(6, 100)

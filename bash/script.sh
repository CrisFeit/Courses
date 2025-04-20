#! /bin/bash

# ECHO COMMAND
# echo Hello World!

# VARIABLES
# Uppercase by convention
# Letters, numbers, underscores
NAME="Bob"
# echo "My name is $NAME"
# echo "My name is ${NAME}"

# USER INPUT
# read -p "Enter your name: " NAME
# echo "Hello $NAME, nice to meet you!"

# SIMPLE IF STATEMENT
# if [ "$NAME" == "Brad" ]
# then
#   echo "Your name is Brad"
# fi

# IF-ELSE
# if [ "$NAME" == "Brad" ]
# then
#   echo "Your name is Brad"
# else 
#   echo "Your name is NOT Brad"
# fi

# ELSE-IF (elif)
# if [ "$NAME" == "Brad" ]
# then
#   echo "Your name is Brad"
# elif [ "$NAME" == "Jack" ]
# then  
#   echo "Your name is Jack"
# else 
#   echo "Your name is NOT Brad or Jack"
# fi

# COMPARISON
# NUM1=31
# NUM2=5
# if [ "$NUM1" -gt "$NUM2" ]
# then
#   echo "$NUM1 is greater than $NUM2"
# else
#   echo "$NUM1 is less than $NUM2"
# fi

########
# val1 -eq val2 Returns true if the values are equal
# val1 -ne val2 Returns true if the values are not equal
# val1 -gt val2 Returns true if val1 is greater than val2
# val1 -ge val2 Returns true if val1 is greater than or equal to val2
# val1 -lt val2 Returns true if val1 is less than val2
# val1 -le val2 Returns true if val1 is less than or equal to val2
########

# FILE CONDITIONS
# FILE="test.txt"
# if [ -e "$FILE" ]
# then
#   echo "$FILE exists"
# else
#   echo "$FILE does NOT exist"
# fi

# statement1 && statement2  # both statements are true
# statement1 || statement2  # at least one of the statements is true

# str1=str2       # str1 matches str2
# str1!=str2      # str1 does not match str2
# str1<str2       # str1 is less than str2
# str1>str2       # str1 is greater than str2
# -n str1         # str1 is not null (has length greater than 0)
# -z str1         # str1 is null (has length 0)

# -a file         # file exists
# -d file         # file exists and is a directory
# -e file         # file exists; same -a
# -f file         # file exists and is a regular file (i.e., not a directory or other special type of file)
# -r file         # you have read permission
# -s file         # file exists and is not empty
# -w file         # you have write permission
# -x file         # you have execute permission on file, or directory search permission if it is a directory
# -N file         # file was modified since it was last read
# -O file         # you own file
# -G file         # file's group ID matches yours (or one of yours, if you are in multiple groups)

# file1 -nt file2     # file1 is newer than file2
# file1 -ot file2     # file1 is older than file2

# -lt     # less than
# -le     # less than or equal
# -eq     # equal
# -ge     # greater than or equal
# -gt     # greater than
# -ne     # not equal
########

#CASE STATEMENT
read -p "Are you 21 or over? Y/N " ANSWER
case "$ANSWER" in 
  [yY] | [yY][eE][sS])
    echo "You can have a beer :)"
    ;;
  [nN] | [nN][oO])
    echo "Sorry, no drinking"
    ;;
  *)
    echo "Please enter y/yes or n/no"
    ;;
esac

# SIMPLE FOR LOOP
# NAMES="Brad Kevin Alice Mark"
# for NAME in $NAMES
#   do
#     echo "Hello $NAME"
# done

# FOR LOOP TO RENAME FILES
# FILES=$(ls *.txt)
# NEW="new"
# for FILE in $FILES  
#   do
#     echo "Renaming $FILE to new-$FILE"
#     mv $FILE $NEW-$FILE
# done

# WHILE LOOP - READ THROUGH A FILE LINE BY LINE
# LINE=1
# while read -r CURRENT_LINE
#   do
#     echo "$LINE: $CURRENT_LINE"
#     ((LINE++))
# done < "./new-1.txt"

# FUNCTION
# function sayHello() {
#   echo "Hello World"
# }
# sayHello

# FUNCTION WITH PARAMS
# function greet() {
#   echo "Hello, I am $1 and I am $2"
# }

# greet "Brad" "36"

# CREATE FOLDER AND WRITE TO A FILE
# mkdir hello
# touch "hello/world.txt"
# echo "Hello World" >> "hello/world.txt"
# echo "Created hello/world.txt"
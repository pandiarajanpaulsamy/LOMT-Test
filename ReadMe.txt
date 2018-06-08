LOMT front end test
------------------
1. Run the index.html file
2. After entering the user inputs name and role, while clicking submit button it will add data and it will show it in left side user list
3. By default I have created sample name and role in the format (Name - Role)
4. while clicking Name and role display system will prepopulate user seleted data and it can be editable
5. while clicking the delete button in the left hand side it will remove the record.
6. unit test results will be shown below the user list.

Note: In unit test I am facing one issue(ie, while focus goes for the first input it makes application reload), to resolve the issue I tried few steps 1. Removed conflicts of libraries(ie, jquery, boot.js, jasmine) 2. Tried with removing id attribute in input element but issue is persist, I need some more time to resolve the issue. I found the issue rootcause (where the issue is occuring) is happening only in the file boot.js(cdn file).

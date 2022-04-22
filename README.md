# Contacts
I could make the frontend of this app.got up into fudgy mess at the last moment i decided to discard it.

Backend fucntionality
Framwork Used :Node/ExpressJs
Database : MongoDB
 App functionality:
All routes are 
    http:localhost:5000/
these are associated with GET,POST,PUT,DELETE  method

To execute 
1.execute npm install inside backend to install all the libraries
2.execute node index.js

All the testing is done on PostMan agent
Get all contacts:
router.route('/').get(getAllContacts)
It will be responsible for fetching all the users from database .
I have implemented the following functinality in the backend search.
1.)Search via name (also regex is implemented so we can search via single or more alphabets)
    http:localhost:5000/?first_name=axxx& last_name=""
2.)search via email
    http:localhost:5000/?email="full email"
3.)via phone(It should be exact same number to get succefull result)
4.)Sorting via fields like name,email,phone
5.pagination/Filters with limit,skip
    http:localhost:5000/?page=1&limit=2&skip=1
    use whatever you like 
6.Search for particular fields like first name,last namefrom all the fields
    http:localhost:5000/?fields=first_name


updating:
    router.route('/').put(updateContacts)
    It takes one paramater that is email to find and update the particular field.

Create Task
router.route('/').post(createContact)
    It creates the contact in the database where email and phone must be unique.

deleting
same as updation it takes email as parameter to find and delete the contact
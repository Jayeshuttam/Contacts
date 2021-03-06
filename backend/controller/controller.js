const Contact = require('../model/contact')


//Get all contacts with Sorting ,filtering enabled
const getAllContacts = async(req,res)=>{
    console.log("Getting All Users...")
    const {first_name,last_name,email,phone,sort,fields } = req.query
    const queryObject={}
    
    if(first_name)
        queryObject.first_name = {$regex:first_name,$options:'i'}
    if(last_name)
        queryObject.last_name = {$regex:last_name,$options:'i'}
    if(email)
        queryObject.email = {$regex:email,$options:'i'}
    if(phone)
        queryObject.phone = phone


        console.log(queryObject)
 

    let result =  Contact.find(queryObject)
    //Sorting according to email,name,phone
    if(sort)
    {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
     }
     else{
        result = result.sort('email')
    }
    if(fields)
    {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }
    const page =Number(req.query.page)||1
    const limit =Number(req.query.limit)||10
    const skip =(page-1)*limit;

    result = result.skip(skip).limit(limit)
    const contacts =await result
    if(contacts.length<1)
        return res.status(200).send("No Users in the database")
        
    res.status(200).json({"Number of results":contacts.length,"Limit":limit,"page":page,contacts})

}
//create Contact
const createContact = async(req,res)=>{ 
    console.log("Create Users...")  
    //image

    console.log(req.body)
    const contact = await Contact.create(req.body,(err)=>{
        if(err)
       return res.status(400).send("Something Went Wrong")
    })
    res.status(201).send({contact})
}
//updating COntact
const updateContact = async(req,res) =>{
    console.log("Updating Users...")
    const _email =req.body.email
    console.log(_email)
    const contact = await Contact.findOneAndUpdate({email:_email},req.body,{runValidators:true,new:true})
    if(!contact)
    {
        return res.status(404).send("No user found with the searched query")
    }
    res.status(200).json({contact})
}
//deleting contact
const deleteContact = async(req,res)=>{
    console.log("Deleting Users...")
    const _email =req.body.email;
    console.log(_email)
    const contact = await Contact.findOneAndDelete({email:_email})
    if(!contact)
    {
        return res.status(404).send("No user found with the searched query")
    }
    res.status(200).json({contact})
}

module.exports = {getAllContacts,createContact,updateContact,deleteContact}
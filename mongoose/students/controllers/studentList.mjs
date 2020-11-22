const list = Student =>async (req, res)=>{
    try{
    const studentList= await Student.find();
    
    res.json(studentList);
}
catch(error){
    throw error;
}
}
export default list;
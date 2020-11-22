const deleteRegister = Student =>async (req, res)=>{
    try{
    const studentDelete= await Student.deleteOne({name:req.params.name});
    
    res.json(studentDelete);
}
catch(error){
    throw error;
}
}
export default deleteRegister;
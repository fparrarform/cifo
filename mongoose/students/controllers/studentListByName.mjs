const listByName = Student =>async (req, res)=>{
    try{
    const studentListByName= await Student.find({name:req.params.name});
    
    res.json(studentListByName);
}
catch(error){
    throw error;
}
}
export default listByName;
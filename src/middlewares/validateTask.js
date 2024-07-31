
const validateTask = (req, res, next) => {
    console.log(req.body)
    console.log(req)
    const { title, description, status, startDate,endDate,projects, priority, assignees } = req.body;
   if(!title || !description || !status || !startDate || !endDate || !projects || !priority){
        return res.status(400).json({message:"All fields are required"})
    }
    next();
}

export default validateTask;
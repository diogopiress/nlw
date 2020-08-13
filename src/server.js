require('express')()
.get("/", (req,res) => {
    return res.send("hi from NLW")

})
.listen(5500)
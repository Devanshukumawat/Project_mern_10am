const ProductCollection = require("../models/Product")

exports.productinsertController = async(req,res)=>{
    const{Pname,Pprice,Pdesc} = req.body


    const record = await new ProductCollection({
        ProductName:Pname,
    ProductPrice:Pprice,
    ProductDesc:Pdesc,
    })

    if(record==null){
        await record.save()
    res.json(record)
    }else{
        res.json({message:"Please Enter Product Details..😕"})
    }

    

}

exports.productDataController = async(req,res)=>{
    const record = await ProductCollection.find()
    res.json(record)
}


exports.updateFormController = async(req,res)=>{
    const ProductId = req.params.productid

    const record = await ProductCollection.findById(ProductId)
    res.json(record)

}


exports.updateProductController = async(req,res)=>{
    const id = req.params.id
     const {Pname,Pdesc,Pprice} = req.body
     const record =  await ProductCollection.findByIdAndUpdate(id,{
        ProductName:Pname,
    ProductPrice:Pprice,
    ProductDesc:Pdesc,
     })
     res.json(record)
}
